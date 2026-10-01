import { PilgrimRoute, PilgrimStage } from '../types';
import { stagesLazio } from './stagesLazio';
import { stagesCampania } from './stagesCampania';
import { stagesPugliaNorth } from './stagesPugliaNorth';
import { stagesPugliaSouth } from './stagesPugliaSouth';
import { stagesHolyLand } from './stagesHolyLand';

// Base complete stage list for Roma -> Leuca (35 stages)
const baseStagesLeuca: PilgrimStage[] = [
  ...stagesLazio,
  ...stagesCampania,
  ...stagesPugliaNorth,
  ...stagesPugliaSouth
];

// Specialized Stage 29 for Brindisi / Terra Santa arrival (Ostuni -> Brindisi)
const stage29TerraSanta: PilgrimStage = {
  ...stagesPugliaSouth[2], // index 2 is stage 29 (Ostuni -> Brindisi)
  number: 29,
  from: "Ostuni",
  to: "San Vito dei Normanni → BRINDISI (Porto dei Crociati & Porta d'Oriente per la Terra Santa)",
  description: "Tappa trionfale di compimento del Cammino per la Terra Santa! Dalla Piana degli Ulivi e dall'Oasi protetta di Torre Guaceto si entra nel porto naturale di Brindisi. Si giunge alle celebri Colonne Romane terminali della Via Appia e della Via Traiana sul mare, e al mistico Tempio di San Giovanni al Sepolcro (la rotonda templare dell'XI secolo costruita come replica esatta dell'Anástasis di Gerusalemme, dove i pellegrini ricevevano la solenne benedizione del mare prima di salpare verso i Luoghi Santi).",
  convents: [
    {
      id: "c-29-1",
      name: "Ostello della Gioventù Brindisi (Accoglienza Ufficiale Cammini)",
      type: "foresteria",
      requiresCredential: true,
      costType: "tariffa_pellegrina",
      suggestedDonationEur: 18,
      phone: "+39 0831 096232",
      email: "info@ostellodellagioventubrindisi.it",
      address: "Via Nicola Brandi 2, 72100 Brindisi (BR)",
      contactPerson: "Reception Ostello",
      receptionHours: "08:00 - 20:00",
      hasStamp: true,
      tentAllowedInGarden: true,
      services: [
        "Letti a castello in camerata",
        "Doccia calda",
        "Cucina uso ospiti",
        "Lavanderia",
        "WiFi",
        "Timbro Colonne Romane & Terra Santa"
      ],
      lat: 40.6420,
      lng: 17.9350,
      notes: "Struttura ufficiale di riferimento per camminatori e cicloturisti della Francigena a Brindisi."
    },
    {
      id: "c-29-2",
      name: "Convento La Pietà - OFM & Tempio di San Giovanni al Sepolcro",
      type: "convento",
      requiresCredential: true,
      costType: "donativo_libero",
      suggestedDonationEur: 12,
      phone: "+39 0831 523002",
      email: "sepolcro.brindisi@gmail.com",
      address: "Via San Benedetto 3 / Corso Roma 142, 72100 Brindisi (BR)",
      contactPerson: "Padri Francescani Minori / Custode del Tempio",
      receptionHours: "15:30 - 19:30",
      hasStamp: true,
      tentAllowedInGarden: false,
      services: [
        "Benedizione del Pellegrino per la Terra Santa",
        "Timbro speciale Croce di Gerusalemme",
        "Punto informazioni imbarchi marittimi",
        "Doccia calda e camerata"
      ],
      lat: 40.6345,
      lng: 17.9420,
      notes: "Luogo simbolo millenario: qui crociati e pellegrini pregavano prima di salpare verso Giaffa e Gerusalemme."
    }
  ],
  campsites: [
    {
      id: "camp-29-1",
      name: "Piazzola Camper & Tende Freeland Brindisi",
      type: "area_bivacco_consentita",
      priceTentPerNightEur: 7,
      phone: "+39 0831 578000",
      address: "Strada Statale 16 km 14 / Via Appia, 72100 Brindisi (BR)",
      waterAvailable: true,
      showerAvailable: true,
      electricityAvailable: true,
      stoveCookingAllowed: true,
      lat: 40.6280,
      lng: 17.9150,
      instructions: "ATTENZIONE: area sosta camper/tende su prato con allacci idrici, elettrici, docce calde e fermata bus urbano per il centro storico e le Colonne Romane."
    }
  ],
  emergencyStays: [
    {
      id: "em-29-1",
      name: "Hotel Orientale Brindisi",
      type: "albergo_economico",
      priceMinEur: 40,
      distanceFromTrailMeters: 80,
      address: "Corso Garibaldi 40, 72100 Brindisi (BR)",
      phone: "+39 0831 568451",
      bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Brindisi&order=price",
      perks: ["Nel centro sul corso principale", "Doccia calda", "WiFi", "Colazione"],
      lat: 40.6360,
      lng: 17.9440
    },
    {
      id: "em-29-2",
      name: "Grande Albergo Internazionale Brindisi",
      type: "albergo_economico",
      priceMinEur: 46,
      distanceFromTrailMeters: 100,
      address: "Viale Regina Margherita 23, 72100 Brindisi (BR)",
      phone: "+39 0831 224101",
      bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Brindisi&order=price",
      perks: ["Sul lungomare davanti al porto", "Reception h24", "Bagno privato"],
      lat: 40.6380,
      lng: 17.9460
    }
  ]
};

