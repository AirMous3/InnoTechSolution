import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { searchCitiesReducer } from './searchCitiesReducer';
import { trackedCitesReducer } from './trackedСitiesReducer';

const RootReducer = combineReducers({
  searchCities: searchCitiesReducer,
  trackedCities: trackedCitesReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof RootReducer>;
