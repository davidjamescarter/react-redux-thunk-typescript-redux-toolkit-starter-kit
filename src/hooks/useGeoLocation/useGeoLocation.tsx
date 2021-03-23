import { useState, useEffect } from "react";

interface Location {
  loaded: boolean;
  coordinates: { lat: string; lon: string };
  error: { code?: number | null; message: string };
}

function useGeoLocation() {
  const [location, setLocation] = useState<Location>({
    loaded: false,
    coordinates: { lat: "", lon: "" },
    error: {
      code: null,
      message: "",
    },
  });

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
      error: {
        code: null,
        message: "",
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: "",
        lon: "",
      },
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}

export default useGeoLocation;
