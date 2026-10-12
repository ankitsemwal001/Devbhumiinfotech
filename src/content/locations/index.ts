import locationsData from "../../../locations.json";

export interface GeoServiceItem {
  name: string;
  slug: string;
  h1Noun: string;
  geoEnabled: boolean;
}

export interface GeoLocationItem {
  name: string;
  slug: string;
  parent?: string | null;
  district: string;
  type: "city" | "town" | "locality";
  priority: "high" | "medium" | "low";
  published: boolean;
  presence: "hq" | "verified-office" | "service-area";
}

export const geoServices: GeoServiceItem[] = locationsData.services as GeoServiceItem[];
export const geoLocations: GeoLocationItem[] = locationsData.locations as GeoLocationItem[];

/**
 * Returns only published geo locations (Rishikesh, Dehradun, Haridwar)
 */
export function getPublishedGeoLocations(): GeoLocationItem[] {
  return geoLocations.filter((loc) => loc.published);
}

/**
 * Returns high-priority city hubs
 */
export function getHighPriorityHubs(): GeoLocationItem[] {
  return geoLocations.filter(
    (loc) => loc.priority === "high" && loc.type === "city" && loc.published
  );
}