// Stages 1 to 29 for Roma -> Brindisi (including Ostuni as stage 28)
const baseStagesBrindisi: PilgrimStage[] = [
  ...baseStagesLeuca.slice(0, 28), // Stages 1 to 28 (from Roma San Pietro to Ostuni)
  stage29TerraSanta                // Stage 29 (from Ostuni to Brindisi Porto/Terra Santa)
];

export const LEUCA_ROUTE: PilgrimRoute = {
  id: 'roma_leuca',
  name: 'Cammino di Leuca',
  shortName: 'Roma → Leuca',
  subtitle: 'De Finibus Terrae',
  destination: 'Santa Maria di Leuca (Finibus Terrae)',
  destinationIcon: '⚓',
  description: 'Itinerario completo da Roma San Pietro fino a Santa Maria di Leuca, dove si abbracciano il mar Ionio e il mar Adriatico. 35 tappe tutte sotto i 30 km con conventi per credenziale, campeggi/tenda e alloggi salva-vita.',
  historicalContext: 'La rotta integrale dei pellegrini romei e salentini verso il Santuario De Finibus Terrae, l\'estremo promontorio d\'Italia dove sbarcò l\'Apostolo Pietro secondo la tradizione prima di recarsi a Roma.',
  totalStages: 35,
  totalKm: Math.round(baseStagesLeuca.reduce((acc, s) => acc + s.distanceKm, 0) * 10) / 10,
  maxDailyKm: Math.max(...baseStagesLeuca.map((s) => s.distanceKm)),
  stages: baseStagesLeuca,
  regionFilters: [
    'Tutte le regioni',
    'Lazio',
    'Campania',
    'Puglia (Daunia & Tavoliere)',
    'Puglia (Terra di Bari)',
    'Puglia (Salento)'
  ] as const,
  returnTransportNote: 'Treno regionale da Gagliano del Capo/Lecce per Roma Termini (~5h30)',
  defaultReturnCost: 45,
  defaultReturnCity: 'Lecce / Leuca'
};

