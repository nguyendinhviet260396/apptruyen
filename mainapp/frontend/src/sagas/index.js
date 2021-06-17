import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects'; //select to listTask from store
import * as alarmTypes from './../constants/alarm';
import * as weatherTypes from './../constants/weather';
import * as priceTypes from './../constants/prices';
import * as authTypes from './../constants/auths';
import * as deviceTypes from './../constants/devices';
import * as analyticsTypes from './../constants/analytics';
import {
  refeshWeatherSuccess,
  refeshWeatherFailed,
} from './../actions/weather';
import {
  refeshpriceFailed,
  refeshpriceSuccess,
  addpriceFailed,
  addpriceSuccess,
  filterPriceNewSuccess,
  filterPriceNewFailed,
} from './../actions/prices';
import {
  fetchListAnalyticsFailed,
  fetchListAnalyticsSuccess,
} from './../actions/analytics';
import { getListWeather } from './../apis/weather';
import { getListPrice, addPrice } from './../apis/prices';
import { getList, addList } from './../apis/alarm';
import { getListAnalytics } from './../apis/analytics';
import {
  getListUser,
  addUser,
  loginUser,
  deteleUser,
  updateUser,
} from './../apis/auth';

import {
  getListData,
  //updateData,
  //addData,
} from './../apis/devices';
import { STATUS_CODE } from './../constants/index';
import { showLoading, hideLoading } from './../actions/ui';
import { hideModal } from './../actions/modal';
import {
  fetchListAlarm,
  fetchListAlarmSuccess,
  fetchListAlarmFailed,
  refeshListEmailAlarmSuccess,
  refeshListEmailAlarmFailed,
  addListEmailAlarmFailed,
  addListEmailAlarmSuccess,
} from './../actions/alarm';
import {
  authSignupSuccess,
  authSignupFaild,
  authLoginSuccess,
  authLoginFaild,
  authLogHistorySuccess,
  authLogHistoryFaild,
  fetchListUserFailed,
  fetchListUserSuccess,
  setUserDeleteSucces,
  setUserDeleteFaild,
  updateUserSuccess,
  updateUserFailed,
  authLogDeleteHistoryFaild,
  authLogDeleteHistorySuccess,
} from './../actions/auths';
import {
  refeshSolar01Failed,
  refeshSolar01Success,
  refeshPowerSolar01Failed,
  refeshPowerSolar01Success,
  refeshSolar02Success,
  refeshSolar02Failed,
  refeshPowerSolar02Failed,
  refeshPowerSolar02Success,
  refeshMainLastSuccess,
  refeshMainLastFailed,
  refeshMainEnegrySuccess,
  refeshMainEnegryFailed,
  refeshMainEnegryHourlySuccess,
  refeshMainEnegryHourlyFailed,
  refeshMainEnegryDaylySuccess,
  refeshMainEnegryDaylyFailed,
  refeshMainEnegryWeeklySuccess,
  refeshMainEnegryWeeklyFailed,
  refeshMainEnegryMonthlySuccess,
  refeshMainEnegryMonthlyFailed,
  refeshFishLakeAreaSuccess,
  refeshFishLakeAreaFailed,
  refeshPowerFishLakeAreaSuccess,
  refeshPowerFishLakeAreaFailed,
  refeshHouseAreaSuccess,
  refeshHouseAreaFailed,
  refeshPowerHouseAreaSuccess,
  refeshPowerHouseAreaFailed,
  refeshCalculatorEnegrySuccess,
  refeshCalculatorEnegryFailed,
  refeshMainCalculatorEnegrySuccess,
  refeshMainCalculatorEnegryFailed,
} from '../actions/devices';
/**
 * B1: dispatch action fetchTask
 * B2:Call animationPlayState:
 * B3:Kiểm tra status_code
 * Nếu thành công thì thực thi ...
 * Nếu thất bại thì thực thi gì đó....button-big
 * B4:Tắt Loadding
 * B5:thực thi công việc tiếp theo...
 */
