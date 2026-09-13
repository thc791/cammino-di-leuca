import React from 'react';
import { Compass, MapPin, Tent, Euro, Sparkles, Backpack, ShieldAlert, Church, Check, Navigation } from 'lucide-react';
import { PilgrimRoute, RouteId } from '../types';

export type TabType = 'stages' | 'map' | 'budget' | 'backpack' | 'ai';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  openEmergency: () => void;
  selectedRouteId: RouteId;
  onSelectRouteId: (routeId: RouteId) => void;
  currentRoute: PilgrimRoute;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openEmergency,
  selectedRouteId,
  onSelectRouteId,
  currentRoute,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 text-stone-100 backdrop-blur border-b border-stone-800 shadow-md">
      {/* Top Banner with Pilgrimage Stats & Route Switcher */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-lg shadow-inner">
            {currentRoute.destinationIcon || '☩'}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-serif font-semibold text-stone-100 tracking-wide flex items-center gap-1.5 text-base sm:text-lg">
                {currentRoute.name}
              </h1>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-normal border border-amber-500/30">
                {currentRoute.shortName}
              </span>
            </div>
            <p className="text-stone-400 text-xs hidden sm:block">
              {currentRoute.subtitle} &bull; Conventi con Credenziale, Tenda e Salva-Vita
            </p>
          </div>
        </div>

        {/* Route Selector Pills */}
        <div className="flex items-center bg-stone-950/80 p-1 rounded-xl border border-stone-800 font-mono text-xs">
          <button
            onClick={() => onSelectRouteId('roma_brindisi')}
            id="route-btn-brindisi"
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedRouteId === 'roma_brindisi'
                ? 'bg-amber-600 text-white font-bold shadow-sm'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
            title="Roma San Pietro → Brindisi (28 tappe per la Terra Santa)"
          >
            <span>🕊️ Terra Santa (Brindisi)</span>
            <span className="text-[10px] opacity-80 font-normal">28 tappe</span>
          </button>

          <button
            onClick={() => onSelectRouteId('roma_leuca')}
            id="route-btn-leuca"
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedRouteId === 'roma_leuca'
                ? 'bg-amber-600 text-white font-bold shadow-sm'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
            title="Roma San Pietro → Santa Maria di Leuca (35 tappe)"
          >
            <span>⚓ Leuca</span>
            <span className="text-[10px] opacity-80 font-normal">35 tappe</span>
          </button>
        </div>

        {/* Vital Stats Chips */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs">
          <div className="px-2.5 py-1 rounded-md bg-stone-800/80 border border-stone-700/60 flex items-center gap-1.5 text-stone-300">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentRoute.totalStages} Tappe</span>
          </div>
          <div className="px-2.5 py-1 rounded-md bg-stone-800/80 border border-stone-700/60 flex items-center gap-1.5 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{currentRoute.totalKm} km</span>
          </div>
          <div className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Max {currentRoute.maxDailyKm} km/dì</span>
          </div>
          <button
            onClick={openEmergency}
            id="emergency-contacts-btn"
            className="px-2.5 py-1 rounded-md bg-rose-950/70 hover:bg-rose-900 border border-rose-700/70 text-rose-300 flex items-center gap-1 transition-colors cursor-pointer"
            title="Contatti emergenze e soccorso"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span className="hidden md:inline">SOS & Info</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="max-w-7xl mx-auto px-4 flex items-center overflow-x-auto no-scrollbar border-t border-stone-800/80 text-xs sm:text-sm font-medium">
        <button
          onClick={() => setActiveTab('stages')}
          id="tab-stages"
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'stages'
              ? 'border-amber-400 text-amber-300 bg-stone-800/40 font-semibold'
              : 'border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-800/20'
          }`}
        >
          <Church className="w-4 h-4 text-amber-400" />
          <span>Tappe & Conventi ({currentRoute.totalStages})</span>
        </button>

        <button
          onClick={() => setActiveTab('map')}
          id="tab-map"
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'map'
              ? 'border-amber-400 text-amber-300 bg-stone-800/40 font-semibold'
              : 'border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-800/20'
          }`}
        >
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Mappa Interattiva</span>
        </button>

        <button
          onClick={() => setActiveTab('budget')}
          id="tab-budget"
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'budget'
              ? 'border-amber-400 text-amber-300 bg-stone-800/40 font-semibold'
              : 'border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-800/20'
          }`}
        >
          <Euro className="w-4 h-4 text-amber-300" />
          <span>Calcolo Spese & Budget ({currentRoute.totalStages} gg)</span>
        </button>

        <button
          onClick={() => setActiveTab('backpack')}
          id="tab-backpack"
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'backpack'
              ? 'border-amber-400 text-amber-300 bg-stone-800/40 font-semibold'
              : 'border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-800/20'
          }`}
        >
          <Backpack className="w-4 h-4 text-sky-400" />
          <span>Zaino & Tenda Grammi</span>
        </button>

        <button
          onClick={() => setActiveTab('ai')}
          id="tab-ai"
          className={`flex items-center gap-2 px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ml-auto cursor-pointer ${
            activeTab === 'ai'
              ? 'border-amber-400 text-amber-300 bg-amber-500/10 font-semibold'
              : 'border-transparent text-amber-400 hover:text-amber-200 hover:bg-amber-500/5'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Fra Cammino AI</span>
        </button>
      </div>
    </header>
  );
};
