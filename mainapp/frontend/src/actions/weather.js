import * as weatherConstants from './../constants/weather';

/** refesh weather list api */
export const refeshWeather = (params={}) => {
    return {
        type: weatherConstants.REFESH_WEATHER,
        payload:{
            params,
        }
    };
};
export const refeshWeatherFailed = error => {
    return {
        type: weatherConstants.REFESH_WEATHER_FAILED,
        payload: {
            error,
        }
    };
};
export const refeshWeatherSuccess = data => {
    return {
        type: weatherConstants.REFESH_WEATHER_SUCCESS,
        payload: {
            data,
        }
    };
};
