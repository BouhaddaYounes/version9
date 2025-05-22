import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Station {
  id: string;
  CODE_STATION: string;
  NOM_STATION: string;
  CODE_DISTRICT: string;
  CODE_WILAYA: string;
  TYPE_ACTIVITE: number;
  ETATS: number;
  [key: string]: any;
}

interface StationState {
  stations: Station[];
  loading: boolean;
  error: string | null;
}

const initialState: StationState = {
  stations: [],
  loading: false,
  error: null,
};

// API base URL
const API_BASE_URL = 'http://localhost:5000';

// Async thunk for fetching stations
export const fetchStations = createAsyncThunk(
  'stations/fetchStations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/getAllStation`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch stations');
    }
  }
);
// export const fetchStations = createAsyncThunk(
//   'stations/fetchStations',
//   async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/api/getAllStation`);
//       return response.data;
//     } catch (error: any) {
//       throw new Error(error.response?.data?.message || 'Failed to fetch stations');
//     }
//   }
// );

// Add update station thunk
export const updateStation = createAsyncThunk(
  'stations/updateStation',
  async (
    { CODE_STATION, ETATS, TYPE_ACTIVITE }: { CODE_STATION: string; ETATS: number; TYPE_ACTIVITE: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/updateStation/${CODE_STATION}`,
        { ETATS, TYPE_ACTIVITE }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update station');
    }
  }
);
// export const updateStation = createAsyncThunk(
//   'stations/updateStation',
//   async ({ CODE_STATION, ETATS, ACTIVITE }: { 
//     CODE_STATION: string;
//     ETATS: number;
//     ACTIVITE: number;
//   }) => {
//     try {
//       const response = await axios.put(
//         `${API_BASE_URL}/api/updateStation/${CODE_STATION}`,
//         { ETATS, ACTIVITE }
//       );
//       return response.data;
//     } catch (error: any) {
//       throw new Error(error.response?.data?.message || 'Failed to update station');
//     }
//   }
// );
// export const updateStation = createAsyncThunk(
//   'stations/updateStation',
//   async (
//     { CODE_STATION, ETAT, ACTIVITE }: { CODE_STATION: string; ETAT: number; ACTIVITE: number },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await axios.put(
//         `${API_BASE_URL}/api/updateStation/${CODE_STATION}`,
//         { ETAT, ACTIVITE }
//       );
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to update station');
//     }
//   }
// );


const stationSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStations.fulfilled, (state, action: PayloadAction<Station[]>) => {
        state.loading = false;
        state.stations = action.payload;
      })
      
      // .addCase(fetchStations.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || 'Failed to fetch stations';
      // })
      .addCase(fetchStations.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || action.error.message || 'Failed to fetch stations';
      })
      // Add update station cases
      .addCase(updateStation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(updateStation.fulfilled, (state, action: PayloadAction<Station>) => {
      //   const index = state.stations.findIndex(
      //     (station) => station.CODE_STATION === action.payload.CODE_STATION
      //   );
      //   if (index !== -1) {
      //     state.stations[index] = action.payload;
      //   }
      //   state.loading = false;
      // })
      .addCase(updateStation.fulfilled, (state, action) => {
        state.loading = false;
        const updatedStation = action.payload;
        state.stations = state.stations.map(station =>
          station.CODE_STATION === updatedStation.CODE_STATION
            ? { ...station, ...updatedStation }
            : station
        );
      })
      // .addCase(updateStation.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || 'Failed to update station';
      // });
      .addCase(updateStation.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || action.error.message || 'Failed to update station';
      });
  },
});

// Selectors
export const selectStations = (state: RootState) => state.stations?.stations ?? [];
export const selectStationsLoading = (state: RootState) => state.stations?.loading ?? false;
export const selectStationsError = (state: RootState) => state.stations?.error ?? null;

export default stationSlice.reducer;
