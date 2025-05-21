import * as actionType from '../constants/actionTypes';

interface AuthState {
  Auth: any[];
  loading?: boolean;
  errors?: null | string;
}

interface AuthAction {
  type: string;
  data?: any;
}

const initialState: AuthState = {
  Auth: [],
  loading: false,
  errors: null
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { 
        ...state, 
        Auth: action.data,
        loading: true, 
        errors: null 
      };

    case actionType.LOGOUT:
      localStorage.clear();
      return { 
        ...state,
        Auth: [], 
        loading: false, 
        errors: null 
      };

    default:
      return state;
  }
};

export default authReducer;
