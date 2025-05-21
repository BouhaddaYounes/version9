import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Loyer {
  id: string;
  CODE_LOYER: string;
  CODE_STATION: string;
  SURFACE: number;
  MONTANT: number;
  ETAT: number;
  [key: string]: any;
}

interface LoyerState {
  loyers: Loyer[];
  loading: boolean;
  error: string | null;
}

const initialState: LoyerState = {
  loyers: [],
  loading: false,
  error: null,
};

// API base URL
const API_BASE_URL = 'http://localhost:5000';

// Async thunk for fetching loyers
export const fetchLoyers = createAsyncThunk(
  'loyers/fetchLoyers',
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/getAllLoyer`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch loyers');
    }
  }
);

const loyerSlice = createSlice({
  name: 'loyers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoyers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoyers.fulfilled, (state, action: PayloadAction<Loyer[]>) => {
        state.loading = false;
        state.loyers = action.payload;
      })
      .addCase(fetchLoyers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch loyers';
      });
  },
});

// Selectors
export const selectLoyers = (state: RootState) => state.loyers.loyers;
export const selectLoyersLoading = (state: RootState) => state.loyers.loading;
export const selectLoyersError = (state: RootState) => state.loyers.error;

export default loyerSlice.reducer;
