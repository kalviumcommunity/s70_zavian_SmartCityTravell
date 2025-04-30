export interface City {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  attractions: Attraction[];
  categories: string[];
  weather?: Weather;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  price?: string;
  duration?: string;
  location?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Weather {
  temperature: number;
  condition: string;
  icon: string;
}

export interface UserPreference {
  category: string;
  level: number; // 1-5
}

export interface ItineraryDay {
  day: number;
  attractions: Attraction[];
  morningActivity?: Attraction;
  afternoonActivity?: Attraction;
  eveningActivity?: Attraction;
  notes?: string;
  customAttractions?: CustomAttraction[];
}

export interface Itinerary {
  cityId: string;
  days: ItineraryDay[];
  totalCost?: string;
  title?: string;
  startDate?: Date;
  endDate?: Date;
  id?: string;
}

export interface CustomAttraction {
  name: string;
  description: string;
  image: string;
  category?: string;
  time?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Navigation related types
export interface NavigationOptions {
  mode?: 'driving' | 'walking' | 'bicycling' | 'transit';
  avoidHighways?: boolean;
  avoidTolls?: boolean;
  avoidFerries?: boolean;
}

// Google Maps URL parameters: https://developers.google.com/maps/documentation/urls/get-started
export interface GoogleMapsUrlParams {
  origin?: string;
  destination: string;
  travelmode?: string;
  dir_action?: string;
  waypoints?: string[];
  avoid?: string[];
}
