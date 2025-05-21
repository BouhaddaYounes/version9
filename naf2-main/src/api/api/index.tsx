    import axios, { AxiosInstance } from 'axios';

const API: AxiosInstance = axios.create({ 
  baseURL: 'http://localhost:5001'
});

API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile');
  if (profile) {
    const parsedProfile = JSON.parse(profile);
    req.headers.Authorization = `Bearer ${parsedProfile.data.token}`;
  }
  return req;
});

interface ApiResponse<T> {
  data: T;
}

// Admin endpoints
export const admindata = (): Promise<ApiResponse<any>> => API.get('/api/admindata');

// Station endpoints
export const getAllStations = (): Promise<ApiResponse<any>> => API.get('/api/stations');
export const createStation = (stationData: any): Promise<ApiResponse<any>> => API.post('/api/stations', stationData);
export const updateStation = (code: string, stationData: any): Promise<ApiResponse<any>> => 
  API.put(`/api/stations/${code}`, stationData);

// Pointage endpoints
export const pointage = (id: string): Promise<ApiResponse<any>> => API.get(`/api/pointage/${id}`);
export const pointageM = (id: string): Promise<ApiResponse<any>> => API.get(`/api/pointageM/${id}`);
export const autorisation = (id: string): Promise<ApiResponse<any>> => API.get(`/api/autorisation/${id}`);

interface SignInFormData {
  email: string;
  password: string;
}

export const signIn = (formData: SignInFormData): Promise<ApiResponse<any>> => 
  API.post('/user/signin', formData);