function* watchFetchListAlarmAction() {
  while (true) {
    const action = yield take(alarmTypes.FETCH_ALARM);
    yield put(showLoading());
    const { params } = action.payload;
    console.log(params);
    const resp = yield call(getList, 'api/v1/alarm', '');
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListAlarmSuccess(data));
    } else {
      yield put(fetchListAlarmFailed(data));
    }
    yield delay(100);
    yield put(hideLoading());
  }
}
//  Refesh list email alarm
function* refeshListEmailAlarmAction() {
  yield put(showLoading());
  const resp = yield call(getList, 'api/v1/emailalarm', '');
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(refeshListEmailAlarmSuccess(data));
  } else {
    yield put(refeshListEmailAlarmFailed(data));
  }
  yield delay(100);
  yield put(hideLoading());
}
// add list email alarm
function* addeEmailAlarm({ payload }) {
  yield put(showLoading());
  const { params } = payload;
  const resp = yield call(addList, 'api/v1/emailalarm/add', params);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(addListEmailAlarmSuccess(data));
  } else {
    yield put(addListEmailAlarmFailed(data));
  }
  yield delay(100);
  yield put(hideLoading());
}
// fiter alarm
function* filterAlarmSaga({ payload }) {
  yield delay(100);
  const { keyword } = payload;
  yield put(fetchListAlarm(keyword));
}

function* refeshListPriceAction() {
  yield put(showLoading());
  const resp = yield call(getListPrice, 'api/v1/price', '');
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(refeshpriceSuccess(data));
  } else {
    yield put(refeshpriceFailed(data));
  }
  yield delay(100);
  yield put(hideLoading());
}

function* addListPrice({ payload }) {
  yield put(showLoading());
  const { params } = payload;
  const resp = yield call(addPrice, 'api/v1/price/add', params);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(addpriceSuccess(data));
  } else {
    yield put(addpriceFailed(data));
  }
  yield delay(100);
  yield put(hideLoading());
}
function* fiterPriceNew({ payload }) {
  const { params } = payload;
  const resp = yield call(getListPrice, 'api/v1/price/getlast', params);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(filterPriceNewSuccess(data));
  } else {
    yield put(filterPriceNewFailed(data));
  }
  yield delay(100);
}

function* loginSaga({ payload }) {
  const { email, password } = payload;
  yield put(showLoading());
  const resp = yield call(loginUser, 'api/v1/users/login', { email, password });
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS && data.state === 'true') {
    yield put(authLoginSuccess(data));
  } else if (status === STATUS_CODE.SUCCESS && data.state === 'false') {
    yield put(authLoginFaild(data.error));
  }
  yield delay(200);
  yield put(hideLoading());
}
function* signupSaga({ payload }) {
  const { name, email, password, operator } = payload;
  yield put(showLoading());
  const resp = yield call(addUser, 'api/v1/users/add', {
    name,
    email,
    password,
    operator,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    const resp = yield call(getListUser, 'api/v1/users/', '');
    const { status, data } = resp;
    yield delay(100);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(authSignupSuccess(data));
      yield put(hideModal());
    }
  } else {
    yield put(authSignupFaild(data));
  }
  yield delay(100);
  yield put(hideLoading());
}
function* updateUserSaga({ payload }) {
  const { name, email, password, operator } = payload;
  const userEditting = yield select(state => state.auth.userEditting);
  const { id } = userEditting;
  yield put(showLoading());
  const resp = yield call(updateUser, 'api/v1/users/update', {
    id,
    name,
    email,
    password,
    operator,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.UPDATED) {
    const resp = yield call(getListUser, 'api/v1/users', '');
    const { status, data } = resp;
    yield delay(100);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(updateUserSuccess(data));
      yield put(hideModal());
    }
  } else {
    yield put(updateUserFailed(data));
  }
  yield delay(100);
  yield put(hideLoading());
}
function* watchFetchListUserAction() {
  while (true) {
    const action = yield take(authTypes.FETCH_USER); // khi FETCH_TASK duoc dispatch thi code tu day tro xuong moi chay
    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getListUser, 'api/v1/users', params);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListUserSuccess(data));
    } else {
      yield put(fetchListUserFailed(data));
    }
    yield delay(50);
    yield put(hideLoading());
  }
}
function* watchFetchListUserLogAction() {
  while (true) {
    const action = yield take(authTypes.AUTH_HISTORY); // khi FETCH_TASK duoc dispatch thi code tu day tro xuong moi chay
    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getListUser, 'api/v1/userlog', params);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(authLogHistorySuccess(data));
    } else {
      yield put(authLogHistoryFaild(data));
    }
    yield delay(50);
    yield put(hideLoading());
  }
}
function* deleteUserSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const reps = yield call(deteleUser, 'api/v1/users', id);
  const { data, status } = reps;
  if (status === STATUS_CODE.NO_CONTENT) {
    const resp = yield call(getListUser, 'api/v1/users', '');
    const { status, data } = resp;
    yield delay(100);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(setUserDeleteSucces(data));
      yield put(hideModal());
    }
  } else {
    yield put(setUserDeleteFaild(data));
  }
  yield delay(100);
  yield put(hideLoading());
}

function* deleteUserlogSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const reps = yield call(deteleUser, 'api/v1/userlog', id);
  const { data, status } = reps;
  if (status === STATUS_CODE.NO_CONTENT) {
    const resp = yield call(getListUser, 'api/v1/userlog', '');
    const { status, data } = resp;
    yield delay(100);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(authLogDeleteHistorySuccess(data));
      yield put(hideModal());
    }
  } else {
    yield put(authLogDeleteHistoryFaild(data));
  }
  yield delay(100);
  yield put(hideLoading());
}

// analytics saga

function* analyticsSaga({ payload }) {
  const { params } = payload;
  yield put(showLoading());
  const resp = yield call(getListAnalytics, 'api/v1/main/analytics', params);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(fetchListAnalyticsSuccess(data));
  } else {
    yield put(fetchListAnalyticsFailed(data));
  }
  yield delay(100);
  yield put(hideLoading());
}
// refesh data weather
function* refeshWeatherSaga({ payload }) {
  const { params } = payload;
  const resp = yield call(getListWeather, params);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshWeatherSuccess(data));
  } else {
    yield put(refeshWeatherFailed(data));
  }
}

// refesh data leak
function* refeshHouseArea() {
  const resp = yield call(getListData, 'api/v1/spm93/getlast', '');
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshHouseAreaSuccess(data));
  } else {
    yield put(refeshHouseAreaFailed(data));
  }
}
function* refeshPowerHouseArea() {
  const resp = yield call(getListData, 'api/v1/spm93/getlast5min', '');
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshPowerHouseAreaSuccess(data));
  } else {
    yield put(refeshPowerHouseAreaFailed(data));
  }
}
// refesh data leak
function* refeshfishLakeArea({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/spm91/getlast', { params });
  const { status, data } = resp;

  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshFishLakeAreaSuccess(data));
  } else {
    yield put(refeshFishLakeAreaFailed(data));
  }
}
// refesh data leak
function* refeshPowerfishLakeArea({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/spm91/getlast5min', { params });
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshPowerFishLakeAreaSuccess(data));
  } else {
    yield put(refeshPowerFishLakeAreaFailed(data));
  }
}
// refesh data leak
function* refeshSolar01Area({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/spm91/getlast', { params });
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshSolar01Success(data));
  } else {
    yield put(refeshSolar01Failed(data));
  }
}
// refesh data leak
function* refeshPowerSolar01Area({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/spm91/getlast5min', { params });
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshPowerSolar01Success(data));
  } else {
    yield put(refeshPowerSolar01Failed(data));
  }
}
// refesh data leak
function* refeshSolar02Area({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/spm91/getlast', { params });
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshSolar02Success(data));
  } else {
    yield put(refeshSolar02Failed(data));
  }
}
// refesh data leak
function* refeshPowerSolar02Area({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/spm91/getlast5min', { params });
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshPowerSolar02Success(data));
  } else {
    yield put(refeshPowerSolar02Failed(data));
  }
}

// refesh data main last
function* refeshMainLastSaga({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/sdm220/getlast', { params});
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshMainLastSuccess(data));
  } else {
    yield put(refeshMainLastFailed(data));
  }
}
// refesh data main min
function* refeshMainEnegrySaga({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/sdm220/getlast5min', { params});
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshMainEnegrySuccess(data));
  } else {
    yield put(refeshMainEnegryFailed(data));
  }
}
// refesh data main min
function* refeshMainEnegryDaylySaga({ payload }) {
  const resp = yield call(getListData, 'api/v1/main/getlastenegrybytoday', '');
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshMainEnegryDaylySuccess(data));
  } else {
    yield put(refeshMainEnegryDaylyFailed(data));
  }
}
// refesh data main min
function* refeshMainEnegryHourlySaga({ payload }) {
  const resp = yield call(getListData, 'api/v1/main/getlastenegrybyhour', '');
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshMainEnegryHourlySuccess(data));
  } else {
    yield put(refeshMainEnegryHourlyFailed(data));
  }
}
// refesh data main min
function* refeshMainEnegryWeeklySaga({ payload }) {
  const resp = yield call(getListData, 'api/v1/main/getlastenegrybyweek', '');
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshMainEnegryWeeklySuccess(data));
  } else {
    yield put(refeshMainEnegryWeeklyFailed(data));
  }
}

