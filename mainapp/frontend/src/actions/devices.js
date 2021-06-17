import * as deviceTypes from './../constants/devices';
// Action request main last
export const refeshMainLast = (params = {}) => ({
  type: deviceTypes.REFESH_MAIN_LAST,
  payload: {
    params,
  },
});

export const refeshMainLastSuccess = data => ({
  type: deviceTypes.REFESH_MAIN_LAST_SUCCESS,
  payload: {
    data,
  },
});

export const refeshMainLastFailed = error => ({
  type: deviceTypes.REFESH_MAIN_LAST_FAILED,
  payload: {
    error,
  },
});

// Action request main hourly
export const refeshMainEnegryHourly = (params = {}) => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_HOURLY,
  payload: {
    params,
  },
});

export const refeshMainEnegryHourlySuccess = data => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_HOURLY_SUCCESS,
  payload: {
    data,
  },
});

export const refeshMainEnegryHourlyFailed = error => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_HOURLY_FAILED,
  payload: {
    error,
  },
});
// Action request main dayly
export const refeshMainEnegryDayly = (params = {}) => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_DAYLY,
  payload: {
    params,
  },
});

export const refeshMainEnegryDaylySuccess = data => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_DAYLY_SUCCESS,
  payload: {
    data,
  },
});

export const refeshMainEnegryDaylyFailed = error => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_DAYLY_FAILED,
  payload: {
    error,
  },
});

// Action request main weekly
export const refeshMainEnegryWeekly = (params = {}) => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_WEEKLY,
  payload: {
    params,
  },
});

export const refeshMainEnegryWeeklySuccess = data => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_WEEKLY_SUCCESS,
  payload: {
    data,
  },
});

export const refeshMainEnegryWeeklyFailed = error => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_WEEKLY_FAILED,
  payload: {
    error,
  },
});

// Action request main mothly
export const refeshMainEnegryMonthly = (params = {}) => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_MONTHLY,
  payload: {
    params,
  },
});

export const refeshMainEnegryMonthlySuccess = data => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_MONTHLY_SUCCESS,
  payload: {
    data,
  },
});

export const refeshMainEnegryMonthlyFailed = error => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_MONTHLY_FAILED,
  payload: {
    error,
  },
});

// Action request main 5 min
export const refeshMainEnegry = (params = {}) => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY,
  payload: {
    params,
  },
});

export const refeshMainEnegrySuccess = data => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_SUCCESS,
  payload: {
    data,
  },
});

export const refeshMainEnegryFailed = error => ({
  type: deviceTypes.REFESH_MAIN_ENEGRY_FAILED,
  payload: {
    error,
  },
});

// Action request house area
export const refeshHouseArea = (params = {}) => ({
  type: deviceTypes.REFESH_HOUSE_AREA,
  payload: {
    params,
  },
});

export const refeshHouseAreaSuccess = data => ({
  type: deviceTypes.REFESH_HOUSE_AREA_SUCCESS,
  payload: {
    data,
  },
});

export const refeshHouseAreaFailed = error => ({
  type: deviceTypes.REFESH_HOUSE_AREA_FAILED,
  payload: {
    error,
  },
});

// Action request house area
export const refeshPowerHouseArea = (params = {}) => ({
  type: deviceTypes.REFESH_POWER_HOUSE_AREA,
  payload: {
    params,
  },
});

export const refeshPowerHouseAreaSuccess = data => ({
  type: deviceTypes.REFESH_POWER_HOUSE_AREA_SUCCESS,
  payload: {
    data,
  },
});

export const refeshPowerHouseAreaFailed = error => ({
  type: deviceTypes.REFESH_POWER_HOUSE_AREA_FAILED,
  payload: {
    error,
  },
});

// Action request fish lake area
export const refeshFishLakeArea = (params = {}) => ({
  type: deviceTypes.REFESH_FISH_LAKE_AREA,
  payload: {
    params,
  },
});

export const refeshFishLakeAreaSuccess = data => ({
  type: deviceTypes.REFESH_FISH_LAKE_AREA_SUCCESS,
  payload: {
    data,
  },
});

