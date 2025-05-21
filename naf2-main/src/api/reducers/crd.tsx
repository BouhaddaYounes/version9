import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

interface CRD {
  _id: string;
  [key: string]: any;
}

interface CRDState {
  isLoading: boolean;
  crds: CRD[];
  crd?: CRD;
}

interface CRDAction {
  type: string;
  payload?: any;
}

const initialState: CRDState = {
  isLoading: true,
  crds: []
};

const crdReducer = (state: CRDState = initialState, action: CRDAction): CRDState => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        crds: action.payload.data,
      };
    case FETCH_POST:
      return { 
        ...state, 
        crd: action.payload.data 
      };
    case CREATE:
      return { 
        ...state, 
        crds: [...state.crds, action.payload] 
      };
    case UPDATE:
      return { 
        ...state,
        crds: state.crds.map((crd) => 
          crd._id === action.payload._id ? action.payload : crd
        )
      };
    case DELETE:
      return { 
        ...state, 
        crds: state.crds.filter((crd) => crd._id !== action.payload) 
      };
    default:
      return state;
  }
};

export default crdReducer;
