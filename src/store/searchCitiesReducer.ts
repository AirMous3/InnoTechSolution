import { Dispatch } from 'redux';

import { api } from '../api/api';

const initState: InitStateType = [];
export const searchCitiesReducer = (
  state = initState,
  action: ActionTypes,
): InitStateType => {
  switch (action.type) {
    case 'SEARCH-CITIES/SET-CITIES':
      return action.citiesList;
    default:
      return state;
  }
};
/// AC
export const setCities = (citiesList: oneCityPreview[]) =>
  ({ type: 'SEARCH-CITIES/SET-CITIES', citiesList } as const);

/// THUNK
export const getCities = (cityName: string) => async (dispatch: Dispatch) => {
  const res = await api.getCities(cityName);
  dispatch(setCities(res.data));
};
/// TYPES
type oneCityPreview = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};
type InitStateType = oneCityPreview[];
type ActionTypes = ReturnType<typeof setCities>;
