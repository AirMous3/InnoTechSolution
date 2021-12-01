import axios from 'axios';

export const api = {
  getCities(cityName: string) {
    return axios.get<ResponseCitiesType[]>(
      `http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_MY_API_KEY}&q=${cityName}`,
    );
  },
  getCityWeather(cityName: string) {
    return axios.get<ResponseCityType>(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_MY_API_KEY}&q=${cityName}`,
    );
  },
};

export type ResponseCitiesType = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};
export type ResponseCityType = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    condition: {
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    humidity: number;
    uv: number;
  };
};
