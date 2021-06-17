import {combineReducers} from 'redux';
import alarmReducer from './alarm';
import uiReducer from './ui';
import modalReducer from './modal';
import authReducer from './auths';
import deviceReducer from './devices';
import weatherReducer from './weather';
import analyticsReducer from './analytics';
import priceReducer from './prices';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    alarm:alarmReducer,
    ui:uiReducer,
    modal:modalReducer,
    form: formReducer,
    auth:authReducer,
    prices:priceReducer,
    devices:deviceReducer,
    weather:weatherReducer,
    analytics:analyticsReducer,
});
export default rootReducer;