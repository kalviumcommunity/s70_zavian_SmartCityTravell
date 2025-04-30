
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { City, Attraction } from '../types';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

// Fix for marker icons in Leaflet with React
// This addresses the issue with missing marker icons
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

// Create a custom colored icon
const createColoredIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white;"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
};

// Get a color based on attraction category
const getCategoryColor = (category: string): string => {
  const categoryColors: {[key: string]: string} = {
    'History': '#E74C3C', // Red
    'Landmark': '#3498DB', // Blue
    'Food': '#F39C12', // Orange
    'Culture': '#9B59B6', // Purple
    'Heritage': '#2ECC71', // Green
    'Spiritual': '#8E44AD', // Dark Purple
    'Architecture': '#16A085', // Teal
    'Beach': '#3498DB', // Blue
    'Urban': '#34495E', // Dark Blue
  };
  
  return categoryColors[category] || '#4A90E2'; // Default to blue if category not found
};

// Create a Google Maps navigation URL
const createGoogleMapsUrl = (lat: number, lng: number, name: string): string => {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(name)}`;
};

interface OpenStreetMapProps {
  city: City;
  attractions?: Attraction[];
  className?: string;
}

const OpenStreetMap: React.FC<OpenStreetMapProps> = ({ city, attractions = [], className = '' }) => {
  const position: [number, number] = city.coordinates ? [city.coordinates.lat, city.coordinates.lng] : [51.505, -0.09];
  
  return (
    <MapContainer
      className={`h-[400px] w-full rounded-lg shadow-md z-0 ${className}`}
      zoom={13}
      scrollWheelZoom={false}
      // Cast the MapContainer to any to bypass TypeScript checking for center prop
      {...{center: position} as any}
    >
      <TileLayer
        // Cast the TileLayer to any to bypass TypeScript checking for attribution prop
        {...{
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        } as any}
      />
      
      {/* City center marker */}
      <Marker 
        position={position}
      >
        <Popup>
          <div className="font-medium">{city.name}</div>
          <div className="text-sm text-gray-600">{city.country}</div>
          {city.coordinates && (
            <a 
              href={createGoogleMapsUrl(city.coordinates.lat, city.coordinates.lng, city.name)}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Navigate with Google Maps
            </a>
          )}
        </Popup>
      </Marker>
      
      {/* Attraction markers */}
      {attractions.map((attraction, index) => (
        attraction.coordinates ? (
          <Marker
            key={index}
            position={[attraction.coordinates.lat, attraction.coordinates.lng]}
            // Cast to any to bypass TypeScript checking for icon prop
            {...{icon: createColoredIcon(getCategoryColor(attraction.category))} as any}
          >
            <Popup>
              <div className="font-medium">{attraction.name}</div>
              <div className="text-xs text-gray-600">{attraction.category}</div>
              <div className="text-xs">{attraction.price} · {attraction.duration}</div>
              <a 
                href={createGoogleMapsUrl(attraction.coordinates.lat, attraction.coordinates.lng, attraction.name)}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                Navigate with Google Maps
              </a>
            </Popup>
          </Marker>
        ) : null
      ))}
    </MapContainer>
  );
};

export default OpenStreetMap;
