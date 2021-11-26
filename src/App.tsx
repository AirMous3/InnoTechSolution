import React, { useEffect } from "react";
import { WeatherCard } from "./Components/WeatherCard/WeatherCard";
import s from "./App.module.css";
import { EditableSelect } from "./Components/Select/Select";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./store/store";
import {
  removeCity,
  setCitiesFromLS,
  updateCity,
} from "./store/trackedСitiesReducer";

export const App = () => {
  const dispatch = useDispatch();
  const findedCities = useSelector(
    (state: AppRootStateType) => state.searchCities
  );
  const trackedCities = useSelector(
    (state: AppRootStateType) => state.trackedCities
  );
  const handleDeleteCard = (cityName: string) => {
    dispatch(removeCity(cityName));
  };
  const handleUpdateCard = (cityName: string) => {
    dispatch(updateCity(cityName));
  };
  useEffect(() => {
    if (!localStorage.getItem("weather")) {
      dispatch(setCitiesFromLS([]));
    } else {
      dispatch(setCitiesFromLS(JSON.parse(localStorage.getItem("weather")!)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(trackedCities));
  }, [trackedCities]);

  return (
    <div className={s.main}>
      <div style={{ margin: "0 auto" }}>
        <EditableSelect cities={findedCities} />
      </div>
      <div className={s.cardWrapper}>
        {trackedCities.map((c, index) => (
          <WeatherCard
            key={index}
            temperature={c.current.temp_c}
            humidity={c.current.humidity}
            pressure={c.current.pressure_mb}
            windDeg={c.current.wind_degree}
            windSpeed={c.current.wind_kph}
            cityName={c.location.name}
            lastUpdate={c.current.last_updated}
            icon={c.current.condition.icon}
            onDeleteCard={handleDeleteCard}
            onUpdateCard={handleUpdateCard}
          />
        ))}
      </div>
    </div>
  );
};
