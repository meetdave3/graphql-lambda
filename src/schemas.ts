import { gql } from "apollo-server-lambda";

export default gql`
  type Station {
    station_id: String!,
    name: String,
    address: String,
    lat: Float,
    lon: Float,
    capacity: Int
    status: Status
  }

  type Status {
    station_id: String!,
    is_installed: Int,
    is_renting: Int,
    is_returning: Int,
    last_reported: Float,
    num_bikes_available: Int,
    num_docks_available: Int
  }

  type Query {
    station(id: String): Station,
    stations: [Station],
    closestStation(lat: Float, lon: Float): Station
  }
`;
