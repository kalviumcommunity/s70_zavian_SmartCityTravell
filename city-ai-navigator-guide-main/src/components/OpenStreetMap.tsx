
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { City, Attraction } from '../types';

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
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* City center marker */}
      <Marker 
        position={position}
      >
        <Popup>
          <div className="font-medium">{city.name}</div>
          <div className="text-sm text-gray-600">{city.country}</div>
        </Popup>
      </Marker>
      
      {/* Attraction markers */}
      {attractions.map((attraction, index) => (
        attraction.coordinates ? (
          <Marker
            key={index}
            position={[attraction.coordinates.lat, attraction.coordinates.lng]}
          >
            <Popup>
              <div className="font-medium">{attraction.name}</div>
              <div className="text-xs text-gray-600">{attraction.category}</div>
              <div className="text-xs">{attraction.price} · {attraction.duration}</div>
            </Popup>
          </Marker>
        ) : null
      ))}
    </MapContainer>
  );
};

export default OpenStreetMap;
