import * as types from './../constants/devices';

const initialState = {
  listSolar01: [],
  listSolar02: [],
  listFishLake: [],
  listHouseArea: [],
  listPowerSolar01: [],
  listPowerSolar02: [],
  listPowerFishLake: [],
  listPowerHouseArea: [],
  listMainLast: [],
  listMainEnegry: [],
  listMainEnegryHourly: [],
  listMainEnegryDayly: [],
  listMainEnegryWeekly: [],
  listMainEnegryMonthly: [],
  listCalculatorEnegry: [],
  listMainCalculatorEnegry: [],
  listHistory: [],
};
const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REFESH_MAIN_LAST: {
      return {
        ...state,
      };
    }
    case types.REFESH_MAIN_LAST_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listMainLast: data,
      };
    }
    case types.REFESH_MAIN_LAST_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_MAIN_ENEGRY: {
      return {
        ...state,
      };
    }
    case types.REFESH_MAIN_ENEGRY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listMainEnegry: data,
      };
    }
    case types.REFESH_MAIN_ENEGRY_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_MAIN_ENEGRY_HOURLY: {
      return {
        ...state,
      };
    }
    case types.REFESH_MAIN_ENEGRY_HOURLY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listMainEnegryHourly: data,
      };
    }
    case types.REFESH_MAIN_ENEGRY_HOURLY_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_MAIN_ENEGRY_DAYLY: {
      return {
        ...state,
      };
    }
    case types.REFESH_MAIN_ENEGRY_DAYLY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listMainEnegryDayly: data,
      };
    }
    case types.REFESH_MAIN_ENEGRY_DAYLY_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_MAIN_ENEGRY_WEEKLY: {
      return {
        ...state,
      };
    }
    case types.REFESH_MAIN_ENEGRY_WEEKLY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listMainEnegryWeekly: data,
      };
    }
    case types.REFESH_MAIN_ENEGRY_WEEKLY_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_MAIN_ENEGRY_MONTHLY: {
      return {
        ...state,
      };
    }
    case types.REFESH_MAIN_ENEGRY_MONTHLY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listMainEnegryMonthly: data,
      };
    }
    case types.REFESH_MAIN_ENEGRY_MONTHLY_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_HOUSE_AREA: {
      return {
        ...state,
      };
    }
    case types.REFESH_HOUSE_AREA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listHouseArea: data,
      };
    }
    case types.REFESH_HOUSE_AREA_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_POWER_HOUSE_AREA: {
      return {
        ...state,
      };
    }
    case types.REFESH_POWER_HOUSE_AREA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listPowerHouseArea: data,
      };
    }
    case types.REFESH_POWER_HOUSE_AREA_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_FISH_LAKE_AREA: {
      return {
        ...state,
      };
    }
    case types.REFESH_FISH_LAKE_AREA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listFishLake: data,
      };
    }
    case types.REFESH_FISH_LAKE_AREA_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_POWER_FISH_LAKE_AREA: {
      return {
        ...state,
      };
    }
    case types.REFESH_POWER_FISH_LAKE_AREA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listPowerFishLake: data,
      };
    }
    case types.REFESH_POWER_FISH_LAKE_AREA_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_SOLAR01_AREA: {
      return {
        ...state,
      };
    }
    case types.REFESH_SOLAR01_AREA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listSolar01: data,
      };
    }
    case types.REFESH_SOLAR01_AREA_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_POWER_SOLAR01_AREA: {
      return {
        ...state,
      };
    }
    case types.REFESH_POWER_SOLAR01_AREA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listPowerSolar01: data,
      };
    }
    case types.REFESH_POWER_SOLAR01_AREA_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_SOLAR02_AREA: {
      return {
        ...state,
      };
    }
    case types.REFESH_SOLAR02_AREA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listSolar02: data,
      };
    }
    case types.REFESH_SOLAR02_AREA_FAILED: {
      return {
        ...state,
      };
    }

    case types.REFESH_POWER_SOLAR02_AREA: {
      return {
        ...state,
      };
    }
    case types.REFESH_POWER_SOLAR02_AREA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listPowerSolar02: data,
      };
    }
    case types.REFESH_POWER_SOLAR02_AREA_FAILED: {
      return {
        ...state,
      };
    }
    case types.REFESH_CALCULATOR_ENEGRY: {
      return {
        ...state,
      };
    }
    case types.REFESH_CALCULATOR_ENEGRY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCalculatorEnegry: [data],
      };
    }
    case types.REFESH_CALCULATOR_ENEGRY_FAILED: {
      return {
        ...state,
      };
    }
    case types.REFESH_MAIN_CALCULATOR_ENEGRY: {
      return {
        ...state,
      };
    }
    case types.REFESH_MAIN_CALCULATOR_ENEGRY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listMainCalculatorEnegry: [data],
      };
    }
    case types.REFESH_MAIN_CALCULATOR_ENEGRY_FAILED: {
      return {
        ...state,
      };
    }
    case types.REFESH_HISTORY: {
      return {
        ...state,
      };
    }
    case types.REFESH_HISTORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listHistory: data,
      };
    }
    case types.REFESH_HISTORY_FAILED: {
      return {
        ...state,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
export default deviceReducer;
