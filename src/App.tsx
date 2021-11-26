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
  const trackedCities = useSelector(
    (state: AppRootStateType) => state.trackedCities
  );
  return (
    <div className={s.main}>
      <div style={{ margin: "0 auto" }}>
        <EditableSelect cities={findedCities} />
      </div>
      <div>
        {trackedCities.map((c) => (
          <WeatherCard
            temperature={c.current.temp_c}
            humidity={c.current.humidity}
            pressure={c.current.pressure_mb}
            windDeg={c.current.wind_degree}
            windSpeed={c.current.wind_kph}
            cityName={c.location.name}
            lastUpdate={c.current.last_updated}
          />
        ))}
      </div>
    </div>
  );
};