export const refeshFishLakeAreaFailed = error => ({
  type: deviceTypes.REFESH_FISH_LAKE_AREA_FAILED,
  payload: {
    error,
  },
});
// Action request fish lake area
export const refeshPowerFishLakeArea = (params = {}) => ({
  type: deviceTypes.REFESH_POWER_FISH_LAKE_AREA,
  payload: {
    params,
  },
});

export const refeshPowerFishLakeAreaSuccess = data => ({
  type: deviceTypes.REFESH_POWER_FISH_LAKE_AREA_SUCCESS,
  payload: {
    data,
  },
});

export const refeshPowerFishLakeAreaFailed = error => ({
  type: deviceTypes.REFESH_POWER_FISH_LAKE_AREA_FAILED,
  payload: {
    error,
  },
});

// Action request power solar01 area
export const refeshSolar01 = (params = {}) => ({
  type: deviceTypes.REFESH_SOLAR01_AREA,
  payload: {
    params,
  },
});

export const refeshSolar01Success = data => ({
  type: deviceTypes.REFESH_SOLAR01_AREA_SUCCESS,
  payload: {
    data,
  },
});

export const refeshSolar01Failed = error => ({
  type: deviceTypes.REFESH_SOLAR01_AREA_FAILED,
  payload: {
    error,
  },
});
// Action request solar02 area
export const refeshPowerSolar01 = (params = {}) => ({
  type: deviceTypes.REFESH_POWER_SOLAR01_AREA,
  payload: {
    params,
  },
});

export const refeshPowerSolar01Success = data => ({
  type: deviceTypes.REFESH_POWER_SOLAR01_AREA_SUCCESS,
  payload: {
    data,
  },
});

export const refeshPowerSolar01Failed = error => ({
  type: deviceTypes.REFESH_POWER_SOLAR01_AREA_FAILED,
  payload: {
    error,
  },
});

// Action request solar02 area
export const refeshSolar02 = (params = {}) => ({
  type: deviceTypes.REFESH_SOLAR02_AREA,
  payload: {
    params,
  },
});

export const refeshSolar02Success = data => ({
  type: deviceTypes.REFESH_SOLAR02_AREA_SUCCESS,
  payload: {
    data,
  },
});

export const refeshSolar02Failed = error => ({
  type: deviceTypes.REFESH_SOLAR02_AREA_FAILED,
  payload: {
    error,
  },
});

// Action request power solar02 area
export const refeshPowerSolar02 = (params = {}) => ({
  type: deviceTypes.REFESH_POWER_SOLAR02_AREA,
  payload: {
    params,
  },
});

export const refeshPowerSolar02Success = data => ({
  type: deviceTypes.REFESH_POWER_SOLAR02_AREA_SUCCESS,
  payload: {
    data,
  },
});

export const refeshPowerSolar02Failed = error => ({
  type: deviceTypes.REFESH_POWER_SOLAR02_AREA_FAILED,
  payload: {
    error,
  },
});

// Action request calculator enegry
export const refeshCalculatorEnegry = (params = {}) => ({
  type: deviceTypes.REFESH_CALCULATOR_ENEGRY,
  payload: {
    params,
  },
});

export const refeshCalculatorEnegrySuccess = data => ({
  type: deviceTypes.REFESH_CALCULATOR_ENEGRY_SUCCESS,
  payload: {
    data,
  },
});

export const refeshCalculatorEnegryFailed = error => ({
  type: deviceTypes.REFESH_CALCULATOR_ENEGRY_FAILED,
  payload: {
    error,
  },
});

// Action request calculator enegry
export const refeshMainCalculatorEnegry = (params = {}) => ({
  type: deviceTypes.REFESH_MAIN_CALCULATOR_ENEGRY,
  payload: {
    params,
  },
});

export const refeshMainCalculatorEnegrySuccess = data => ({
  type: deviceTypes.REFESH_MAIN_CALCULATOR_ENEGRY_SUCCESS,
  payload: {
    data,
  },
});

export const refeshMainCalculatorEnegryFailed = error => ({
  type: deviceTypes.REFESH_MAIN_CALCULATOR_ENEGRY_FAILED,
  payload: {
    error,
  },
});
