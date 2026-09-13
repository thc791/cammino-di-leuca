import { PilgrimStage } from '../types';
import { stagesLazio } from './stagesLazio';
import { stagesCampania } from './stagesCampania';
import { stagesPugliaNorth } from './stagesPugliaNorth';
import { stagesPugliaSouth } from './stagesPugliaSouth';

export const allStages: PilgrimStage[] = [
  ...stagesLazio,
  ...stagesCampania,
  ...stagesPugliaNorth,
  ...stagesPugliaSouth
];

export const TOTAL_KM = Math.round(allStages.reduce((acc, s) => acc + s.distanceKm, 0) * 10) / 10;
export const TOTAL_STAGES = allStages.length;
export const MAX_DAILY_KM = Math.max(...allStages.map(s => s.distanceKm));

export function getStageByNumber(num: number): PilgrimStage | undefined {
  return allStages.find(s => s.number === num);
}

export const REGION_FILTERS = [
  "Tutte le regioni",
  "Lazio",
  "Campania",
  "Puglia (Daunia & Tavoliere)",
  "Puglia (Terra di Bari)",
  "Puglia (Salento)"
] as const;

export {
  LEUCA_ROUTE,
  BRINDISI_ROUTE,
  ROUTES,
  DEFAULT_ROUTE_ID,
  getRouteById
} from './routes';

