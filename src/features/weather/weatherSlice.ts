import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "app/store";
import { Forecast } from "./weatherTypes";
import { fetchWeatherForecast } from "./fetchWeatherForecast";

// Type initialState
interface WeatherState {
  forecasts: Forecast[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  increment: number;
}

// Set initialState
const initialState: WeatherState = {
  forecasts: [],
  status: "idle",
  error: null,
  increment: 0,
};

// create weather slice
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    increment(state: WeatherState) {
      // RTK allows us to write
      // “mutating” logic in reducers.
      // It doesn't actually mutate the state
      // because it uses the Immer library,
      // which detects changes to a "draft state"
      // and produces a brand new
      // immutable state based off those changes
      state.increment += 1;
    },
  },
  extraReducers: (builder) => {
    // when send a request, fetchWeatherForecast is pending
    builder.addCase(fetchWeatherForecast.pending, (state) => {
      // change status to loading and clear previous errors
      state.status = "loading";
      state.error = null;
    });

    // when server responses with data, fetchWeatherForecast is fullfilled
    builder.addCase(fetchWeatherForecast.fulfilled, (state, { payload }) => {
      // change status back to idle and add forecast to forecasts state
      state.forecasts.push(...[payload]);
      state.status = "idle";
    });

    // when server responses with error, fetchWeatherForecast is rejected
    builder.addCase(fetchWeatherForecast.rejected, (state, { payload }) => {
      console.log("rejected", payload);
      // change status back to idle and add error to state
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

// export all generate actions
export const { increment } = weatherSlice.actions;

// create and export a selector
export const selectForecast = (state: RootState) => {
  return state.weather.forecasts;
};

export default weatherSlice.reducer;
