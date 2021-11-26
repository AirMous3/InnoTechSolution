import React from "react";
import { WeatherCard } from "./Components/WeatherCard/WeatherCard";
import s from "./App.module.css";
import { EditableSelect } from "./Components/Select/Select";

export const App = () => {
  return (
    <div className={s.main}>
      <div style={{ margin: "0 auto" }}>
        <EditableSelect />
      </div>

      <WeatherCard />
    </div>
  );
};
