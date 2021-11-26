import React from "react";
import { WeatherCard } from "./Components/WeatherCard/WeatherCard";
import s from "./App.module.css";
import { EditableSelect } from "./Components/Select/Select";
import { useSelector } from "react-redux";
import { AppRootStateType } from "./store/store";

export const App = () => {
  const findedCities = useSelector(
    (state: AppRootStateType) => state.searchCities
  );
  return (
    <div className={s.main}>
      <div style={{ margin: "0 auto" }}>
        <EditableSelect cities={findedCities} />
      </div>

      <WeatherCard />
    </div>
  );
};
