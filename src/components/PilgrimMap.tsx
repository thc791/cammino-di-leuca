import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { PilgrimStage, ConventHost, CampsiteSpot, EmergencyBookingStay } from '../types';
import { allStages } from '../data/allStages';
import { Church, Tent, LifeBuoy, MapPin, Navigation, Eye, EyeOff } from 'lucide-react';

interface PilgrimMapProps {
  stages: PilgrimStage[];
  selectedStage: PilgrimStage | null;
  onSelectStage: (stage: PilgrimStage) => void;
  onAskAi: (stage: PilgrimStage) => void;
}

export const PilgrimMap: React.FC<PilgrimMapProps> = ({
  stages,
  selectedStage,
  onSelectStage,
  onAskAi,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const polylineLayerRef = useRef<L.Polyline | null>(null);

  const [showConvents, setShowConvents] = useState(true);
  const [showCampsites, setShowCampsites] = useState(true);
  const [showEmergency, setShowEmergency] = useState(true);
  const [showRoute, setShowRoute] = useState(true);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // already initialized

    // Center map on Central-Southern Italy (between Rome and Leuca)
    const map = L.map(mapContainerRef.current, {
      center: [41.2, 15.5],
      zoom: 7,
      zoomControl: true,
      attributionControl: true,
    });

    // Clean OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Cammino di Leuca',
    }).addTo(map);

    markersLayerRef.current = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers & Polyline
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    if (polylineLayerRef.current) {
      polylineLayerRef.current.remove();
      polylineLayerRef.current = null;
    }

    // 1. Draw Route Polyline from stage coords
    if (showRoute) {
      const routePoints: [number, number][] = [];
      stages.forEach((stage, idx) => {
        if (idx === 0) {
          routePoints.push(stage.startCoordinates);
        }
        routePoints.push(stage.coordinates);
      });

      polylineLayerRef.current = L.polyline(routePoints, {
        color: '#d97706', // amber-600
        weight: 4,
        opacity: 0.85,
        dashArray: '6, 6',
      }).addTo(map);
    }

    // 2. Stage Waypoint Markers
    stages.forEach((stage) => {
      const isSelected = selectedStage?.number === stage.number;

      // Stage circle marker
      const stageMarker = L.circleMarker(stage.coordinates, {
        radius: isSelected ? 9 : 6,
        fillColor: isSelected ? '#b45309' : '#f59e0b',
        color: '#78350f',
        weight: isSelected ? 3 : 1.5,
        opacity: 1,
        fillOpacity: 0.9,
      });

      stageMarker.bindPopup(`
        <div style="font-family: sans-serif; font-size: 13px; line-height: 1.4; min-width: 200px;">
          <div style="background:#fef3c7; color:#92400e; font-weight: bold; font-size: 11px; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 4px;">
            Tappa ${stage.number} &bull; ${stage.distanceKm} km
          </div>
          <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: bold; color: #1c1917;">
            ${stage.from} → ${stage.to}
          </h4>
          <p style="margin: 0 0 6px; color: #57534e; font-size: 11px;">
            ${stage.description.slice(0, 120)}...
          </p>
          <div style="display: flex; gap: 4px; margin-top: 6px;">
            <button id="pop-select-${stage.number}" style="flex:1; background:#d97706; color:white; border:none; padding:4px 8px; border-radius:4px; font-size:11px; font-weight:bold; cursor:pointer;">
              Seleziona Tappa
            </button>
          </div>
        </div>
      `);

      stageMarker.on('popupopen', () => {
        const btn = document.getElementById(`pop-select-${stage.number}`);
        if (btn) {
          btn.onclick = () => onSelectStage(stage);
        }
      });

      markersLayer.addLayer(stageMarker);

      // 3. Convents Markers (Amber Cross)
      if (showConvents) {
        stage.convents.forEach((convent: ConventHost) => {
          if (convent.lat && convent.lng) {
            const conventIcon = L.divIcon({
              className: 'custom-convent-marker',
              html: `
                <div style="background:#b45309; color:white; border:2px solid #ffffff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; box-shadow:0 2px 5px rgba(0,0,0,0.3);">
                  ☩
                </div>
              `,
              iconSize: [26, 26],
              iconAnchor: [13, 13],
            });

            const marker = L.marker([convent.lat, convent.lng], { icon: conventIcon });
            marker.bindPopup(`
              <div style="font-family: sans-serif; font-size: 13px; line-height: 1.4; max-width: 250px;">
                <div style="background:#fef3c7; color:#78350f; font-weight:bold; font-size:10px; padding:2px 6px; border-radius:4px; display:inline-block; margin-bottom:4px;">
                  ☩ CONVENTO &bull; Tappa ${stage.number}
                </div>
                <h4 style="margin: 0 0 3px; font-size: 13px; font-weight: bold; color: #1c1917;">
                  ${convent.name}
                </h4>
                <p style="margin:0 0 4px; font-size:11px; color:#57534e;">
                  ${convent.address}
                </p>
                <div style="margin-bottom:6px; font-size:11px; font-weight:bold; color:#b45309;">
                  ${convent.costType === 'donativo_libero' ? 'Donativo Libero' : `€${convent.suggestedDonationEur} / notte`}
                  ${convent.tentAllowedInGarden ? ' &bull; Tenda in giardino OK' : ''}
                </div>
                <div style="display:flex; gap:6px;">
                  <a href="tel:${convent.phone.replace(/\s+/g, '')}" style="background:#d97706; color:white; padding:4px 8px; border-radius:4px; text-decoration:none; font-size:11px; font-weight:bold; text-align:center;">
                    Chiama ${convent.phone}
                  </a>
                </div>
              </div>
            `);
            markersLayer.addLayer(marker);
          }
        });
      }

      // 4. Campsites & Tent spots (Emerald Tent)
      if (showCampsites) {
        stage.campsites.forEach((camp: CampsiteSpot) => {
          if (camp.lat && camp.lng) {
            const campIcon = L.divIcon({
              className: 'custom-camp-marker',
              html: `
                <div style="background:#047857; color:white; border:2px solid #ffffff; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; box-shadow:0 2px 5px rgba(0,0,0,0.3);">
                  ▲
                </div>
              `,
              iconSize: [26, 26],
              iconAnchor: [13, 13],
            });

            const marker = L.marker([camp.lat, camp.lng], { icon: campIcon });
            marker.bindPopup(`
              <div style="font-family: sans-serif; font-size: 13px; line-height: 1.4; max-width: 250px;">
                <div style="background:#d1fae5; color:#065f46; font-weight:bold; font-size:10px; padding:2px 6px; border-radius:4px; display:inline-block; margin-bottom:4px;">
                  ▲ TENDA / CAMPEGGIO &bull; Tappa ${stage.number}
                </div>
                <h4 style="margin: 0 0 3px; font-size: 13px; font-weight: bold; color: #1c1917;">
                  ${camp.name}
                </h4>
                <p style="margin:0 0 4px; font-size:11px; color:#57534e;">
                  ${camp.address}
                </p>
                <div style="margin-bottom:6px; font-size:11px; font-weight:bold; color:#047857;">
                  ${camp.priceTentPerNightEur === 0 ? 'Bivacco Gratuito' : `€${camp.priceTentPerNightEur} / notte tenda`}
                  &bull; ${camp.stoveCookingAllowed ? 'Fornellino OK' : 'No fiamme'}
                </div>
                ${
                  camp.phone
                    ? `<a href="tel:${camp.phone.replace(/\s+/g, '')}" style="display:inline-block; background:#047857; color:white; padding:4px 8px; border-radius:4px; text-decoration:none; font-size:11px; font-weight:bold;">
                    Chiama ${camp.phone}
                  </a>`
                    : ''
                }
              </div>
            `);
            markersLayer.addLayer(marker);
          }
        });
      }

      // 5. Emergency Booking Stays (Rose Lifebuoy)
      if (showEmergency) {
        stage.emergencyStays.forEach((stay: EmergencyBookingStay) => {
          if (stay.lat && stay.lng) {
            const stayIcon = L.divIcon({
              className: 'custom-stay-marker',
              html: `
                <div style="background:#e11d48; color:white; border:2px solid #ffffff; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; box-shadow:0 2px 5px rgba(0,0,0,0.3);">
                  ◎
                </div>
              `,
              iconSize: [24, 24],
              iconAnchor: [12, 12],
            });

            const marker = L.marker([stay.lat, stay.lng], { icon: stayIcon });
            marker.bindPopup(`
              <div style="font-family: sans-serif; font-size: 13px; line-height: 1.4; max-width: 250px;">
                <div style="background:#ffe4e6; color:#9f1239; font-weight:bold; font-size:10px; padding:2px 6px; border-radius:4px; display:inline-block; margin-bottom:4px;">
                  ◎ SALVA-VITA BOOKING &bull; Tappa ${stage.number}
                </div>
                <h4 style="margin: 0 0 3px; font-size: 13px; font-weight: bold; color: #1c1917;">
                  ${stay.name}
                </h4>
                <div style="font-size:12px; font-weight:bold; color:#e11d48; margin-bottom:4px;">
                  Da €${stay.priceMinEur} &bull; ~${stay.distanceFromTrailMeters}m dal cammino
                </div>
                <a href="${stay.bookingSearchUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block; background:#e11d48; color:white; padding:4px 8px; border-radius:4px; text-decoration:none; font-size:11px; font-weight:bold; margin-top:2px;">
                  Vedi su Booking.com
                </a>
              </div>
            `);
            markersLayer.addLayer(marker);
          }
        });
      }
    });

    // Zoom to selected stage if present
    if (selectedStage) {
      map.setView(selectedStage.coordinates, 12, { animate: true });
    }
  }, [stages, selectedStage, showConvents, showCampsites, showEmergency, showRoute, onSelectStage]);

  // Geolocation Handler
  const handleLocateMe = () => {
    if (!navigator.geolocation || !mapInstanceRef.current) {
      alert('Geolocalizzazione non supportata o permessi non concessi.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(coords);

        const map = mapInstanceRef.current;
        if (map) {
          map.setView(coords, 13, { animate: true });

          L.popup()
            .setLatLng(coords)
            .setContent(
              `<div style="font-family:sans-serif; font-size:12px; font-weight:bold; color:#0f766e;">
                Tu sei qui (Posizione GPS)
              </div>`
            )
            .openOn(map);
        }
      },
      (err) => {
        console.warn('Errore geolocalizzazione:', err);
        alert('Impossibile rilevare la posizione GPS attuale.');
      }
    );
  };

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([41.2, 15.5], 7, { animate: true });
    }
  };

  return (
    <div className="relative w-full h-[600px] sm:h-[680px] rounded-xl overflow-hidden border border-stone-300 shadow-md">
      {/* Leaflet Map Div */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Interactive Map Filter Bar */}
      <div className="absolute top-3 right-3 z-[1000] bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-stone-200 shadow-lg text-xs space-y-2 max-w-[200px]">
        <div className="font-bold text-stone-800 uppercase tracking-wider font-mono text-[10px] pb-1 border-b border-stone-200">
          Filtri Mappa
        </div>

        <button
          onClick={() => setShowConvents(!showConvents)}
          className={`w-full flex items-center justify-between px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
            showConvents
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-stone-100 text-stone-500'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-amber-700 font-bold">☩</span> Conventi ({allStages.reduce((acc, s) => acc + s.convents.length, 0)})
          </span>
          {showConvents ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>

        <button
          onClick={() => setShowCampsites(!showCampsites)}
          className={`w-full flex items-center justify-between px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
            showCampsites
              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
              : 'bg-stone-100 text-stone-500'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-700 font-bold">▲</span> Aree Tenda ({allStages.reduce((acc, s) => acc + s.campsites.length, 0)})
          </span>
          {showCampsites ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>

        <button
          onClick={() => setShowEmergency(!showEmergency)}
          className={`w-full flex items-center justify-between px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
            showEmergency
              ? 'bg-rose-100 text-rose-900 border border-rose-300'
              : 'bg-stone-100 text-stone-500'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-rose-700 font-bold">◎</span> Salva-Vita (70)
          </span>
          {showEmergency ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>

        <button
          onClick={() => setShowRoute(!showRoute)}
          className={`w-full flex items-center justify-between px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
            showRoute
              ? 'bg-amber-50 text-stone-800 border border-amber-200'
              : 'bg-stone-100 text-stone-500'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <Navigation className="w-3 h-3 text-amber-600" /> Tracciato GPX
          </span>
          {showRoute ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>

        <div className="pt-1 border-t border-stone-200 flex flex-col gap-1">
          <button
            onClick={handleLocateMe}
            className="w-full py-1.5 px-2 bg-stone-900 hover:bg-stone-800 text-white rounded font-medium flex items-center justify-center gap-1 transition-colors cursor-pointer"
          >
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>Mia Posizione GPS</span>
          </button>
          <button
            onClick={handleResetView}
            className="w-full py-1 px-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded font-medium text-[11px] transition-colors cursor-pointer text-center"
          >
            Vista Panoramica
          </button>
        </div>
      </div>

      {/* Selected Stage Banner at the bottom of the map */}
      {selectedStage && (
        <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 z-[1000] bg-white/95 backdrop-blur-md p-3 rounded-lg border border-amber-300 shadow-xl max-w-md">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Tappa {selectedStage.number} Selezionata &bull; {selectedStage.region}
              </span>
              <h4 className="font-serif font-bold text-stone-900 text-sm mt-1">
                {selectedStage.from} → {selectedStage.to}
              </h4>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
              {selectedStage.distanceKm} km
            </span>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 mb-2">
            {selectedStage.description}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-stone-200 text-xs">
            <span className="text-stone-500">
              {selectedStage.convents.length} conventi &bull; {selectedStage.campsites.length} aree tenda
            </span>
            <button
              onClick={() => onAskAi(selectedStage)}
              className="px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs flex items-center gap-1 cursor-pointer"
            >
              Chiedi a Fra Cammino AI
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
