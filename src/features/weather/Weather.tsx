import { useEffect } from "react";

import { selectForecast } from "./weatherSlice";
import { fetchWeatherForecast } from "./fetchWeatherForecast";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { WeatherReport } from "components/weather";

export function Weather() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeatherForecast({ lat: "59.92609", lon: "10.73436" }));
  }, []);

  const forecast = useAppSelector(selectForecast);
  const forecastStatus = useAppSelector((state) => state.weather.status);

  return (
    <div>
      {forecastStatus === "loading" ? (
        "Loading forecasts..."
      ) : (
        <WeatherReport forecasts={forecast} />
      )}
    </div>
  );
}
