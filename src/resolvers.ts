import { LatLon, Station, Status } from "./types";
import {
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
    stations: (): Station[] => {
      return getAllStations();
    },
    station: ({}, { lat, lon }: LatLon): Station | null => {
      return getClosestStation(lat, lon);
    },
  },
};
