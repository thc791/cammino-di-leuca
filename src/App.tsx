import React, { useState, useMemo } from 'react';
import { Header, TabType } from './components/Header';
import { StageCard } from './components/StageCard';
import { PilgrimMap } from './components/PilgrimMap';
import { BudgetCalculator } from './components/BudgetCalculator';
import { BackpackChecklist } from './components/BackpackChecklist';
import { AiAssistantModal } from './components/AiAssistantModal';
import { EmergencyDirectoryModal } from './components/EmergencyDirectoryModal';
import { getRouteById, DEFAULT_ROUTE_ID } from './data/allStages';
import { PilgrimStage, RouteId } from './types';
import {
  Search,
  Filter,
  Church,
  Tent,
  LifeBuoy,
  Compass,
  Sparkles,
  MapPin,
  X,
  Layers,
  ShieldAlert,
  ArrowRight,
  Bookmark
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('stages');
  const [selectedRouteId, setSelectedRouteId] = useState<RouteId>(DEFAULT_ROUTE_ID);
  const [selectedRegion, setSelectedRegion] = useState<string>('Tutte le regioni');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterTentInConvent, setFilterTentInConvent] = useState<boolean>(false);
  const [selectedStage, setSelectedStage] = useState<PilgrimStage | null>(null);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);
  const [isAiFloatingOpen, setIsAiFloatingOpen] = useState<boolean>(false);

  // Active route definition
  const currentRoute = useMemo(() => getRouteById(selectedRouteId), [selectedRouteId]);

  const handleSelectRouteId = (routeId: RouteId) => {
    setSelectedRouteId(routeId);
    setSelectedRegion('Tutte le regioni');
    setSelectedStage(null);
  };

  // Filtered Stages for current route
  const filteredStages = useMemo(() => {
    return currentRoute.stages.filter((stage) => {
      // Region match
      if (selectedRegion !== 'Tutte le regioni' && stage.region !== selectedRegion) {
        return false;
      }
      // Tent in convent filter
      if (filterTentInConvent) {
        const hasTentConvent = stage.convents.some((c) => c.tentAllowedInGarden);
        if (!hasTentConvent) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchFromTo = stage.from.toLowerCase().includes(q) || stage.to.toLowerCase().includes(q);
        const matchDesc = stage.description.toLowerCase().includes(q);
        const matchConvent = stage.convents.some(
          (c) => c.name.toLowerCase().includes(q) || c.address.toLowerCase().includes(q)
        );
        const matchCamp = stage.campsites.some(
          (c) => c.name.toLowerCase().includes(q) || c.address.toLowerCase().includes(q)
        );
        const matchEmergency = stage.emergencyStays.some(
          (e) => e.name.toLowerCase().includes(q) || e.address.toLowerCase().includes(q)
        );
        return matchFromTo || matchDesc || matchConvent || matchCamp || matchEmergency;
      }
      return true;
    });
  }, [currentRoute, selectedRegion, filterTentInConvent, searchQuery]);

  const handleSelectOnMap = (stage: PilgrimStage) => {
    setSelectedStage(stage);
    setActiveTab('map');
  };

  const handleAskAiForStage = (stage: PilgrimStage) => {
    setSelectedStage(stage);
    setIsAiFloatingOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col font-sans text-stone-900">
      {/* Top Header with Route Switcher & Live Stats */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openEmergency={() => setIsEmergencyModalOpen(true)}
        selectedRouteId={selectedRouteId}
        onSelectRouteId={handleSelectRouteId}
        currentRoute={currentRoute}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        {/* TAB 1: TAPPE & CONVENTI */}
        {activeTab === 'stages' && (
          <div className="space-y-6">
            {/* Mission Hero Banner */}
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 sm:p-7 border border-stone-800 shadow-md relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono">
                  <span>
                    {currentRoute.destinationIcon} {currentRoute.name} &bull; {currentRoute.totalStages} Tappe Giornaliere &bull; Max {currentRoute.maxDailyKm} km
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                  Da Roma San Pietro a {currentRoute.destination.replace(/\(.*?\)/g, '').trim()}
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {currentRoute.description}
                </p>
                <div className="pt-1 text-xs text-amber-200/90 font-mono flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{currentRoute.historicalContext}</span>
                </div>
              </div>
            </div>

            {/* Filters and Search Toolbar */}
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cerca città, convento o luogo..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-8 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setFilterTentInConvent(!filterTentInConvent)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                      filterTentInConvent
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    <Tent className="w-3.5 h-3.5" />
                    <span>Solo con tenda in giardino convento</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('map')}
                    className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mappa Interattiva</span>
                  </button>
                </div>
              </div>

              {/* Region Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-stone-100">
                <span className="text-[11px] font-mono text-stone-400 uppercase font-semibold shrink-0 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Regione:
                </span>
                {currentRoute.regionFilters.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors cursor-pointer ${
                      selectedRegion === reg
                        ? 'bg-amber-600 text-white font-semibold'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            {/* Stages List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-500 px-1 font-mono">
                <span>
                  Visualizzate <strong>{filteredStages.length}</strong> di {currentRoute.totalStages} tappe ({currentRoute.name})
                </span>
                <span>Tutte rigorosamente sotto i 30 km / giorno</span>
              </div>

              {filteredStages.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-xl border border-stone-200 space-y-2">
                  <Compass className="w-8 h-8 text-stone-400 mx-auto" />
                  <h4 className="font-bold text-stone-800">Nessuna tappa trovata</h4>
                  <p className="text-xs text-stone-500">
                    Prova a modificare i filtri di ricerca o la regione selezionata.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedRegion('Tutte le regioni');
                      setFilterTentInConvent(false);
                    }}
                    className="mt-2 px-3 py-1.5 rounded bg-stone-100 text-stone-700 text-xs font-medium cursor-pointer"
                  >
                    Ripristina tutti i filtri
                  </button>
                </div>
              ) : (
                filteredStages.map((stage) => (
                  <StageCard
                    key={stage.number}
                    stage={stage}
                    onSelectOnMap={handleSelectOnMap}
                    onAskAi={handleAskAiForStage}
                    isExpandedDefault={filteredStages.length === 1}
                  />
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 2: MAPPA INTERATTIVA */}
        {activeTab === 'map' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white p-3.5 rounded-xl border border-stone-200">
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  Mappa Geografica &bull; {currentRoute.name}
                </h3>
                <p className="text-xs text-stone-500">
                  Visualizza l'intero tracciato {currentRoute.shortName} ({currentRoute.totalStages} tappe, {currentRoute.totalKm} km), i marker dorati dei conventi, le tende verdi e i salva-vita Booking rossi.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEmergencyModalOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>SOS & Info</span>
                </button>
              </div>
            </div>

            <PilgrimMap
              stages={currentRoute.stages}
              selectedStage={selectedStage}
              onSelectStage={(s) => setSelectedStage(s)}
              onAskAi={handleAskAiForStage}
            />
          </div>
        )}

        {/* TAB 3: CALCOLO SPESE & BUDGET */}
        {activeTab === 'budget' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                    Pianificazione Spese & Contabilità in Viaggio &bull; {currentRoute.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Calcola preventivamente il costo complessivo del viaggio ({currentRoute.totalStages} giorni) stimando donativi dei conventi, notti in tenda e acquisti market, e registra ogni spesa in tempo reale sul sentiero.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-semibold border border-amber-300">
                  {currentRoute.shortName} &bull; {currentRoute.totalStages} giorni
                </span>
              </div>
            </div>
            <BudgetCalculator currentRoute={currentRoute} />
          </div>
        )}

        {/* TAB 4: ZAINO & TENDA */}
        {activeTab === 'backpack' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                Equipaggiamento & Calcolo Grammi Zaino
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Camminare zaino e tenda per oltre 600-780 km richiede rigore nel peso. Mantieni il carico a secco sotto i 9.5 kg per preservare ginocchia e schiena!
              </p>
            </div>
            <BackpackChecklist />
          </div>
        )}

        {/* TAB 5: ASSISTENTE FRA CAMMINO AI */}
        {activeTab === 'ai' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                Guida Spirituale & Pratica del Pellegrino &bull; {currentRoute.name}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Chiedi supporto immediato a Fra Cammino: accoglienza nei conventi con credenziale, regole per la tenda e bivacco notturno, arrivo a Brindisi o Leuca, salva-vita Booking e fontanelle d'acqua.
              </p>
            </div>
            <AiAssistantModal currentStage={selectedStage} currentRoute={currentRoute} isInline={true} />
          </div>
        )}
      </main>

      {/* Floating AI Button (Available across tabs) */}
      {activeTab !== 'ai' && (
        <button
          onClick={() => setIsAiFloatingOpen(true)}
          id="floating-ai-btn"
          className="fixed bottom-5 right-5 z-40 px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-2xl font-semibold text-xs sm:text-sm flex items-center gap-2 border-2 border-amber-300 transition-transform hover:scale-105 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 animate-spin [animation-duration:4s]" />
          <span>Chiedi a Fra Cammino AI</span>
        </button>
      )}

      {/* Floating AI Drawer / Modal */}
      {isAiFloatingOpen && activeTab !== 'ai' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <AiAssistantModal
            currentStage={selectedStage}
            currentRoute={currentRoute}
            onClose={() => setIsAiFloatingOpen(false)}
            isInline={false}
          />
        </div>
      )}

      {/* Emergency SOS Directory Modal */}
      <EmergencyDirectoryModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-6 border-t border-stone-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-serif font-bold text-stone-200">
              Percorsi Religiosi: {currentRoute.name} ({currentRoute.shortName})
            </span>
            <p className="text-stone-500 text-[11px] mt-0.5">
              {currentRoute.totalStages} tappe rigorosamente sotto i 30 km &bull; Conventi con Credenziale, Tenda e Salva-Vita Booking
            </p>
          </div>
          <div className="flex items-center gap-4 text-stone-400 font-mono text-[11px]">
            <span>Pace e Bene</span>
            <span>&bull;</span>
            <button
              onClick={() => setIsEmergencyModalOpen(true)}
              className="hover:text-amber-400 underline cursor-pointer"
            >
              Info Credenziale & SOS
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

