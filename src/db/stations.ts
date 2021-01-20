import { Station } from '../types';
import stationsData from './data/stations-dump.json';
const stations: Station[] = stationsData;

export function getStationById(_id: string): Station | null {
  let station: Station | null = null;
  
  for (let i: number = 0; i < stations.length; i++) {
    if (stations[i].station_id === _id) {
      station = stations[i];
      break;
    }
  }

  return station;
}
export function getAllStations(): Station[] {
  return stations;
}
