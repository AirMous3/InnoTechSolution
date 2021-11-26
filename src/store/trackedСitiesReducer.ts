import { Dispatch } from "redux";
import { api } from "../api/api";

const initState: InitStateType = [];
export const trackedCitesReducer = (
  state = initState,
  action: ActionTypes
): InitStateType => {
  switch (action.type) {
    case "TRACKED_CITIES/ADD-CITY":
      return [action.city, ...state];
    case "TRACKED_CITIES/SET-CITIES-FROM-LS":
      return action.cities;
    case "TRACKED_CITIES/REMOVE-CITY":
      return state.filter((c) => c.location.name !== action.cityName);
    default:
      return state;
  }
};
//AC
export const addCity = (city: oneCityPreview) =>
  ({ type: "TRACKED_CITIES/ADD-CITY", city } as const);
export const setCitiesFromLS = (cities: oneCityPreview[]) =>
  ({ type: "TRACKED_CITIES/SET-CITIES-FROM-LS", cities } as const);
export const removeCity = (cityName: string) =>
  ({ type: "TRACKED_CITIES/REMOVE-CITY", cityName } as const);

// THUNK
export const getCityThunk =
  (cityName: string) => async (dispatch: Dispatch) => {
    const res = await api.getCityWeather(cityName);
    dispatch(addCity(res.data));
  };

/// TYPES
type oneCityPreview = {
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
type InitStateType = oneCityPreview[];
type ActionTypes =
  | ReturnType<typeof addCity>
  | ReturnType<typeof setCitiesFromLS>
  | ReturnType<typeof removeCity>;
