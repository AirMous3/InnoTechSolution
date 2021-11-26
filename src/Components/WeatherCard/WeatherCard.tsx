import s from "./WeatherCard.module.css";

type PropsType = {
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDeg: number;
  cityName: string;
  lastUpdate: string;
  onDeleteCard: (cityName: string) => void;
};
const dirToStr = (d: number) => {
  const directions = [
    "Северный",
    "Северо-Восточный",
    "Восточный",
    "Юго-Восточный",
    "Южный",
    "Юго-Западный",
    "Западный",
    "Северо-Западный",
  ];
  d = d < 0 ? (d = 360 - (Math.abs(d) % 360)) : d % 360;
  return `${directions[(d / 45) | 0]}`;
};
const degreeChar = String.fromCharCode(0xfeff00b0);

export const WeatherCard = ({
  lastUpdate,
  cityName,
  pressure,
  temperature,
  windDeg,
  windSpeed,
  humidity,
  onDeleteCard,
}: PropsType) => {
  return (
    <div className={s.main}>
      <b>
        <div>Город: {cityName}</div>
      </b>
      <div>Температура: {temperature}</div>
      <div>Влажность: {humidity}</div>
      <div>Атмосферное давление: {pressure}</div>
      <div>
        Сила и направление ветра: {(windSpeed / 3.6).toFixed(2)}М/С -
        {`${windDeg}${degreeChar} = ${dirToStr(windDeg)}`}
      </div>
      <div>Последнее обновление данных: {lastUpdate}</div>
      <div>
        <button onClick={() => onDeleteCard(cityName)}>Удалить</button>
        <button>Обновить</button>
      </div>
    </div>
  );
};
