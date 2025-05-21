import { Dispatch } from 'redux';
import { 
  START_LOADING, 
  END_LOADING, 
  FET_TEMP_CRD,
  POINTAGE,
  auto 
} from '../constants/actionTypes';
import * as api from '../api/index';

export const pointage = (id: string) => async (dispatch: Dispatch) => {
  console.log(id);
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.pointage(id);
    console.log(data);
    dispatch({ type: FET_TEMP_CRD, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const pointageM = (id: string) => async (dispatch: Dispatch) => {
  console.log(id);
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.pointageM(id);
    console.log(data);
    dispatch({ type: POINTAGE, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const autorisation = (id: string) => async (dispatch: Dispatch) => {
  console.log(id);
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.autorisation(id);
    console.log(data);
    dispatch({ type: auto, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
