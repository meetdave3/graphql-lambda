import { Station, Status } from "./types";
import { getStationById, getStatusById } from "./db/index";

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
  },
};
