import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { searchCitiesReducer } from "./searchCitiesReducer";

const RootReducer = combineReducers({
  searchCities: searchCitiesReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof RootReducer>;
