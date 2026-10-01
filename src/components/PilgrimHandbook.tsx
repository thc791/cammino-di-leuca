import React, { useState } from 'react';
import {
  Scroll,
  BookOpen,
  PhoneCall,
  FileText,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  Clock,
  Heart,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
  MapPin,
  Sparkles,
  Info,
  Euro,
  Tent,
  Church,
} from 'lucide-react';

interface LinkItem {
  title: string;
  url: string;
  description: string;
  tag: string;
  email?: string;
}

const OFFICIAL_LINKS: LinkItem[] = [
  {
    title: 'Associazione Europea delle Vie Francigene (AEVF)',
    url: 'https://www.viefrancigene.org',
    description: 'Sito ufficiale della Via Francigena e Francigena del Sud. Mappe GPX, punti di distribuzione credenziali, notizie sui percorsi.',
    tag: 'Ufficiale Francigena',
  },
  {
    title: 'Sloways Shop - Negozio Ufficiale Credenziali',
    url: 'https://www.slowways.shop',
    description: 'Piattaforma e-commerce per acquistare online la Credenziale ufficiale AEVF (8€) e riceverla a casa prima di partire.',
    tag: 'Acquisto Online Credenziale',
  },
  {
    title: 'Cammini di Leuca (Fondazione De Finibus Terrae)',
    url: 'https://www.camminidileuca.it',
    description: 'Riferimento per il tratto salentino verso il Santuario Mariano De Finibus Terrae. Moduli e informazioni per richiedere il Testimonium finale.',
    tag: 'Testimonium Leuca',
    email: 'testimonium@camminidileuca.it',
  },
  {
    title: 'Confraternita di San Jacopo di Compostela (Perugia)',
    url: 'https://www.confraternitadisanjacopo.it',
    description: 'Storica confraternita laica dedita all\'accoglienza pellegrina e al rilascio della Credenziale tradizionale a offerta libera.',
    tag: 'Spiritualità & Donativo',
  },
  {
    title: 'Custodia di Terra Santa (Convento San Salvatore, Gerusalemme)',
    url: 'https://www.custodia.org',
    description: 'Padri Francescani custodi dei Luoghi Santi: ospitalità Casa Nova, rilascio del Testimonium Peregrinationis a Gerusalemme.',
    tag: 'Terra Santa & Testimonium',
  },
  {
    title: 'Viaggiare Sicuri (Ministero degli Affari Esteri)',
    url: 'https://www.viaggiaresicuri.it',
    description: 'Avvisi ufficiali della Farnesina su requisiti di ingresso, validità passaporto (minimo 6 mesi per Israele) e condizioni di sicurezza.',
    tag: 'Documenti & Sicurezza',
  },
  {
    title: 'Trenitalia - Treni Regionali & Trasporto Bici/Zaini',
    url: 'https://www.trenitalia.com',
    description: 'Per pianificare il rientro a casa da Brindisi o Lecce, o gestire brevi tratte di emergenza in caso di infortunio o maltempo grave.',
    tag: 'Logistica Rientro',
  },
];

