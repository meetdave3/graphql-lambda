import * as turf from "@turf/turf";

import { Properties, Station } from "../types";
import stationsData from "./data/stations-dump";

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

export function getClosestStation(lat: number, lon: number): Station | null {
  const targetPoint = turf.point([lat, lon]);

  let station: Station | null = null;
  let coordinates: turf.Position[] | [] = [];

  for (let i = 0; i < stationsData.length; i++) {
    const s: Station = stationsData[i];
    const position: turf.Position = [s.lat, s.lon];
    coordinates = [...coordinates, position];
  }

  if (coordinates) {
    const featureCollection: turf.helpers.FeatureCollection<
      turf.Point,
      turf.Properties
    > = turf.points(coordinates);
    const nearest = turf.nearestPoint(targetPoint, featureCollection);
    const properties: Properties = nearest.properties;

    station = stations[properties?.featureIndex];
  }

  return station;
}
