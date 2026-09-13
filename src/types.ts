export type AccommodationCategory = 'convent' | 'campsite' | 'emergency_booking';

export type RouteId = 'roma_leuca' | 'roma_brindisi';

export interface PilgrimRoute {
  id: RouteId;
  name: string;
  shortName: string;
  subtitle: string;
  destination: string;
  destinationIcon: string;
  description: string;
  historicalContext: string;
  totalStages: number;
  totalKm: number;
  maxDailyKm: number;
  stages: PilgrimStage[];
  regionFilters: readonly string[];
  returnTransportNote: string;
  defaultReturnCost: number;
  defaultReturnCity: string;
}

export interface ConventHost {
  id: string;
  name: string;
  type: 'convento' | 'monastero' | 'santuario' | 'parrocchia' | 'foresteria';
  requiresCredential: boolean;
  costType: 'donativo_libero' | 'tariffa_pellegrina';
  suggestedDonationEur: number; // e.g. 10, 15
  phone: string;
  email?: string;
  address: string;
  contactPerson?: string;
  receptionHours: string;
  hasStamp: boolean;
  tentAllowedInGarden: boolean;
  services: string[]; // e.g. 'doccia calda', 'cucina pellegrina', 'lavatoio', 'sacco a pelo richiesto'
  lat: number;
  lng: number;
  notes: string;
}

export interface CampsiteSpot {
  id: string;
  name: string;
  type: 'campeggio_ufficiale' | 'agricampeggio' | 'area_bivacco_consentita' | 'prato_parrocchiale';
  priceTentPerNightEur: number; // 0 for free bivouac / parish lawn
  phone?: string;
  email?: string;
  address: string;
  waterAvailable: boolean;
  showerAvailable: boolean;
  electricityAvailable: boolean;
  stoveCookingAllowed: boolean;
  lat: number;
  lng: number;
  instructions: string;
}

export interface EmergencyBookingStay {
  id: string;
  name: string;
  type: 'affittacamere' | 'ostello_lowcost' | 'bb_budget' | 'albergo_economico';
  priceMinEur: number;
  distanceFromTrailMeters: number;
  address: string;
  phone: string;
  bookingSearchUrl: string;
  perks: string[]; // e.g. 'cancellazione gratuita', 'check-in h24', 'doccia privata', 'aria condizionata'
  lat: number;
  lng: number;
}

export interface PilgrimStage {
  number: number;
  from: string;
  to: string;
  region: 'Lazio' | 'Campania' | 'Puglia (Daunia & Tavoliere)' | 'Puglia (Terra di Bari)' | 'Puglia (Salento)';
  distanceKm: number;
  elevationGainM: number;
  elevationLossM: number;
  difficulty: 'Facile' | 'Medio' | 'Impegnativo';
  terrain: string; // e.g. 'Sterrato 60%, Asfalto secondario 40%'
  description: string;
  coordinates: [number, number]; // Target city lat, lng
  startCoordinates: [number, number];
  waterPointsNote: string;
  convents: ConventHost[];
  campsites: CampsiteSpot[];
  emergencyStays: [EmergencyBookingStay, EmergencyBookingStay]; // The 2 cheapest life-saving booking options
  pathSegments?: [number, number][]; // coordinates for Leaflet polyline
}

export interface ExpenseItem {
  id: string;
  date: string;
  stageNumber: number;
  category: 'alloggio_convento' | 'campeggio_tenda' | 'salva_vita_booking' | 'cibo_spesa' | 'trasporti' | 'attrezzatura_farmacia' | 'altro';
  amount: number;
  description: string;
}

export type BudgetEstimate = BudgetPlan;

export interface BudgetPlan {
  totalDays: number;
  dailyFoodBudget: number; // e.g. 12€ (supermercato + fornellino)
  conventNightsCount: number;
  conventAvgDonation: number; // e.g. 12€
  tentNightsCount: number;
  tentAvgCost: number; // e.g. 5€
  emergencyNightsCount: number;
  emergencyAvgCost: number; // e.g. 30€
  credentialAndPermits: number; // e.g. 15€
  returnTransportTicket: number; // e.g. 45€ (treno Lecce -> Roma)
  emergencyBuffer: number; // e.g. 100€
}

export interface BackpackItem {
  id: string;
  category: 'tenda_sonno' | 'cucina_acqua' | 'abbigliamento' | 'igiene_farmacia' | 'documenti_tech';
  name: string;
  weightGrams: number;
  packed: boolean;
  essential: boolean;
}

export interface StageProgress {
  stageNumber: number;
  completed: boolean;
  completedDate?: string;
  personalNotes?: string;
  tentPitchedHere?: boolean;
  conventStampObtained?: boolean;
}
