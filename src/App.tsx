import React, { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import s from './App.module.css';
import { EditableSelect } from './components/select/Select';
import { WeatherCard } from './components/weatherCard/WeatherCard';
import { AppRootStateType } from './store/store';
import { removeCity, setCitiesFromLS, updateCity } from './store/trackedСitiesReducer';

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const searchCities = useSelector((state: AppRootStateType) => state.searchCities);
  const trackedCities = useSelector((state: AppRootStateType) => state.trackedCities);
  const handleDeleteCard = (cityName: string): void => {
    dispatch(removeCity(cityName));
  };
  const handleUpdateCard = (cityName: string): void => {
    dispatch(updateCity(cityName));
  };
  useEffect(() => {
    const weather = localStorage.getItem('weather');
    dispatch(setCitiesFromLS(weather ? JSON.parse(weather) : []));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('weather', JSON.stringify(trackedCities));
  }, [trackedCities]);

  return (
    <div className={s.main}>
      <div style={{ margin: '0 auto' }}>
        <EditableSelect cities={searchCities} />
      </div>
      <div className={s.cardWrapper}>
        {trackedCities.map(
          ({
            current: {
              humidity,
              pressure_mb,
              last_updated,
              wind_kph,
              wind_degree,
              temp_c,
              condition: { icon },
            },
            location: { name },
          }) => {
            const key = `${name}${humidity}`;
            return (
              <WeatherCard
                key={key}
                temperature={temp_c}
                humidity={humidity}
                pressure={pressure_mb}
                windDeg={wind_degree}
                windSpeed={wind_kph}
                cityName={name}
                lastUpdate={last_updated}
                icon={icon}
                onDeleteCard={handleDeleteCard}
                onUpdateCard={handleUpdateCard}
              />
            );
          },
        )}
      </div>
    </div>
  );
};
