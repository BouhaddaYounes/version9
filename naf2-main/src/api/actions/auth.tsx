import { NavigateFunction } from 'react-router-dom';
import { Dispatch } from 'redux';
import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

interface FormData {
  email: string;
  password: string;
  [key: string]: any;
}

export const signin = (formData: FormData, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
  try {
    const data = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate('/home');
  } catch (error) {
    console.log(error);
    alert('mot de pass incorrect ou nom utisateur incorrect');
  }
};
