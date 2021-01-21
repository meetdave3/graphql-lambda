import { Status } from '../types';
import statusesData from './data/statuses-dump';

const statuses: Status[] = statusesData;

export function getStatusById(_id: string): Status | null {
  let status: Status | null = null;
  
  for (let i: number = 0; i < statuses.length; i++) {
    if (statuses[i].station_id === _id) {
      status = statuses[i];
      break;
    }
  }

  return status;
}