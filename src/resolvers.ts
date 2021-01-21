import { Station, Status } from "./types";
import { getStationById, getStatusById, getAllStations, getClosestStation } from "./db/index";

export default {
  Station: {
    status(station: Station): Status | null {
      return getStatusById(station.station_id);
    },
  },
  Query: {
    station: (
      {},
      { id }: { id: string }
    ): Station | null => {
        return getStationById(id);
    },
    stations: (): Station[] => {
      return getAllStations();
    },
    closestStation: ({}, {lat, lon}: {lat: number, lon: number}): Station | null => {
      return getClosestStation(lat, lon);
    }
  },
};