export const BRINDISI_ROUTE: PilgrimRoute = {
  id: 'roma_brindisi',
  name: 'Cammino per la Terra Santa',
  shortName: 'Roma → Brindisi',
  subtitle: "Porta d'Oriente per Gerusalemme",
  destination: "Porto di Brindisi (Colonne Romane & Terra Santa)",
  destinationIcon: '🕊️',
  description: 'Da Roma San Pietro a Brindisi: 29 tappe tutte rigorosamente sotto i 30 km. Seguendo l\'Appia Traiana fino al porto naturale da cui per oltre mille anni salparono Crociati, Templari e pellegrini diretti a Gerusalemme e ai Luoghi Santi.',
  historicalContext: 'L\'antico cammino marittimo verso la Terra Santa: arrivo alle maestose Colonne Romane dell\'Appia sul mare e al Tempio di San Giovanni al Sepolcro, la rotonda templare costruita a immagine dell\'Anastasis di Gerusalemme per la solenne benedizione dei naviganti pellegrini.',
  totalStages: 29,
  totalKm: Math.round(baseStagesBrindisi.reduce((acc, s) => acc + s.distanceKm, 0) * 10) / 10,
  maxDailyKm: Math.max(...baseStagesBrindisi.map((s) => s.distanceKm)),
  stages: baseStagesBrindisi,
  regionFilters: [
    'Tutte le regioni',
    'Lazio',
    'Campania',
    'Puglia (Daunia & Tavoliere)',
    'Puglia (Terra di Bari)',
    'Puglia (Salento)'
  ] as const,
  returnTransportNote: 'Frecciargento / Intercity diretto da Brindisi Centrale a Roma Termini (~5 ore)',
  defaultReturnCost: 39,
  defaultReturnCity: 'Brindisi Centrale'
};

export const HOLY_LAND_ROUTE: PilgrimRoute = {
  id: 'terra_santa_gerusalemme',
  name: 'Cammino di Terra Santa (A Piedi)',
  shortName: 'Giaffa → Gerusalemme',
  subtitle: "Dall'Approdo al Santo Sepolcro",
  destination: "Gerusalemme (Basilica del Santo Sepolcro / Anastasis)",
  destinationIcon: '☩',
  description: 'Il cammino a piedi in Terra Santa: 6 tappe rigorosamente sotto i 30 km (media 19.8 km/dì) dal millenario porto biblico di Giaffa (approdo delle navi dei pellegrini salpate da Brindisi) attraverso la Piana di Saron, la Shephelah, Ramla, Emmaus Nicopolis, Latrun, Abu Ghosh e Ein Karem fino alla Porta di Giaffa e alla Basilica del Santo Sepolcro a Gerusalemme.',
  historicalContext: 'La continuazione a piedi del pellegrinaggio oltremare: dopo la traversata o il volo di raccordo, il pellegrino si rimette in marcia zaino e tenda calcando la polvere dei patriarchi, degli apostoli e dei crociati, accolto dalla secolare ospitalità della Custodia di Terra Santa (Frati Minori) e dai monasteri trappisti e benedettini.',
  totalStages: 6,
  totalKm: Math.round(stagesHolyLand.reduce((acc, s) => acc + s.distanceKm, 0) * 10) / 10,
  maxDailyKm: Math.max(...stagesHolyLand.map((s) => s.distanceKm)),
  stages: stagesHolyLand,
  regionFilters: [
    'Tutte le regioni',
    'Costa di Giaffa & Saron',
    'Colline di Giudea & Latrun',
    'Gerusalemme & Ein Karem'
  ] as const,
  returnTransportNote: 'Treno veloce King David da Gerusalemme Yitzhak Navon all\'Aeroporto Ben Gurion TLV (20 minuti, ~5€ / 20 ILS)',
  defaultReturnCost: 5,
  defaultReturnCity: 'Aeroporto Ben Gurion (TLV)'
};

export const ROUTES: Record<string, PilgrimRoute> = {
  roma_brindisi: BRINDISI_ROUTE,
  roma_leuca: LEUCA_ROUTE,
  terra_santa_gerusalemme: HOLY_LAND_ROUTE
};

export const DEFAULT_ROUTE_ID = 'roma_brindisi';

export function getRouteById(id: string): PilgrimRoute {
  return ROUTES[id] || BRINDISI_ROUTE;
}