export const PilgrimHandbook: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'credenziale' | 'chiamata' | 'documenti' | 'condotta' | 'links' | 'faq'>('credenziale');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [copiedScript, setCopiedScript] = useState<boolean>(false);

  // Script Generator States
  const [callerName, setCallerName] = useState('Giuseppe');
  const [targetTime, setTargetTime] = useState('17:30');
  const [currentCity, setCurrentCity] = useState('Terracina');
  const [requestType, setRequestType] = useState<'letto' | 'tenda' | 'entrambi'>('entrambi');
  const [routeType, setRouteType] = useState<'Leuca' | 'Terra Santa / Brindisi' | 'Gerusalemme'>('Terra Santa / Brindisi');

  const generatedScript = `Pace e bene, Padre / Madre. Mi chiamo ${callerName || '[Il tuo nome]'}, sono un pellegrino a piedi in cammino con zaino e sacco a pelo per il Cammino verso ${routeType}.
Sono in regolare possesso della Credenziale del Pellegrino e mi trovo attualmente a piedi in direzione di ${currentCity || '[Città della Tappa]'}.

Prevedo di arrivare a piedi verso le ore ${targetTime || '17:30'}.
Vi chiamo con umiltà per sapere se la vostra comunità/parrocchia dispone per questa sera di un'ospitalità povera per i pellegrini ${
    requestType === 'tenda'
      ? '(uno spazio per montare la tenda nel giardino/cortile parrocchiale)'
      : requestType === 'letto'
      ? '(un semplice posto per stendere il sacco a pelo)'
      : '(un posto per stendere il sacco a pelo oppure, in alternativa, il permesso di piantare la tenda nel cortile/giardino)'
  }.

Ho con me materassino, sacco a pelo e tutto il necessario, non ho alcuna pretesa alberghiera e lascerò volentieri un donativo a sostegno della parrocchia. Vi ringrazio di cuore per il vostro ascolto.`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(generatedScript);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(url);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono">
            <Scroll className="w-3.5 h-3.5 text-amber-400" />
            <span>Manuale Ufficiale del Pellegrino &bull; Edizione 2025/2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
            Guida Pratica del Pellegrino: Credenziale, Galateo & Documenti
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Tutto ciò che chi si mette in cammino con zaino e tenda deve sapere prima di partire:
            come richiedere la credenziale, come telefonare ai conventi senza commettere errori,
            la regola aurea del donativo consapevole e i link istituzionali verificati.
          </p>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute right-4 -bottom-6 text-stone-800/40 select-none pointer-events-none text-9xl font-serif font-bold hidden md:block">
          ☩
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-xl border border-stone-200 shadow-sm">
        <button
          onClick={() => setActiveSection('credenziale')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeSection === 'credenziale'
              ? 'bg-amber-600 text-white shadow'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Scroll className="w-4 h-4" />
          <span>1. La Credenziale & Timbri</span>
        </button>

        <button
          onClick={() => setActiveSection('chiamata')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeSection === 'chiamata'
              ? 'bg-amber-600 text-white shadow'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <PhoneCall className="w-4 h-4" />
          <span>2. Come Chiamare i Conventi</span>
        </button>

        <button
          onClick={() => setActiveSection('documenti')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeSection === 'documenti'
              ? 'bg-amber-600 text-white shadow'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>3. Documenti Indispensabili</span>
        </button>

        <button
          onClick={() => setActiveSection('condotta')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeSection === 'condotta'
              ? 'bg-amber-600 text-white shadow'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>4. Galateo & Donativo</span>
        </button>

        <button
          onClick={() => setActiveSection('links')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeSection === 'links'
              ? 'bg-amber-600 text-white shadow'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>5. Link Utili & Contatti</span>
        </button>

        <button
          onClick={() => setActiveSection('faq')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeSection === 'faq'
              ? 'bg-amber-600 text-white shadow'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>6. Domande Frequenti (FAQ)</span>
        </button>
      </div>

      {/* SECTION 1: LA CREDENZIALE DEL PELLEGRINO */}
      {activeSection === 'credenziale' && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Scroll className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  La Credenziale: Il "Passaporto del Pellegrino"
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Origine storica, valore ecclesiale e perché è il documento chiave di tutto il viaggio
                </p>
              </div>
            </div>

            <div className="prose prose-stone max-w-none text-sm leading-relaxed text-stone-700 space-y-3">
              <p>
                La <strong>Credenziale del Pellegrino</strong> (o <em>Carta del Pellegrino</em>) discende
                dalle antiche <em>letterae testimoniales</em> che nel Medioevo i vescovi rilasciavano
                ai fedeli che intraprendevano il cammino penitenziale. Oggi è il documento cartaceo
                ufficiale che:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Attesta la condizione autentica di pellegrino</strong> (a piedi, a cavallo o in bicicletta),
                  distinguendoti nettamente da un normale turista o trekker.
                </li>
                <li>
                  <strong>Garantisce l'accesso all'accoglienza povera</strong> (conventi francescani, monasteri,
                  foresterie parrocchiali e ostelli del pellegrino a donativo o a tariffa agevolata).
                </li>
                <li>
                  <strong>Permette di raccogliere i timbri (sellos)</strong> giornalieri che certificano
                  la continuità geografica del tuo percorso a piedi.
                </li>
                <li>
                  <strong>È condizione indispensabile per ricevere il Testimonium</strong> finale
                  (a Santa Maria di Leuca, a Brindisi, a Roma San Pietro o a Gerusalemme).
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700" />
                  Dove e Come Richiederla Prima di Partire
                </h4>
                <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
                  <li>
                    <strong>Online da casa (Consigliato):</strong> Su <em>www.sloways.shop</em> (costo 8€ + spedizione).
                    Riceverai a casa la credenziale ufficiale AEVF con la busta protettiva impermeabile.
                  </li>
                  <li>
                    <strong>Confraternita di San Jacopo (Perugia):</strong> Rilasciata a offerta libera per posta
                    compilando il modulo sul sito ufficiale della Confraternita.
                  </li>
                  <li>
                    <strong>A Roma (prima di partire):</strong> Presso la Basilica di San Pietro (Ufficio Pellegrini / Sagrestia),
                    oppure presso l'Ostello Spedale della Provvidenza a Trastevere.
                  </li>
                  <li>
                    <strong>In Puglia / Salento:</strong> Punti di rilascio autorizzati a Bari, Lecce e presso la Basilica di Leuca.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-700" />
                  Regole dei Timbri (Come e Dove Timbrare)
                </h4>
                <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
                  <li>
                    <strong>Frequenza:</strong> È raccomandato raccogliere <strong>1 timbro al giorno</strong> per ogni tappa percorsa a piedi (2 timbri al giorno nelle ultime 100 km).
                  </li>
                  <li>
                    <strong>Dove chiedere il timbro:</strong> In chiesa o sacrestia dopo la funzione, nei conventi dove alloggi,
                    nei municipi o uffici turistici (Pro Loco), o nei bar storici del borgo dotati di timbro con data.
                  </li>
                  <li>
                    <strong>Se la chiesa è chiusa:</strong> Spesso il timbro è custodito nel bar di fronte alla piazza o nella farmacia del paese. Chiedi con gentilezza: gli esercenti locali conoscono la tradizione.
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonium Explanation Box */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3">
              <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                Come ottenere il "Testimonium" finale nelle diverse mete
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-emerald-900">
                <div className="bg-white/80 p-3 rounded-lg border border-emerald-100 space-y-1">
                  <span className="font-bold block text-stone-900">⚓ Santa Maria di Leuca:</span>
                  <p className="leading-relaxed">
                    Rilasciato dalla Basilica Santuario "De Finibus Terrae". Requisito: aver percorso a piedi almeno gli ultimi 100 km con credenziale timbrata. È possibile prenotarlo via mail a <em>testimonium@camminidileuca.it</em>.
                  </p>
                </div>
                <div className="bg-white/80 p-3 rounded-lg border border-emerald-100 space-y-1">
                  <span className="font-bold block text-stone-900">🕊️ Brindisi (Porta d'Oriente):</span>
                  <p className="leading-relaxed">
                    Timbro solenne al Tempio romanico di San Giovanni al Sepolcro e alle Colonne Romane dell'Appia, con benedizione dei pellegrini in partenza per Oltremare.
                  </p>
                </div>
                <div className="bg-white/80 p-3 rounded-lg border border-emerald-100 space-y-1">
                  <span className="font-bold block text-stone-900">☩ Gerusalemme (Santo Sepolcro):</span>
                  <p className="leading-relaxed">
                    Rilasciato dai Padri Francescani presso il <strong>Convento di San Salvatore</strong> della Custodia di Terra Santa (Porta Nuova). Pergamena in latino con sigillo in ceralacca dell'Anastasis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: COME CHIAMARE I CONVENTI & GALATEO TELEFONICO */}
      {activeSection === 'chiamata' && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Il Galateo Telefonico: Come Chiamare i Conventi e Parrocchie
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Orari da rispettare, formule di rispetto e cosa pronunciare per ottenere accoglienza fraterna
                </p>
              </div>
            </div>

            {/* Timetable Golden Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>Le Ore Consigliate per Telefonare</span>
                </div>
                <ul className="text-xs text-emerald-950 space-y-2 leading-relaxed">
                  <li>
                    <strong>Finestra Mattutina: 09:30 – 11:30</strong> (dopo le Lodi mattutine e prima del pranzo della comunità monastica).
                  </li>
                  <li>
                    <strong>Finestra Pomeridiana: 15:00 – 17:00</strong> (dopo il riposo/lettura spirituale e prima della celebrazione dei Vespri).
                  </li>
                  <li>
                    <strong>Preavviso:</strong> Telefona sempre il giorno prima o la mattina presto del giorno stesso. Non presentarsi mai a sorpresa alle 21:00 senza aver avvisato!
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-700" />
                  <span>Gli Orari TASSATIVAMENTE da Evitare</span>
                </div>
                <ul className="text-xs text-rose-950 space-y-2 leading-relaxed">
                  <li>
                    <strong>06:30 – 08:30:</strong> Momento delle Lodi, Ufficio delle Letture e meditazione comunitaria silenziosa.
                  </li>
                  <li>
                    <strong>12:30 – 14:30:</strong> Pranzo comunitario in refettorio (spesso con lettura della Regola) e ricreazione fraterna.
                  </li>
                  <li>
                    <strong>18:30 – 20:30:</strong> Vespri, Santa Messa serale e cena dei frati/monache.
                  </li>
                  <li>
                    <strong>Dalle 21:00 in poi:</strong> Grande Silenzio notturno monastico (Compieta). Telefoni spenti.
                  </li>
                </ul>
              </div>
            </div>

            {/* Vocal Formulas and Etiquette */}
            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 space-y-3">
              <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Church className="w-4 h-4 text-amber-600" />
                Formule Vocali di Saluto e Rispetto
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
                <div className="bg-white p-3 rounded-lg border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">Frati Francescani / Cappuccini:</span>
                  <p className="italic text-stone-600">"Pace e bene, Padre / Fratello, sono..."</p>
                  <p className="mt-1 text-[11px] text-stone-500">I francescani accolgono con calore fraterno e semplicità.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">Parroci Diocesani:</span>
                  <p className="italic text-stone-600">"Sia lodato Gesù Cristo / Buongiorno don [Nome]..."</p>
                  <p className="mt-1 text-[11px] text-stone-500">Chiedere se la parrocchia ha una sala parrocchiale per il sacco a pelo o giardino per la tenda.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">Monaci Benedettini / Trappisti:</span>
                  <p className="italic text-stone-600">"Laudato Gesù Cristo, Padre Foresterario..."</p>
                  <p className="mt-1 text-[11px] text-stone-500">Regola di San Benedetto: l'ospite è accolto come Cristo, nel massimo silenzio.</p>
                </div>
              </div>
            </div>

            {/* Interactive Phone Call Script Generator */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-300/80 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-700" />
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                    Simulatore Interattivo: Generatore Script per la Telefonata
                  </h4>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 font-mono font-medium">
                  Pronto da leggere o inviare via WhatsApp
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Il tuo Nome:</label>
                  <input
                    type="text"
                    value={callerName}
                    onChange={(e) => setCallerName(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Città / Tappa di Arrivo:</label>
                  <input
                    type="text"
                    value={currentCity}
                    onChange={(e) => setCurrentCity(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="Terracina"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Orario Stimato Arrivo:</label>
                  <input
                    type="text"
                    value={targetTime}
                    onChange={(e) => setTargetTime(e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="17:30"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Cosa chiedi:</label>
                  <select
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value as any)}
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                  >
                    <option value="entrambi">Sacco a pelo o tenda in giardino</option>
                    <option value="letto">Solo sacco a pelo / posto letto</option>
                    <option value="tenda">Solo montare tenda in giardino</option>
                  </select>
                </div>
              </div>

              {/* Generated Text Box with Copy Button */}
              <div className="relative bg-white p-4 rounded-xl border border-amber-200 text-xs sm:text-sm font-sans text-stone-800 leading-relaxed shadow-inner">
                <p className="whitespace-pre-line">{generatedScript}</p>
                <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] text-stone-500 italic">
                    💡 Consiglio: se ti rispondono negativamente, non insistere mai! Rispondi con gratitudine: <em>"Vi ringrazio comunque e chiedo una benedizione per il cammino."</em>
                  </span>
                  <button
                    onClick={handleCopyScript}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm ml-auto"
                  >
                    {copiedScript ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedScript ? 'Copiato negli appunti!' : 'Copia Testo per Chiamata / WhatsApp'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: DOCUMENTI INDISPENSABILI */}
      {activeSection === 'documenti' && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Documenti Indispensabili & Checklist Buromatica
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Tutto ciò che deve essere custodito nella tasca impermeabile dello zaino prima di varcare la soglia di casa
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  1. Documenti per il Cammino Italiano (Roma → Leuca / Brindisi)
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Carta d'Identità in corso di validità:</strong> Richiesta sempre da ostelli e conventi per la registrazione presenze ISTAT/Questura.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Tessera Sanitaria (TEAM Europea):</strong> Indispensabile per usufruire di guardie mediche, pronto soccorso e farmacie lungo la via.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Credenziale del Pellegrino Ufficiale:</strong> Cartacea, custodita in un sacchetto di plastica sigillato contro la pioggia e il sudore.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Lettera di Presentazione del Parroco (Fortemente Consigliata):</strong> Una semplice lettera su carta intestata della tua parrocchia di residenza con timbro e firma del parroco, attestante che sei in cammino per motivi spirituali. Apre le porte di molti monasteri di clausura!
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-700" />
                  2. Documenti Supplementari per la Terra Santa (Israele)
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Passaporto con almeno 6 mesi di validità residua:</strong> Requisito internazionale ferreo per l'ingresso in Israele.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Visto Gatepass B2 (Tagliandino Azzurro):</strong> Rilasciato gratuitamente all'arrivo all'aeroporto Ben Gurion dai totem elettronici. <em>Non c'è timbro fisico sul passaporto</em>. Va conservato con cura nel passaporto fino alla partenza!
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Assicurazione Sanitaria Viaggio con Copertura Massimale Elevata:</strong> Obbligatoria per coprire ricoveri, cure e rimpatrio in Medio Oriente.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Biglietto Aereo / Navale di Rientro Stampato:</strong> Alla frontiera israeliana chiedono regolarmente prova di uscita dal Paese.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Smart Digital Backup Advice */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-stone-700 space-y-1">
                <span className="font-bold text-stone-900 block">La Regola del Doppio Backup Digitale e Cartaceo:</span>
                <p>
                  Fotografa con lo smartphone tutti i documenti (fronte/retro di carta identità, passaporto, tessera sanitaria e le pagine timbrate della credenziale).
                  Salva le immagini in una cartella offline sul telefono e inviane una copia alla tua email personale o su Google Drive. Tieni inoltre una fotocopia cartacea piegata nel fondo dello zaino in un sacchetto a tenuta stagna.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: GALATEO, CONDOTTA & DONATIVO */}
      {activeSection === 'condotta' && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Codice Etico del Pellegrino & La Regola del Donativo Consapevole
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Come comportarsi nei luoghi sacri, convivenza con i confratelli e rispetto dell'ospitalità monastica
                </p>
              </div>
            </div>

            {/* Donativo Box */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300 space-y-3">
              <h4 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
                <Euro className="w-5 h-5 text-amber-700" />
                Cos'è Veramente il "Donativo"? (Non confonderlo mai con "Gratis")
              </h4>
              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-2">
                <p>
                  Nei conventi, monasteri e parrocchie spesso troverai la dicitura <strong>"Accoglienza a donativo"</strong>.
                  Questo non significa affatto che il soggiorno sia gratuito o che la comunità sia tenuta a mantenerti a proprie spese.
                </p>
                <div className="p-3.5 bg-white rounded-xl border border-amber-200 font-serif italic text-stone-800">
                  «Il donativo è un gesto di corresponsabilità fraterna: l'offerta che lasci stasera non paga solo la tua doccia calda,
                  le lenzuola e le spese vive della parrocchia, ma permette al convento di tenere aperta la porta per il pellegrino che arriverà domani dopo di te,
                  anche se lui sarà privo di denaro.»
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Quanto è consono lasciare?</strong>
                    <span>Per solo pernottamento con uso doccia/bagno: almeno <strong>10€ – 15€</strong> a persona. Se viene offerta cena comunitaria o colazione: almeno <strong>20€ – 25€</strong>.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Come e quando consegnarlo?</strong>
                    <span>Deponi l'offerta nell'apposita cassetta delle elemosine o consegnala direttamente nelle mani del padre guardiano o del parroco al momento della partenza, ringraziando per l'accoglienza.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Rules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                  <Tent className="w-4 h-4 text-emerald-600" />
                  <span>Regole per la Tenda in Parrocchia</span>
                </div>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-relaxed">
                  <li>• Chiedi sempre il permesso esplicito prima di piantare il primo picchetto.</li>
                  <li>• Monta la tenda all'imbrunire (dopo le 18:30/19:00) per non interferire con le attività del catechismo o dell'oratorio.</li>
                  <li>• Smonta la tenda la mattina presto (entro le 07:30) lasciando il prato perfettamente pulito.</li>
                  <li>• Non usare fornellini a gas all'interno della tenda o vicino a strutture in legno della parrocchia.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Orari del Silenzio Monastico</span>
                </div>
                <ul className="text-xs text-stone-700 space-y-1.5 leading-relaxed">
                  <li>• Rientro la sera entro le 20:30 o 21:00 (i portoni dei conventi chiudono rigorosamente a chiave).</li>
                  <li>• Silenzio assoluto nelle camerate e nei corridoi a partire dalle 21:30/22:00.</li>
                  <li>• Al mattino svegliati con discrezione: usa la torcia frontale con luce rossa per non svegliare gli altri pellegrini.</li>
                  <li>• Se sei invitato alla preghiera comunitaria (Lodi o Vespri), partecipa con rispetto anche se di fede o sensibilità diversa.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: LINK UTILI & CONTATTI */}
      {activeSection === 'links' && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Link Utili Ufficiali & Contatti Istituzionali
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Tutti i siti web verificati per credenziali, orari, traghetti, visti e assistenza
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {OFFICIAL_LINKS.map((link, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50/50 border border-stone-200 hover:border-amber-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 font-mono font-medium">
                        {link.tag}
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm">{link.title}</h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">{link.description}</p>
                    {link.email && (
                      <p className="text-xs text-amber-700 font-mono">
                        Email di contatto: <a href={`mailto:${link.email}`} className="underline">{link.email}</a>
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => handleCopyLink(link.url)}
                      className="px-2.5 py-1.5 rounded-lg border border-stone-300 hover:bg-white text-stone-700 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                      title="Copia link"
                    >
                      {copiedLink === link.url ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedLink === link.url ? 'Copiato!' : 'Copia'}</span>
                    </button>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Apri Sito</span>
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: FAQ DOMANDE FREQUENTI */}
      {activeSection === 'faq' && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Domande Frequenti (FAQ) del Pellegrino
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Risposte pratiche ai dubbi più comuni prima e durante il cammino a piedi
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <h4 className="font-bold text-stone-900 text-sm">
                  1. Posso partire senza Credenziale del Pellegrino?
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  È fortemente sconsigliato: senza credenziale non avrai accesso ai conventi, monasteri e ostelli religiosi
                  (che sono tenuti a richiedere la credenziale per distinguere i pellegrini dai turisti) e non potrai raccogliere i timbri
                  né ricevere il Testimonium finale.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <h4 className="font-bold text-stone-900 text-sm">
                  2. I conventi accettano sempre e comunque la tenda?
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Non tutti i conventi hanno giardini cintati o cortili adatti. Nella nostra guida ogni tappa specifica se la tenda
                  è consentita nel giardino (simbolo verde). In ogni caso, chiedi sempre conferma preventiva durante la telefonata.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <h4 className="font-bold text-stone-900 text-sm">
                  3. Cosa fare se nessun convento risponde o sono tutti pieni?
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Nessun panico: in ogni tappa della nostra guida abbiamo inserito due <strong>Alloggi Salva-Vita Booking</strong> a basso costo (B&B o guesthouse &lt;35€ a notte)
                  situati a meno di 500 metri dal tracciato pedonale, con link diretto per prenotare in 30 secondi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <h4 className="font-bold text-stone-900 text-sm">
                  4. La Credenziale ha una scadenza?
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  No, la credenziale non scade mai. Se percorri il cammino a spezzoni in anni diversi, puoi continuare a usare la stessa
                  credenziale finché non si esauriscono le caselle per i timbri.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <h4 className="font-bold text-stone-900 text-sm">
                  5. Si possono portare animali domestici (cani) nei conventi?
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Quasi tutti i monasteri e le camerate parrocchiali non consentono l'ingresso di animali per motivi igienici e di convivenza comunitaria.
                  Se cammini con il cane, la tenda (all'aperto in campeggio o chiedendo l'uso del giardino) o gli alloggi salva-vita "pet-friendly" sono la soluzione obbligata.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
