import { PilgrimRoute, PilgrimStage } from '../types';
import { stagesLazio } from './stagesLazio';
import { stagesCampania } from './stagesCampania';
import { stagesPugliaNorth } from './stagesPugliaNorth';
import { stagesPugliaSouth } from './stagesPugliaSouth';

// Base complete stage list for Roma -> Leuca (35 stages)
const baseStagesLeuca: PilgrimStage[] = [
  ...stagesLazio,
  ...stagesCampania,
  ...stagesPugliaNorth,
  ...stagesPugliaSouth
];

// Specialized Stage 28 for Brindisi / Terra Santa arrival
const stage28TerraSanta: PilgrimStage = {
  ...stagesPugliaSouth[1], // index 1 is stage 28 (Ostuni -> Brindisi)
  to: "San Vito dei Normanni → BRINDISI (Porto dei Crociati & Porta d'Oriente per la Terra Santa)",
  description: "Tappa trionfale di compimento del Cammino per la Terra Santa! Dalla Piana degli Ulivi e dall'Oasi protetta di Torre Guaceto si entra nel porto naturale di Brindisi. Si giunge alle celebri Colonne Romane terminali della Via Appia e della Via Traiana sul mare, e al mistico Tempio di San Giovanni al Sepolcro (la rotonda templare dell'XI secolo costruita come replica esatta dell'Anástasis di Gerusalemme, dove i pellegrini ricevevano la solenne benedizione del mare prima di salpare verso i Luoghi Santi).",
  convents: [
    {
      id: "c-28-1",
      name: "Monastero di Santa Chiara & Parrocchia San Benedetto (Brindisi)",
      type: "monastero",
      requiresCredential: true,
      costType: "donativo_libero",
      suggestedDonationEur: 15,
      phone: "+39 0831 521 445",
      email: "santachiara.brindisi@libero.it",
      address: "Via Santa Chiara 2, 72100 Brindisi (BR)",
      contactPerson: "Madre Superiora / Don Cosimo",
      receptionHours: "14:30 - 19:30",
      hasStamp: true,
      tentAllowedInGarden: true,
      services: [
        "Doccia calda",
        "Camerata pellegrina",
        "Chiostro romanico dell'XI secolo",
        "Timbro Colonne Romane & San Benedetto"
      ],
      lat: 40.6335,
      lng: 17.9435,
      notes: "Accoglienza pellegrina storica a 200 metri dalle Colonne Terminali dell'Appia e dal porto."
    },
    {
      id: "c-28-2",
      name: "Tempio di San Giovanni al Sepolcro & Foresteria dei Crociati (Brindisi)",
      type: "foresteria",
      requiresCredential: true,
      costType: "donativo_libero",
      suggestedDonationEur: 15,
      phone: "+39 0831 562 108",
      email: "sepolcro.brindisi@gmail.com",
      address: "Largo San Giovanni al Sepolcro, 72100 Brindisi (BR)",
      contactPerson: "Custode del Tempio & Confraternita dei Pellegrini",
      receptionHours: "15:00 - 19:00",
      hasStamp: true,
      tentAllowedInGarden: true,
      services: [
        "Benedizione del Pellegrino per la Terra Santa",
        "Timbro speciale Croce di Gerusalemme",
        "Punto informazioni imbarchi marittimi",
        "Wi-Fi e sala meditazione"
      ],
      lat: 40.6360,
      lng: 17.9422,
      notes: "Luogo simbolo millenario: qui crociati e pellegrini pregavano tutta la notte prima di salpare verso Giaffa e Gerusalemme."
    }
  ],
  campsites: [
    {
      id: "camp-28-1",
      name: "Area Campeggio Torre Guaceto (Oasi WWF)",
      type: "campeggio_ufficiale",
      priceTentPerNightEur: 11,
      phone: "+39 0831 989 912",
      address: "Contrada Penna Grossa, Carovigno/Brindisi",
      waterAvailable: true,
      showerAvailable: true,
      electricityAvailable: true,
      stoveCookingAllowed: true,
      lat: 40.7120,
      lng: 17.7950,
      instructions: "All'ingresso della celebre riserva marina protetta di Torre Guaceto, piazzola tenda e docce."
    },
    {
      id: "camp-28-2",
      name: "Parco Urbano Cillarese & Prato Parrocchiale San Benedetto",
      type: "prato_parrocchiale",
      priceTentPerNightEur: 0,
      phone: "+39 0831 521 445",
      address: "Via Provinciale San Vito / Viale Cillarese, Brindisi",
      waterAvailable: true,
      showerAvailable: false,
      electricityAvailable: false,
      stoveCookingAllowed: true,
      lat: 40.6405,
      lng: 17.9290,
      instructions: "Prato alberato con fontanella potabile, sosta consentita per tende da trekking dei camminatori muniti di credenziale."
    }
  ],
  emergencyStays: [
    {
      id: "em-28-1",
      name: "Ostello del Salento Brindisi Low-Cost",
      type: "ostello_lowcost",
      priceMinEur: 23,
      distanceFromTrailMeters: 200,
      address: "Via Lauro 18, Brindisi",
      phone: "+39 0831 562 108",
      bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Brindisi&order=price",
      perks: ["A 300m dalle Colonne Romane", "Doccia calda", "Cucina comune", "Lavatrice", "WiFi"],
      lat: 40.6328,
      lng: 17.9415
    },
    {
      id: "em-28-2",
      name: "B&B Appia Terminal Budget Rooms",
      type: "bb_budget",
      priceMinEur: 30,
      distanceFromTrailMeters: 280,
      address: "Corso Garibaldi 50, Brindisi",
      phone: "+39 340 881 2299",
      bookingSearchUrl: "https://www.booking.com/searchresults.html?ss=Brindisi&order=price",
      perks: ["Bagno privato", "Aria condizionata", "Colazione inclusa", "Vicino alla Stazione FS"],
      lat: 40.6340,
      lng: 17.9440
    }
  ]
};

// Stages 1 to 28 for Roma -> Brindisi
const baseStagesBrindisi: PilgrimStage[] = [
  ...baseStagesLeuca.slice(0, 27),
  stage28TerraSanta
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
  description: 'Da Roma San Pietro a Brindisi: 28 tappe tutte rigorosamente sotto i 30 km. Seguendo l\'Appia Traiana fino al porto naturale da cui per oltre mille anni salparono Crociati, Templari e pellegrini diretti a Gerusalemme e ai Luoghi Santi.',
  historicalContext: 'L\'antico cammino marittimo verso la Terra Santa: arrivo alle maestose Colonne Romane dell\'Appia sul mare e al Tempio di San Giovanni al Sepolcro, la rotonda templare costruita a immagine dell\'Anastasis di Gerusalemme per la solenne benedizione dei naviganti pellegrini.',
  totalStages: 28,
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

export const ROUTES: Record<string, PilgrimRoute> = {
  roma_leuca: LEUCA_ROUTE,
  roma_brindisi: BRINDISI_ROUTE
};

export const DEFAULT_ROUTE_ID = 'roma_brindisi'; // Default to the newly requested route or leuca

export function getRouteById(id: string): PilgrimRoute {
  return ROUTES[id] || LEUCA_ROUTE;
}
