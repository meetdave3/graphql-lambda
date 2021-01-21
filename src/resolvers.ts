import { LatLon, Station, Status } from "./types";
import {
  getStationById,
  getStatusById,
  getAllStations,
  getClosestStation,
} from "./db/index";

export default {
  Station: {
    status(station: Station): Status | null {
      return getStatusById(station.station_id);
    },
  },
  Query: {
    station: ({}, { id }: { id: string }): Station | null => {
      return getStationById(id);
    },
    stations: (): Station[] => {
      return getAllStations();
    },
    closestStation: ({}, { lat, lon }: LatLon): Station | null => {
      return getClosestStation(lat, lon);
    },
  },
};
