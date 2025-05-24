import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Loyer {
  id: string;
  CODE_LOYER: string;
  TYPE_LOYER: number;
  ETAT: number;
  [key: string]: any;
}

interface LoyerState {
  loyers: Loyer[];
  loading: boolean;
  error: string | null;
  success?: boolean;
}

const initialState: LoyerState = {
  loyers: [],
  loading: false,
  error: null,
  success: false,
};

const API_BASE_URL = 'http://localhost:5000';

export const fetchLoyers = createAsyncThunk('loyers/fetchLoyers', async () => {
  const response = await axios.get(`${API_BASE_URL}/api/getAllLoyer`);
  return response.data;
});

export const updateLoyer = createAsyncThunk(
  'loyers/updateLoyer',
  async (
    { CODE_LOYER, ETAT, TYPE_LOYER }: { CODE_LOYER: string; ETAT: number; TYPE_LOYER: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/updateLoyer/${CODE_LOYER}`, {
        ETAT,
        TYPE_LOYER,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update loyer');
    }
  }
);

export const createLocal = createAsyncThunk(
  'loyers/createLocal',
  async (
    payload: {
      codeStation: string;
      typeLoyer: number;
      etat: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/addLoyer`, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Erreur serveur');
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
      })
      .addCase(updateLoyer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateLoyer.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.loyers.findIndex((l) => l.CODE_LOYER === action.payload.CODE_LOYER);
        if (index !== -1) {
          state.loyers[index] = action.payload;
        }
      })
      .addCase(updateLoyer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createLocal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createLocal.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.loyers.push(action.payload);
      })
      .addCase(createLocal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectLoyers = (state: RootState) => state.loyers.loyers;
export const selectLoyersLoading = (state: RootState) => state.loyers.loading;
export const selectLoyersError = (state: RootState) => state.loyers.error;

export default loyerSlice.reducer;
