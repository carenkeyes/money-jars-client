import * as actionTypes from '../actions/index.actions';


const initialState = {
  isFetchingUserInfo: false,
  hasUserInfo: false,
  isFetchingGarden: false,
  isCreatngPlant: false,
  isDeletingPlant: false
}


export default function appState(state = initialState, action) {
  switch (action.type) {
    //Fetch user info
    case actionTypes.FETCH_USER_INFO_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingUserInfo: true,
      };
    }
    case actionTypes.FETCH_USER_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        hasUserInfo: true,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }
    case actionTypes.FETCH_USER_INFO_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }

    //Fetch garden
    case actionTypes.FETCH_GARDEN_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingGarden: true
      };
    }
    case actionTypes.FETCH_GARDEN_REQUEST_SUCCESS:
    case actionTypes.FETCH_GARDEN_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingGarden: initialState.isFetchingGarden
      };
    }

    //Create plant
    case actionTypes.CREATE_PLANT_REQUEST_TRIGGERED: {
      return {
        ...state,
        isCreatngPlant: initialState.isCreatngPlant
      }
    }
    case actionTypes.CREATE_PLANT_REQUEST_SUCCESS:
    case actionTypes.CREATE_PLANT_REQUEST_FAILURE: {
      return {
        ...state,
        isCreatngPlant: initialState.isCreatngPlant
      };
    }

    //Delete plant
    case actionTypes.DELETE_PLANT_REQUEST_TRIGGERED: {
      return {
          ...state,
          isDeletingPlant: true
        }
    }
    case actionTypes.DELETE_PLANT_REQUEST_SUCCESS:
    case actionTypes.DELETE_PLANT_REQUEST_FAILURE: {
      return {
        ...state,
        isDeletingPlant: initialState.isDeletingPlant
      };
    }
    default: {
      return state;
    }
  }
}
