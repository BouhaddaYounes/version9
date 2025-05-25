import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Contract {
  ID: number;
  NUM: string;
  CODE_OPERATEUR: string;
  TYPE_LOYER: string;
  DATE_FACTURATION: Date;
  OBJET: number;
  DATE_VIGUEUR: Date;
  DATE_FIN: Date;
}

interface ContractState {
  contracts: Contract[];
  loading: boolean;
  error: string | null;
  currentRequest: 'all' | 'byId' | null;
}

const API_BASE_URL = 'http://localhost:5000';

// Fetch all contracts
export const fetchContracts = createAsyncThunk<Contract[], void, { rejectValue: string }>(
  'contracts/fetchContracts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/getAllContrat`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch all contracts');
    }
  }
);

// Fetch contract by ID (with ID passed explicitly)
export const fetchContractsById = createAsyncThunk<Contract[], string, { rejectValue: string }>(
  'contracts/fetchContractsById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/getContratById/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch contract by ID');
    }
  }
);

const initialState: ContractState = {
  contracts: [],
  loading: false,
  error: null,
  currentRequest: null,
};

const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    setContractsManually: (state, action: PayloadAction<Contract[]>) => {
      state.contracts = action.payload;
      state.error = null;
      state.loading = false;
      state.currentRequest = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContracts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentRequest = 'all';
      })
      .addCase(fetchContracts.fulfilled, (state, action: PayloadAction<Contract[]>) => {
        state.loading = false;
        state.contracts = action.payload;
        state.currentRequest = null;
      })
      .addCase(fetchContracts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch contracts';
        state.currentRequest = null;
      })
      .addCase(fetchContractsById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentRequest = 'byId';
      })
      .addCase(fetchContractsById.fulfilled, (state, action: PayloadAction<Contract[]>) => {
        state.loading = false;
        state.contracts = action.payload;
        state.currentRequest = null;
      })
      .addCase(fetchContractsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch contract by ID';
        state.currentRequest = null;
      });
  },
});

export const { setContractsManually } = contractsSlice.actions;

export const selectContracts = (state: RootState) => state.contracts.contracts;
export const selectContractsLoading = (state: RootState) => state.contracts.loading;
export const selectContractsError = (state: RootState) => state.contracts.error;
export const selectContractsRequestType = (state: RootState) => state.contracts.currentRequest;

export default contractsSlice.reducer;
