import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Operateur {
  ID: number;
  CODE_OPERATEUR: string;
  RAISON_SOCIALE: string;
  ADRESSE: string;
  TEL: string;
  BANQUE: string;
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

export const updateOperateur = createAsyncThunk<
  Operateur,
  Operateur,
  { rejectValue: string }
>('operateur/updateOperateur', async (updatedData, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:5000/api/updateOperateur/${updatedData.CODE_OPERATEUR}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      return thunkAPI.rejectWithValue('Failed to update operateur');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Error while updating operateur');
  }
});




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
      })
      .addCase(updateOperateur.pending, (state: OperateurState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOperateur.fulfilled, (state: OperateurState, action: PayloadAction<Operateur>) => {
        state.loading = false;
        const index = state.operateurs.findIndex(
          (op) => op.CODE_OPERATEUR === action.payload.CODE_OPERATEUR
        );
        if (index !== -1) {
          state.operateurs[index] = action.payload;
        }
      })
      .addCase(updateOperateur.rejected, (state: OperateurState, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      })
  },
});

export const selectOperateurs = (state: RootState) => state.operateurs.operateurs;
export const selectOperateursLoading = (state: RootState) => state.operateurs.loading;
export const selectOperateursError = (state: RootState) => state.operateurs.error;

export default operateurSlice.reducer;
