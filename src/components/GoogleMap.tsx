"use client";
import { useEffect, useRef } from "react";

interface GoogleMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

export default function GoogleMap({ apiKey, center, zoom = 14, className = "w-full h-80 rounded-lg border" }: GoogleMapProps) {

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (window.google && mapRef.current) {
        new window.google.maps.Map(mapRef.current, {
          center,
          zoom,
        });
      }
    };

    // Check if the script is already present
    const existingScript = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
    if (!window.google && apiKey && !existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else if (window.google) {
      initializeMap();
    } else if (existingScript) {
      // If script is loading, add a listener for when it loads
      existingScript.addEventListener('load', initializeMap);
    }
    // Cleanup: remove event listener if any
    return () => {
      if (existingScript) {
        existingScript.removeEventListener('load', initializeMap);
      }
    };
  }, [apiKey, center, zoom]);

  return <div ref={mapRef} className={className} />;
}
