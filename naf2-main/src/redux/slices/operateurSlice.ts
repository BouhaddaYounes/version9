import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Operateur {
  id: string;
  CODE_OPERATEUR: string;
  RAISON_SOCIALE: string;
  ADRESSE: string;
  TEL: string;
  DOMICILIATION: string;
  NIF: string;
}

interface OperateurState {
  operateurs: Operateur[];
  loading: boolean;
  error: string | null;
}

const initialState: OperateurState = {
  operateurs: [],
  loading: false,
  error: null,
};

const API_BASE_URL = 'http://localhost:5000';

export const fetchOperateurs = createAsyncThunk(
  'operateurs/fetchOperateurs',
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/getAllOperateur`);
      // Return the data directly without transformation since we're using the exact field names
      return response.data;
    } catch (error: any) {
      console.error('Error fetching operateurs:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch operateurs');
    }
  }
);

const operateurSlice = createSlice({
  name: 'operateurs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOperateurs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOperateurs.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.operateurs = action.payload;
      })
      .addCase(fetchOperateurs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch operateurs';
      });
  },
});

export const selectOperateurs = (state: RootState) => state.operateurs.operateurs;
export const selectOperateursLoading = (state: RootState) => state.operateurs.loading;
export const selectOperateursError = (state: RootState) => state.operateurs.error;

export default operateurSlice.reducer;
