import React, { useState } from 'react';
import {
  Church,
  Tent,
  LifeBuoy,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Droplets,
  Flame,
  Zap,
  Stamp,
  Navigation
} from 'lucide-react';
import { PilgrimStage, ConventHost, CampsiteSpot, EmergencyBookingStay } from '../types';

interface StageCardProps {
  stage: PilgrimStage;
  onSelectOnMap?: (stage: PilgrimStage) => void;
  onAskAi?: (stage: PilgrimStage) => void;
  isExpandedDefault?: boolean;
}

export const StageCard: React.FC<StageCardProps> = ({
  stage,
  onSelectOnMap,
  onAskAi,
  isExpandedDefault = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedDefault);

  return (
    <article
      id={`stage-card-${stage.number}`}
      className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Header of the Stage */}
      <div className="p-4 sm:p-5 bg-stone-50/70 border-b border-stone-200/80">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-600 text-white font-mono font-bold text-xs shadow-sm">
              {stage.number}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 font-mono">
              Tappa {stage.number} &bull; {stage.region}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
              {stage.distanceKm} km
            </span>
            <span className="px-2 py-0.5 rounded-md bg-stone-200 text-stone-700">
              +{stage.elevationGainM}m / -{stage.elevationLossM}m
            </span>
            <span
              className={`px-2 py-0.5 rounded-md font-medium ${
                stage.difficulty === 'Facile'
                  ? 'bg-blue-100 text-blue-800'
                  : stage.difficulty === 'Medio'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-rose-100 text-rose-800'
              }`}
            >
              {stage.difficulty}
            </span>
          </div>
        </div>

        {/* Route Title */}
        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 mb-1 flex items-center justify-between">
          <span>
            {stage.from} <span className="text-amber-600">→</span> {stage.to}
          </span>
        </h3>

        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-3">
          {stage.description}
        </p>

        {/* Quick Highlights Summary Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-2 border-t border-stone-200/60">
          <div className="flex items-center gap-3 text-stone-600">
            <span className="flex items-center gap-1 font-medium text-amber-800">
              <Church className="w-3.5 h-3.5 text-amber-600" />
              {stage.convents.length} Conventi / Chiese
            </span>
            <span className="flex items-center gap-1 font-medium text-emerald-800">
              <Tent className="w-3.5 h-3.5 text-emerald-600" />
              {stage.campsites.length} Aree Tenda
            </span>
            <span className="flex items-center gap-1 font-medium text-rose-800">
              <LifeBuoy className="w-3.5 h-3.5 text-rose-600" />
              2 Salva-Vita
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onSelectOnMap && (
              <button
                type="button"
                onClick={() => onSelectOnMap(stage)}
                className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                title="Vedi su mappa"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mappa</span>
              </button>
            )}

            {onAskAi && (
              <button
                type="button"
                onClick={() => onAskAi(stage)}
                className="px-2.5 py-1 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                title="Chiedi all'Assistente AI info su questa tappa"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Chiedi a Fra Cammino</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-3 py-1 rounded bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>{isExpanded ? 'Chiudi' : 'Tutti i Dettagli'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Details Sections */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-5 bg-white">
          {/* Water & Terrain Notice */}
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-xs text-sky-950 flex items-start gap-2.5">
            <Droplets className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Punti Acqua & Terreno: </span>
              {stage.waterPointsNote} &bull; <span className="italic">{stage.terrain}</span>
            </div>
          </div>

          {/* 1. SEZIONE CONVENTI & ACCOGLIENZA CON CREDENZIALE */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <Church className="w-4 h-4 text-amber-600" />
                1. Ospitalità Religiosa & Conventi (Con Credenziale)
              </h4>
              <span className="text-xs text-stone-500">Priorità donativo/gratis</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {stage.convents.map((convent: ConventHost) => (
                <div
                  key={convent.id}
                  className="p-3.5 rounded-lg border border-amber-200/90 bg-amber-50/40 hover:bg-amber-50/80 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="font-bold text-stone-900 text-sm leading-tight">
                        {convent.name}
                      </h5>
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded font-mono font-semibold bg-amber-200/80 text-amber-900">
                        {convent.costType === 'donativo_libero' ? 'Donativo Libero' : `€${convent.suggestedDonationEur} pellegrino`}
                      </span>
                    </div>

                    <p className="text-xs text-stone-500 mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                      <span>{convent.address}</span>
                    </p>

                    {convent.notes && (
                      <p className="text-xs text-stone-700 mb-2.5 italic bg-white/70 p-2 rounded border border-amber-100">
                        "{convent.notes}"
                      </p>
                    )}

                    {/* Services and tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {convent.tentAllowedInGarden && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-medium flex items-center gap-1">
                          <Tent className="w-3 h-3 text-emerald-600" />
                          Tenda ammessa nel giardino/orto!
                        </span>
                      )}
                      {convent.hasStamp && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-medium flex items-center gap-1">
                          <Stamp className="w-3 h-3 text-amber-700" />
                          Timbro Credenziale
                        </span>
                      )}
                      {convent.receptionHours && (
                        <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[11px] flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-stone-500" />
                          {convent.receptionHours}
                        </span>
                      )}
                      {convent.services?.map((srv, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-[10px]"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Actions */}
                  <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-xs">
                    <span className="text-stone-500 text-[11px] truncate max-w-[130px]">
                      {convent.contactPerson || 'Custode'}
                    </span>
                    <div className="flex items-center gap-2">
                      {convent.email && (
                        <a
                          href={`mailto:${convent.email}`}
                          className="p-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700"
                          title={`Scrivi email a ${convent.email}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={`tel:${convent.phone.replace(/\s+/g, '')}`}
                        className="px-2.5 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-medium flex items-center gap-1"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Chiama {convent.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. SEZIONE CAMPEGGI & AREE TENDA */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <Tent className="w-4 h-4 text-emerald-600" />
                2. Campeggi & Aree Bivacco Tenda
              </h4>
              <span className="text-xs text-stone-500">Zaino e tenda</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {stage.campsites.map((camp: CampsiteSpot) => (
                <div
                  key={camp.id}
                  className="p-3.5 rounded-lg border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50/80 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h5 className="font-bold text-stone-900 text-sm">
                        {camp.name}
                      </h5>
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded font-mono font-semibold bg-emerald-200 text-emerald-900">
                        {camp.priceTentPerNightEur === 0
                          ? 'Bivacco Gratuito'
                          : `€${camp.priceTentPerNightEur} / notte tenda`}
                      </span>
                    </div>

                    <p className="text-xs text-stone-500 mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                      <span>{camp.address}</span>
                    </p>

                    <p className="text-xs text-stone-700 mb-2.5 bg-white/70 p-2 rounded border border-emerald-100">
                      {camp.instructions}
                    </p>

                    {/* Features checklist */}
                    <div className="flex flex-wrap gap-2 text-[11px] mb-2 text-stone-600">
                      <span className="flex items-center gap-1">
                        <Droplets
                          className={`w-3 h-3 ${camp.waterAvailable ? 'text-blue-500' : 'text-stone-300'}`}
                        />
                        {camp.waterAvailable ? 'Acqua potabile' : 'No acqua'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Droplets
                          className={`w-3 h-3 ${camp.showerAvailable ? 'text-emerald-500' : 'text-stone-300'}`}
                        />
                        {camp.showerAvailable ? 'Doccia presente' : 'No doccia'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap
                          className={`w-3 h-3 ${camp.electricityAvailable ? 'text-amber-500' : 'text-stone-300'}`}
                        />
                        {camp.electricityAvailable ? 'Ricarica cell' : 'Off-grid'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame
                          className={`w-3 h-3 ${camp.stoveCookingAllowed ? 'text-orange-500' : 'text-stone-300'}`}
                        />
                        {camp.stoveCookingAllowed ? 'Fornellino OK' : 'No fiamme'}
                      </span>
                    </div>
                  </div>

                  {/* Camping action */}
                  {camp.phone && (
                    <div className="pt-2 border-t border-emerald-200/60 flex items-center justify-end text-xs">
                      <a
                        href={`tel:${camp.phone.replace(/\s+/g, '')}`}
                        className="px-2.5 py-1 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-medium flex items-center gap-1"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Info Piazzola {camp.phone}</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. SEZIONE SALVA-VITA BOOKING (LE 2 OFFERTE PIU ECONOMICHE) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <LifeBuoy className="w-4 h-4 text-rose-600" />
                3. "Salva-Vita" Booking (Le 2 Più Economiche Rilevate)
              </h4>
              <span className="text-xs text-rose-700 font-medium">
                In caso di maltempo, stanchezza o convento pieno
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {stage.emergencyStays.map((stay: EmergencyBookingStay, idx: number) => (
                <div
                  key={stay.id}
                  className="p-3.5 rounded-lg border border-rose-200 bg-rose-50/30 hover:bg-rose-50/70 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-rose-200 text-rose-800 text-[10px] font-bold flex items-center justify-center font-mono">
                          {idx + 1}
                        </span>
                        <h5 className="font-bold text-stone-900 text-sm">
                          {stay.name}
                        </h5>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs px-2 py-0.5 rounded font-mono font-bold bg-rose-600 text-white">
                          Da €{stay.priceMinEur}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-500 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                        <span>{stay.address}</span>
                      </span>
                      <span className="font-mono text-stone-600 font-medium">
                        ~{stay.distanceFromTrailMeters}m dal cammino
                      </span>
                    </p>

                    {/* Perks */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {stay.perks?.map((perk, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2 py-0.5 rounded bg-white border border-rose-100 text-stone-600 text-[10px]"
                        >
                          ✓ {perk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Direct Booking search & Phone */}
                  <div className="pt-2 border-t border-rose-200/60 flex items-center justify-between text-xs gap-2">
                    {stay.phone ? (
                      <a
                        href={`tel:${stay.phone.replace(/\s+/g, '')}`}
                        className="px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center gap-1 font-medium"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{stay.phone}</span>
                      </a>
                    ) : (
                      <span className="text-[11px] text-stone-400">Contatto su Booking</span>
                    )}

                    <a
                      href={stay.bookingSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-rose-600 hover:bg-rose-700 text-white font-semibold flex items-center gap-1 transition-colors shadow-sm ml-auto"
                    >
                      <span>Vedi Offerte Booking</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
