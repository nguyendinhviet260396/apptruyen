import * as types from './../constants/weather';
import moment from 'moment';

const inittialState = {
  listWeather: [],
};

const reducer = (state = inittialState, action) => {
  switch (action.type) {
    case types.REFESH_WEATHER: {
      return {
        ...state,
      };
    }
    case types.REFESH_WEATHER_SUCCESS: {
      const { data } = action.payload;
      const new_data = [
        {
          name: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          humi: data.main.humidity,
          wind_speed: data.wind.speed,
          sunrise: moment.unix(data.sys.sunrise).format('HH:MM:SS'),
          sunset: moment.unix(data.sys.sunset).format('HH:MM:SS'),
          description: data.weather[0].main,
        },
      ];
      return {
        ...state,
        listWeather: new_data,
      };
    }
    case types.REFESH_WEATHER_FAILED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default reducer;
