import { createAsyncThunk } from "@reduxjs/toolkit";

import { client } from "api/client";
import { Forecast } from "./weatherTypes";

type FetchWeatherForecastError = {
  message: string;
};

// create a async thunk using createAsyncThunk
export const fetchWeatherForecast = createAsyncThunk<
  // type arguements
  Forecast,
  { lat: string; lon: string },
  { rejectValue: FetchWeatherForecastError }
>("weather/fetchForecast", async (payload, thunkApi) => {
  // hit endpoint using axios
  const response = await client.get(
    `compact.json?lat=${payload.lat}&lon=${payload.lon}`
  );

  if (response.status !== 200) {
    // Return the error message:
    console.log("rejected!!");
    return thunkApi.rejectWithValue({
      message: "Failed to fetch forecast.",
    });
  }

  // return response data with type
  return response.data as Forecast;
});
