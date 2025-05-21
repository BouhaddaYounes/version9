import { combineReducers } from 'redux';
import auth from './auth';
import crds from './crd';

export interface RootState {
  auth: ReturnType<typeof auth>;
  crds: ReturnType<typeof crds>;
}

export const reducers = combineReducers({
  auth,
  crds,
});
