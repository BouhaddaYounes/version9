import { configureStore } from "@reduxjs/toolkit";
import stationReducer from './slices/stationSlice';
import loyerReducer from './slices/loyerSlice';
import operateurReducer from './slices/operateurSlice';
import contractReducer from './slices/contractSlice';

export const store = configureStore({
  reducer: {
    stations: stationReducer,
    loyers: loyerReducer,
    operateurs: operateurReducer,
    contracts: contractReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
