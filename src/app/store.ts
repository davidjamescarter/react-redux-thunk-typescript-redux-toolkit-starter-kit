import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherReducer from "features/weather/weatherSlice";

const reducer = {
  weather: weatherReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
