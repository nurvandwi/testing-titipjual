"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  lat: number;
  lng: number;
  address?: string;
}

export default function MapComponent({ lat, lng, address }: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map if it doesn't exist
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([lat, lng], 15);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);

      // Fix default icon issue in Leaflet with Next.js
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      // Add marker with default icon
      markerRef.current = L.marker([lat, lng]).addTo(mapRef.current);

      // Add popup with address if provided
      if (address) {
        markerRef.current.bindPopup(address).openPopup();
      }
    } else {
      // Update map view and marker position
      mapRef.current.setView([lat, lng], 15);

      if (markerRef.current) {
        markerRef.current.setLatLng([lat, lng]);
        if (address) {
          markerRef.current.bindPopup(address).openPopup();
        }
      }
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markerRef.current = null;
      }
    };
  }, [lat, lng, address]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

