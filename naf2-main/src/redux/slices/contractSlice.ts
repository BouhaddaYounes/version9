import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Contract {
  ID: number;
  NUM: string;
  OBJET: string;
  DATE_VIGURE: string;
  DATE_FIN: string;
}

interface ContractState {
  contracts: Contract[];
  loading: boolean;
  error: string | null;
}

const initialState: ContractState = {
  contracts: [],
  loading: false,
  error: null,
};

// API base URL
const API_BASE_URL = 'http://localhost:5000';

// Async thunk for fetching contracts
export const fetchContracts = createAsyncThunk(
  'contracts/fetchContracts',
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/getAllContrat`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch contracts');
    }
  }
);

const contractSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContracts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContracts.fulfilled, (state, action: PayloadAction<Contract[]>) => {
        state.loading = false;
        state.contracts = action.payload;
      })
      .addCase(fetchContracts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch contracts';
      });
  },
});

export const selectContracts = (state: RootState) => state.contracts.contracts;
export const selectContractsLoading = (state: RootState) => state.contracts.loading;
export const selectContractsError = (state: RootState) => state.contracts.error;

export default contractSlice.reducer;
