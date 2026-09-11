import React from 'react';
import { Compass, MapPin, Tent, Euro, Sparkles, Backpack, ShieldAlert, Church } from 'lucide-react';
import { TOTAL_KM, TOTAL_STAGES, MAX_DAILY_KM } from '../data/allStages';

export type TabType = 'stages' | 'map' | 'budget' | 'backpack' | 'ai';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  openEmergency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openEmergency,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 text-stone-100 backdrop-blur border-b border-stone-800 shadow-md">
      {/* Top Banner with Pilgrimage Stats */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold">
            ☩
          </div>
          <div>
            <h1 className="font-serif font-semibold text-stone-100 tracking-wide flex items-center gap-1.5 text-base sm:text-lg">
              Cammino di Leuca
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-normal border border-amber-500/30">
                Roma → Finibus Terrae
              </span>
            </h1>
            <p className="text-stone-400 text-xs hidden sm:block">
              Via Francigena nel Sud &bull; Conventi con Credenziale, Tenda e Salva-Vita Booking
            </p>
          </div>
        </div>

        {/* Vital Stats Chips */}
        <div className="flex items-center gap-2 sm:gap-4 font-mono text-xs">
          <div className="px-2.5 py-1 rounded-md bg-stone-800/80 border border-stone-700/60 flex items-center gap-1.5 text-stone-300">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>{TOTAL_STAGES} Tappe</span>
          </div>
          <div className="px-2.5 py-1 rounded-md bg-stone-800/80 border border-stone-700/60 flex items-center gap-1.5 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{TOTAL_KM} km</span>
          </div>
          <div className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Max {MAX_DAILY_KM} km/dì</span>
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
          <span>Tappe & Conventi (35)</span>
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
          <span>Calcolo Spese & Budget</span>
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