// refesh data main min
function* refeshMainEnegryMonthlySaga({ payload }) {
  const resp = yield call(getListData, 'api/v1/main/getlastenegrybymothly', '');
  const { status, data } = resp;
  console.log(data);
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshMainEnegryMonthlySuccess(data));
  } else {
    yield put(refeshMainEnegryMonthlyFailed(data));
  }
}
// refesh enegry calculator spm91
function* refeshenegrycalculator({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/sdm220/getcaculatorenegry', {
    params,
  });
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshCalculatorEnegrySuccess(data));
  } else {
    yield put(refeshCalculatorEnegryFailed(data));
  }
}

// refesh enegry calculator main
function* refeshmainenegrycalculator({ payload }) {
  const { params } = payload;
  const resp = yield call(getListData, 'api/v1/sdm220/getcaculatorenegry', {
    params,
  });
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS && data.lenght !== 0) {
    yield put(refeshMainCalculatorEnegrySuccess(data));
  } else {
    yield put(refeshMainCalculatorEnegryFailed(data));
  }
}
function* rootSaga() {
  yield fork(watchFetchListAlarmAction);
  yield fork(watchFetchListUserLogAction);
  yield fork(watchFetchListUserAction);
  yield takeLatest(alarmTypes.REFESH_EMAIL_ALARM, refeshListEmailAlarmAction);
  yield takeLatest(alarmTypes.ADD_EMAIL_ALARM, addeEmailAlarm);
  yield takeLatest(priceTypes.REFESH_PRICE, refeshListPriceAction);
  yield takeLatest(priceTypes.ADD_PRICE, addListPrice);
  yield takeLatest(priceTypes.FILTER_FRICE_NEW, fiterPriceNew);
  yield takeLatest(alarmTypes.FILTER_ALARM, filterAlarmSaga);
  yield takeLatest(authTypes.AUTH_LOGIN, loginSaga);
  yield takeLatest(authTypes.AUTH_SIGNUP, signupSaga);
  yield takeLatest(authTypes.SET_USER_DELETE, deleteUserSaga);
  yield takeLatest(authTypes.AUTH_DELETE_HISTORY, deleteUserlogSaga);
  yield takeLatest(authTypes.UPDATE_USER, updateUserSaga);
  yield takeLatest(analyticsTypes.ANALYTICS, analyticsSaga);
  yield takeLatest(deviceTypes.REFESH_MAIN_LAST, refeshMainLastSaga);
  yield takeLatest(deviceTypes.REFESH_MAIN_ENEGRY, refeshMainEnegrySaga);
  yield takeLatest(deviceTypes.REFESH_MAIN_ENEGRY_DAYLY,refeshMainEnegryDaylySaga);
  yield takeLatest(deviceTypes.REFESH_MAIN_ENEGRY_HOURLY,refeshMainEnegryHourlySaga);
  yield takeLatest(deviceTypes.REFESH_MAIN_ENEGRY_WEEKLY,refeshMainEnegryWeeklySaga);
  yield takeLatest(deviceTypes.REFESH_MAIN_ENEGRY_MONTHLY,refeshMainEnegryMonthlySaga);
  yield takeLatest(deviceTypes.REFESH_HOUSE_AREA, refeshHouseArea);
  yield takeLatest(deviceTypes.REFESH_POWER_HOUSE_AREA, refeshPowerHouseArea);
  yield takeLatest(deviceTypes.REFESH_FISH_LAKE_AREA, refeshfishLakeArea);
  yield takeLatest(deviceTypes.REFESH_POWER_FISH_LAKE_AREA,refeshPowerfishLakeArea);
  yield takeLatest(deviceTypes.REFESH_SOLAR01_AREA, refeshSolar01Area);
  yield takeLatest(deviceTypes.REFESH_POWER_SOLAR01_AREA,refeshPowerSolar01Area);
  yield takeLatest(deviceTypes.REFESH_SOLAR02_AREA, refeshSolar02Area);
  yield takeLatest(deviceTypes.REFESH_POWER_SOLAR02_AREA,refeshPowerSolar02Area);
  yield takeLatest(weatherTypes.REFESH_WEATHER, refeshWeatherSaga);
  yield takeLatest(deviceTypes.REFESH_CALCULATOR_ENEGRY,refeshenegrycalculator);
  yield takeLatest(deviceTypes.REFESH_MAIN_CALCULATOR_ENEGRY,refeshmainenegrycalculator);
}

export default rootSaga;
