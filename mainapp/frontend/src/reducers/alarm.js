import * as types from './../constants/alarm';
const inittialState = {
  listAlarm: [],
  listEmailAlarm: [],
};

const reducer = (state = inittialState, action) => {
  switch (action.type) {
    case types.FETCH_ALARM: {
      return {
        ...state,
      };
    }
    case types.FETCH_ALARM_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listAlarm: data,
      };
    }
    case types.FETCH_ALARM_FAILED: {
      return {
        ...state,
      };
    }
    case types.ADD_EMAIL_ALARM: {
      return {
        ...state,
      };
    }
    case types.ADD_EMAIL_ALARM_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listAlarm: data,
      };
    }
    case types.ADD_EMAIL_ALARM_FAILED: {
      return {
        ...state,
      };
    }
    case types.REFESH_EMAIL_ALARM: {
      return {
        ...state,
      };
    }
    case types.REFESH_EMAIL_ALARM_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listEmailAlarm: data,
      };
    }
    case types.REFESH_EMAIL_ALARM_FAILED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default reducer;
