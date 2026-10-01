import React, { useState } from 'react';
import {
  Ship,
  Plane,
  Compass,
  MapPin,
  Church,
  Tent,
  LifeBuoy,
  AlertTriangle,
  Info,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Flame,
  ShieldCheck,
  Calendar,
  DollarSign,
  Sun,
  Droplet,
  Scroll,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { stagesHolyLand } from '../data/stagesHolyLand';
import { RouteId, PilgrimStage } from '../types';

interface HolyLandGuideProps {
  onLoadHolyLandRoute: () => void;
  onSelectStageOnMap?: (stage: PilgrimStage) => void;
}

type GuideSection = 'sea' | 'flight' | 'walking_stages' | 'practical';

export const HolyLandGuide: React.FC<HolyLandGuideProps> = ({
  onLoadHolyLandRoute,
  onSelectStageOnMap,
}) => {
  const [activeSection, setActiveSection] = useState<GuideSection>('sea');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Hero Banner with Holy Land Identity */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-amber-950 text-stone-100 rounded-2xl p-6 sm:p-8 border border-amber-900/40 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold">
            <span>☩ GUIDA UFFICIALE OLTREMARE & TERRA SANTA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
            Da Brindisi alla Città Santa di Gerusalemme
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl">
            Tutto ciò che il pellegrino moderno con <strong>zaino e tenda</strong> deve sapere per superare il mare
            (tramite lo <strong>stretto marittimo in traghetto</strong> o con il <strong>volo di raccordo logistico</strong>) e
            compiere le storiche <strong>6 tappe a piedi</strong> (rigorosamente sotto i 30 km giornalieri) dal porto biblico
            di Giaffa fino alla Basilica della Risurrezione (Santo Sepolcro) a Gerusalemme.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onLoadHolyLandRoute}
              id="activate-holyland-route-btn"
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-450 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-transform hover:scale-105 shadow-lg cursor-pointer"
            >
              <span>☩ Attiva Percorso Tappe a Piedi (Giaffa → Gerusalemme)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-amber-200/80 font-mono">
              6 tappe &bull; 118.9 km &bull; Max 22.4 km/dì
            </span>
          </div>
        </div>
      </div>

      {/* Guide Navigation Section Pills */}
      <div className="bg-white p-2 sm:p-3 rounded-2xl border border-stone-200 shadow-sm flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveSection('sea')}
          id="guide-tab-sea"
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            activeSection === 'sea'
              ? 'bg-sky-900 text-white shadow-md'
              : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
          }`}
        >
          <Ship className="w-4 h-4 text-sky-400" />
          <span>1. Passare lo Stretto & Traghetti</span>
        </button>

        <button
          onClick={() => setActiveSection('flight')}
          id="guide-tab-flight"
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            activeSection === 'flight'
              ? 'bg-amber-800 text-white shadow-md'
              : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
          }`}
        >
          <Plane className="w-4 h-4 text-amber-300" />
          <span>2. Raccordo Aereo & Regole Zaino</span>
        </button>

        <button
          onClick={() => setActiveSection('walking_stages')}
          id="guide-tab-stages"
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            activeSection === 'walking_stages'
              ? 'bg-emerald-800 text-white shadow-md'
              : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
          }`}
        >
          <Compass className="w-4 h-4 text-emerald-300" />
          <span>3. Le 6 Tappe a Piedi a Gerusalemme</span>
        </button>

        <button
          onClick={() => setActiveSection('practical')}
          id="guide-tab-practical"
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            activeSection === 'practical'
              ? 'bg-stone-800 text-white shadow-md'
              : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
          }`}
        >
          <Scroll className="w-4 h-4 text-amber-400" />
          <span>4. Credenziale, Acqua & Sicurezza</span>
        </button>
      </div>

      {/* SECTION 1: PASSAGGIO MARITTIMO & TRAGHETTI */}
      {activeSection === 'sea' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <Ship className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-lg sm:text-xl">
                  Il Passaggio dello Stretto di Brindisi & Le Rotte del Mare
                </h3>
                <p className="text-xs text-stone-500 font-mono">
                  Canale d'Otranto &bull; Mar Ionio &bull; Grecia &bull; Verso l'Oriente
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed">
              Brindisi è definita la <em>Porta d'Oriente</em>: dal suo seno portuale naturale, protetto dai venti dell'Adriatico,
              per oltre un millennio sono salpate le galee dei pellegrini, dei Templari e dei Crociati verso i Luoghi Santi.
              La tradizione vuole che prima di imbarcarsi il pellegrino si rechi alle <strong>Colonne Romane terminali dell'Appia</strong>{' '}
              e riceva la solenne benedizione dei naviganti presso il <strong>Tempio di San Giovanni al Sepolcro</strong>.
            </p>

            {/* Practical Ferry Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200 space-y-2">
                <h4 className="font-bold text-sky-900 text-sm flex items-center gap-2">
                  <Ship className="w-4 h-4 text-sky-700" />
                  Traghetto Brindisi → Grecia (Igoumenitsa / Patrasso)
                </h4>
                <ul className="text-xs text-sky-800 space-y-1.5 leading-relaxed">
                  <li>• <strong>Compagnie marittime:</strong> Grimaldi Lines, A-Ships Management.</li>
                  <li>• <strong>Frequenza:</strong> Giornaliera (partenze serali h 20:00 o 22:00 da Brindisi Costa Morena).</li>
                  <li>• <strong>Tariffa "Passaggio Ponte" (Deck):</strong> Da <strong>45€ a 75€</strong> per passeggero a piedi con zaino.</li>
                  <li>• <strong>Tempo di traversata:</strong> Circa 8-9 ore per Igoumenitsa (all'alba si approda in Grecia).</li>
                  <li>• <strong>Dormire a bordo con zaino:</strong> È consuetudine per i viaggiatori stendere il materassino e il sacco a pelo nelle poltrone lounge interne o nei ponti coperti non esposti al vento.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-700" />
                  La Prosecuzione Marittima verso Israele / Terra Santa
                </h4>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-relaxed">
                  <li>• <strong>La rotta storica:</strong> Dalla Grecia i pellegrini medievali proseguivano per le isole di Creta e Rodi, poi Cipro (porto di Limassol) e infine approdavano a Giaffa o San Giovanni d'Acri (Akko).</li>
                  <li>• <strong>Situazione attuale navi civili:</strong> Oggi non esistono più traghetti regolari di linea passeggeri diretti tra Italia e Israele (le uniche navi sono mercantili o navi da crociera che non accettano passeggeri a piedi singoli con credenziale).</li>
                  <li>• <strong>Traghetti estivi Grecia-Cipro:</strong> È attivo d'estate il collegamento navale Pireo/Atene → Limassol (Cipro) operato da Scandro Holding (~40€ ponte).</li>
                  <li>• <strong>Come raggiungere Israele dal mare:</strong> Da Cipro o dalla Grecia la quasi totalità dei pellegrini oggi completa il raccordo marittimo verso Tel Aviv/Giaffa con un breve volo navetta di 40 minuti da Larnaca/Atene.</li>
                </ul>
              </div>
            </div>

            {/* Spiritual & Practical Box */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-250 text-xs text-amber-900 space-y-1.5">
              <div className="font-bold flex items-center gap-2">
                <Church className="w-4 h-4 text-amber-700" />
                <span>Il Rito del Timbro e della Benedizione a Brindisi prima di salpare</span>
              </div>
              <p className="leading-relaxed text-amber-800">
                Prima di salire a bordo, presenta la tua credenziale al <strong>Tempio di San Giovanni al Sepolcro</strong>{' '}
                (Largo San Giovanni al Sepolcro, a 300m dal porto): riceverai il timbro speciale con la Croce di Terra Santa
                e la pergamena di benedizione per la traversata delle acque.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: RACCORDO AEREO & REGOLE ZAINO */}
      {activeSection === 'flight' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-lg sm:text-xl">
                  Il Raccordo Aereo: Il "Ponte dei Cieli" nel Pellegrinaggio
                </h3>
                <p className="text-xs text-stone-500 font-mono">
                  Aeroporto di Brindisi (BDS) &bull; Tel Aviv Ben Gurion (TLV) &bull; Regole Bagaglio & Tenda
                </p>
              </div>
            </div>

            {/* Spiritual FAQ */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-300 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>"L'aereo è permesso in un pellegrinaggio a piedi?"</span>
              </div>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                <strong>Sì, è pienamente legittimo e riconosciuto dalla Custodia di Terra Santa dei Frati Minori.</strong>{' '}
                Nell'antichità il passaggio da Brindisi a Giaffa avveniva per forza di cose via mare su navi a vela o remi.
                Nel mondo moderno, a causa della totale assenza di collegamenti marittimi passeggeri civili diretti per le mutate
                condizioni geopolitiche del Mediterraneo orientale, la Chiesa e le confraternite di pellegrini considerano il volo
                come un <em>"ponte logistico neutrale"</em>. L'importante è che il pellegrinaggio rimanga autenticamente
                a piedi e con lo zaino: una volta atterrati a Tel Aviv/Giaffa, ci si rimette in cammino passo dopo passo verso Gerusalemme!
              </p>
            </div>

            {/* Flights from Brindisi / Puglia */}
            <div className="space-y-3">
              <h4 className="font-bold text-stone-800 text-sm flex items-center gap-2">
                <Plane className="w-4 h-4 text-stone-600" />
                Come volare da Brindisi a Tel Aviv (Ben Gurion TLV)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900">1. Da Brindisi (BDS) via Atene o Roma</div>
                  <p className="text-stone-600">
                    Dall'Aeroporto del Salento (BDS) a 4 km dal centro di Brindisi partono voli con scalo breve a Roma o Atene per Tel Aviv (~110-160€).
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900">2. Da Bari (BRI) Volo Diretto</div>
                  <p className="text-stone-600">
                    Treno Brindisi → Bari Centrale (1h10, 9€). Dall'Aeroporto di Bari partono voli low-cost diretti (WizzAir / Ryanair) per Tel Aviv (da <strong>35€ a 85€</strong> a seconda della stagione).
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900">3. Rientro o partenza da Roma (FCO)</div>
                  <p className="text-stone-600">
                    Voli pluri-giornalieri diretti Roma Fiumicino → Tel Aviv in circa 3 ore e 20 minuti (WizzAir, EL AL, Ita Airways da ~55€).
                  </p>
                </div>
              </div>
            </div>

            {/* CRITICAL BAGGAGE RULES FOR BACKPACKERS */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>REGOLE FERREE IN AEREO PER CHI VIAGGIA ZAINO E TENDA</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
                  <div className="font-bold text-rose-950 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-rose-600" />
                    <span>BOMBOLE A GAS DEL FORNELLINO: DIVIETO ASSOLUTO!</span>
                  </div>
                  <p className="text-rose-900 leading-relaxed">
                    Le bombole di gas da campeggio (sia a vite che a forare) sono considerate materiale esplosivo pericoloso:{' '}
                    <strong>NON possono MAI essere imbarcate, né nel bagaglio a mano né nel bagaglio in stiva!</strong>
                  </p>
                  <div className="p-2.5 bg-white/80 rounded-lg border border-rose-300 font-mono text-[11px] text-rose-950 space-y-1">
                    <div className="font-bold text-emerald-800">Dove comprare la bombola a Giaffa / Tel Aviv:</div>
                    <div>• <strong>Negozio Rikohet (Trekking & Camping):</strong> Centro Commerciale Dizengoff o stazione HaShalom (Tel Aviv).</div>
                    <div>• <strong>Decathlon Rishon LeZion / Tel Aviv:</strong> Bombole a vite standard 100g/230g (~25 NIS / 6€).</div>
                    <div>• <strong>Flea Market di Old Jaffa:</strong> Negozi di ferramenta e casalinghi vicino alla Chiesa di San Pietro.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="font-bold text-amber-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    <span>PICCHETTI TENDA & BASTONCINI DA TREKKING</span>
                  </div>
                  <p className="text-amber-900 leading-relaxed">
                    I picchetti in alluminio/acciaio della tenda e i bastoncini telescopici con punta metallica{' '}
                    <strong>sono considerati oggetti contundenti/perforanti</strong>: la sicurezza aeroportuale li sequestra
                    immediatamente al controllo bagaglio a mano!
                  </p>
                  <div className="p-2.5 bg-white/80 rounded-lg border border-amber-300 text-[11px] text-amber-950 space-y-1">
                    <div>• <strong>Soluzione obbligatoria:</strong> Imbarca lo zaino in stiva, oppure metti picchetti, bastoncini e coltellino multiuso in una sacca da stiva economica (~25€ aggiuntivi sul volo).</div>
                    <div>• <strong>Consiglio salva-cinghie:</strong> Avvolgi lo zaino da trekking con un sacco protettivo da stiva o con pellicola trasparente per evitare che cinghie e fibbie vengano strappate dai nastri rulli bagagli.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Passport and Gatepass B2 */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-250 text-xs text-emerald-900 space-y-2">
              <div className="font-bold flex items-center gap-2 text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Passaporto & Visto d'ingresso B2 (Nessun timbro sul passaporto!)</span>
              </div>
              <p className="leading-relaxed text-emerald-800">
                Per i cittadini italiani ed europei il passaporto deve avere validità residua di almeno <strong>6 mesi</strong> dalla data di ingresso.
                All'arrivo all'Aeroporto Ben Gurion (controllo passaporti biometrico), le autorità israeliane <strong>NON appongono alcun timbro sul passaporto</strong>,
                ma rilasciano un tagliandino elettronico azzurro (<strong>Gatepass B2</strong>, valido 3 mesi, gratuito).
                Conserva con cura questo tagliandino azzurro all'interno del passaporto fino alla tua partenza: non pregiudicherà in alcun modo futuri viaggi in altri paesi.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: LE 6 TAPPE A PIEDI GIAFFA -> GERUSALEMME */}
      {activeSection === 'walking_stages' && (
        <div className="space-y-6">
          {/* Subheader */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-lg sm:text-xl flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-600" />
                <span>L'Itinerario a Piedi: 6 Tappe da Giaffa al Santo Sepolcro</span>
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-0.5">
                118.9 km totali &bull; Media 19.8 km/giorno &bull; Rigorosamente sotto i 30 km giornalieri!
              </p>
            </div>

            <button
              onClick={onLoadHolyLandRoute}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <span>Carica questo Cammino nelle Schede & Mappa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Stages Overview Cards */}
          <div className="space-y-4">
            {stagesHolyLand.map((stage, idx) => {
              const isSelected = selectedStageIndex === idx;

              return (
                <div
                  key={stage.number}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                    isSelected ? 'border-amber-500 ring-2 ring-amber-400/20 shadow-md' : 'border-stone-200 shadow-sm hover:border-stone-300'
                  }`}
                >
                  {/* Stage Card Header */}
                  <div
                    onClick={() => setSelectedStageIndex(isSelected ? null : idx)}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-stone-50/60 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 font-serif font-bold text-lg flex items-center justify-center shrink-0 border border-amber-300">
                        {stage.number}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                            {stage.from} → {stage.to}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                            {stage.region}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats Badges */}
                    <div className="flex items-center gap-2 shrink-0 text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                        {stage.distanceKm} km
                      </span>
                      <span className="px-2 py-1 rounded-lg bg-stone-100 text-stone-600">
                        +{stage.elevationGainM}m / -{stage.elevationLossM}m
                      </span>
                      <span className="px-2 py-1 rounded-lg bg-amber-50 text-amber-800 font-semibold border border-amber-200">
                        {stage.difficulty}
                      </span>
                      <span className="text-xs text-amber-700 font-sans font-bold underline ml-1">
                        {isSelected ? 'Chiudi' : 'Dettagli'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Stage Details */}
                  {isSelected && (
                    <div className="p-4 sm:p-6 bg-stone-50/70 border-t border-stone-200 space-y-5 text-xs">
                      {/* Description & Terrain */}
                      <div className="space-y-1.5">
                        <div className="font-bold text-stone-800 text-sm">Descrizione della Tappa:</div>
                        <p className="text-stone-700 text-xs leading-relaxed">
                          {stage.description}
                        </p>
                        <div className="text-[11px] text-stone-500 font-mono pt-1">
                          <strong>Fondo stradale:</strong> {stage.terrain}
                        </div>
                      </div>

                      {/* 1. Conventi & Accoglienza Religiosa */}
                      <div className="space-y-2">
                        <div className="font-bold text-amber-900 text-xs flex items-center gap-1.5">
                          <Church className="w-4 h-4 text-amber-700" />
                          <span>Accoglienza Religiosa & Conventi (con Credenziale):</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {stage.convents.map((convent) => (
                            <div key={convent.id} className="p-3 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-1.5">
                              <div className="font-bold text-stone-900 flex items-center justify-between">
                                <span>{convent.name}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">
                                  {convent.costType === 'donativo_libero' ? `Donativo (~€${convent.suggestedDonationEur})` : `Tariffa ~€${convent.suggestedDonationEur}`}
                                </span>
                              </div>
                              <div className="text-stone-600 text-[11px]">
                                📍 {convent.address} &bull; 👤 {convent.contactPerson}
                              </div>
                              <div className="text-stone-600 font-mono text-[11px]">
                                📞 <a href={`tel:${convent.phone}`} className="text-amber-800 hover:underline">{convent.phone}</a>
                              </div>
                              <p className="text-stone-500 text-[11px] italic">
                                "{convent.notes}"
                              </p>
                              <div className="flex flex-wrap gap-1 pt-1">
                                {convent.services.map((srv) => (
                                  <span key={srv} className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 text-[10px]">
                                    {srv}
                                  </span>
                                ))}
                                {convent.tentAllowedInGarden && (
                                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                                    ⛺ Tenda nel giardino
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 2. Campeggi & Bivacchi autorizzati */}
                      <div className="space-y-2">
                        <div className="font-bold text-emerald-900 text-xs flex items-center gap-1.5">
                          <Tent className="w-4 h-4 text-emerald-700" />
                          <span>Aree Tenda, Bivacco & Campeggi:</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {stage.campsites.map((camp) => (
                            <div key={camp.id} className="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs space-y-1">
                              <div className="font-bold text-stone-900 flex items-center justify-between">
                                <span>{camp.name}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">
                                  {camp.priceTentPerNightEur === 0 ? 'Bivacco Gratuito' : `~€${camp.priceTentPerNightEur}/notte`}
                                </span>
                              </div>
                              <div className="text-stone-600 text-[11px]">
                                📍 {camp.address}
                              </div>
                              <p className="text-stone-600 text-[11px]">
                                {camp.instructions}
                              </p>
                              <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-stone-500">
                                <span>Acqua: {camp.waterAvailable ? '✅ Sì' : '❌ No'}</span>
                                <span>Doccia: {camp.showerAvailable ? '✅ Sì' : '❌ No'}</span>
                                <span>Fornellino: {camp.stoveCookingAllowed ? '✅ Sì' : '❌ No'}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 3. Le 2 offerte Salva-Vita Booking più economiche */}
                      <div className="space-y-2">
                        <div className="font-bold text-rose-900 text-xs flex items-center gap-1.5">
                          <LifeBuoy className="w-4 h-4 text-rose-700" />
                          <span>Le 2 Offerte Salva-Vita Booking più economiche della tappa:</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {stage.emergencyStays.map((stay) => (
                            <div key={stay.id} className="p-3 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-1.5">
                              <div className="font-bold text-rose-950 flex items-center justify-between">
                                <span>{stay.name}</span>
                                <span className="text-rose-700 font-mono font-bold">
                                  a partire da ~€{stay.priceMinEur}
                                </span>
                              </div>
                              <div className="text-stone-500 text-[11px]">
                                📍 {stay.address} ({stay.distanceFromTrailMeters}m dal sentiero) &bull; Tel: {stay.phone}
                              </div>
                              <div className="flex flex-wrap gap-1 text-[10px]">
                                {stay.perks.map((p) => (
                                  <span key={p} className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-700">
                                    {p}
                                  </span>
                                ))}
                              </div>
                              <a
                                href={stay.bookingSearchUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 hover:text-rose-900 underline pt-1"
                              >
                                <span>Verifica disponibilità su Booking.com</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 4: GUIDA PRATICA, CREDENZIALE & SICUREZZA */}
      {activeSection === 'practical' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                <Scroll className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-lg sm:text-xl">
                  Guida Pratica, Credenziale di Gerusalemme & Consigli per il Cammino
                </h3>
                <p className="text-xs text-stone-500 font-mono">
                  Testimonium Peregrinationis &bull; Gestione dell'Acqua & Caldo &bull; Shabbat & Spesa
                </p>
              </div>
            </div>

            {/* Credential and Testimonium Box */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-300 space-y-2.5">
              <div className="font-bold text-amber-950 text-sm flex items-center gap-2">
                <Scroll className="w-5 h-5 text-amber-800" />
                <span>La Credenziale di Terra Santa & Il Rilascio del Testimonium</span>
              </div>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                Alla partenza da Giaffa (Convento di San Pietro) si inizia a timbrare la propria <strong>Credenziale del Pellegrino</strong>{' '}
                (valida quella della Via Francigena del Sud / Cammino di Leuca o la Credenziale rilasciata dalla Custodia di Terra Santa).
                Tappa dopo tappa (Lod, Ramla, Latrun, Emmaus, Abu Ghosh, Ein Karem), si appongono i timbri dei conventi e monasteri.
              </p>
              <div className="p-3 bg-white/90 rounded-xl border border-amber-250 text-xs text-amber-950 space-y-1">
                <div className="font-bold text-emerald-900">Come ottenere il Testimonium a Gerusalemme:</div>
                <p className="leading-relaxed">
                  Giunto a Gerusalemme, recati presso la <strong>Curia Custodiale di San Salvatore</strong> (Porta Nuova, Via San Francesco 1).
                  Mostrando la credenziale con i timbri del cammino a piedi, la Cancelleria della Custodia dei Frati Minori Francescani
                  rilascerà solennemente la pergamena del <em>Testimonium Peregrinationis Hierosolymitanae</em>, il documento più prestigioso
                  del pellegrinaggio cristiano fin dal XIV secolo.
                </p>
              </div>
            </div>

            {/* Water and Heat Management */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200 space-y-2">
                <div className="font-bold text-sky-950 flex items-center gap-1.5 text-sm">
                  <Droplet className="w-4 h-4 text-sky-700" />
                  <span>Idratazione & Gestione del Caldo</span>
                </div>
                <ul className="text-sky-900 space-y-1.5 leading-relaxed">
                  <li>• <strong>Capacità borracce:</strong> Nei mesi tra maggio e ottobre porta almeno <strong>3 litri d'acqua</strong> ogni mattina.</li>
                  <li>• <strong>Orari di cammino:</strong> Parti sempre all'alba (05:30 - 06:00). Concludi la tappa o fermati all'ombra tra le 11:30 e le 15:30 durante le ore di picco solare.</li>
                  <li>• <strong>Sali minerali:</strong> Sciogli una bustina di sali idroelettrolitici in una delle borracce per prevenire crampi e colpi di calore durante le salite delle colline di Giudea.</li>
                  <li>• <strong>Fontane pubbliche:</strong> In Israele l'acqua dei rubinetti e delle fontane nei parchi KKL/INPA è potabile e controllata.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                  <Calendar className="w-4 h-4 text-amber-700" />
                  <span>Il Rispetto dello Shabbat & La Spesa</span>
                </div>
                <ul className="text-stone-700 space-y-1.5 leading-relaxed">
                  <li>• <strong>Cos'è lo Shabbat:</strong> Dal tramonto del venerdì al tramonto del sabato, tutte le attività commerciali, mercati e trasporti pubblici ebraici si fermano completamente.</li>
                  <li>• <strong>Cosa fare per il fornellino:</strong> Fai scorta di cibo, pane pita, frutta secca e generi di conforto il venerdì mattina prima delle 14:00.</li>
                  <li>• <strong>Zone arabe / cristiane:</strong> Nei quartieri arabi di Giaffa, Lod, Ramla e Abu Ghosh o nella Città Vecchia di Gerusalemme, molti negozi e forni rimangono aperti anche di sabato.</li>
                  <li>• <strong>Cibo tipico economico del pellegrino:</strong> Falafel caldo in pita (15-20 NIS, circa 4-5€), hummus con tahina, olive locali, lenticchie e riso per fornellino a costi bassissimi.</li>
                </ul>
              </div>
            </div>

            {/* Sacred Places Dress Code */}
            <div className="p-4 rounded-xl bg-stone-100 border border-stone-300 text-xs text-stone-800 space-y-1.5">
              <div className="font-bold flex items-center gap-2 text-stone-900">
                <ShieldCheck className="w-4 h-4 text-stone-700" />
                <span>Abbigliamento e rispetto nei Luoghi Santi (Santo Sepolcro, Monasteri, Muro del Pianto)</span>
              </div>
              <p className="leading-relaxed text-stone-700">
                In tutti i santuari della Terra Santa (sia cristiani, ebraici che musulmani) è obbligatorio l'abbigliamento modesto:
                spalle sempre coperte (evitare canottiere), pantaloni o gonne che coprano le ginocchia.
                Tieni sempre un pantalone lungo leggero o un pareo a portata di mano sulla sommità dello zaino.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
