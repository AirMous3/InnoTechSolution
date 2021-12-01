import s from "./WeatherCard.module.css";
import { getPowerAndDirectionWind } from "../../utils/getPowerAndDirectionWind";

type PropsType = {
  temperature: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDeg: number;
  cityName: string;
  lastUpdate: string;
  icon: string;
  onDeleteCard: (cityName: string) => void;
  onUpdateCard: (cityName: string) => void;
};

const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

export const WeatherCard = ({
  lastUpdate,
  cityName,
  pressure,
  temperature,
  windDeg,
  windSpeed,
  humidity,
  onDeleteCard,
  onUpdateCard,
  icon,
}: PropsType) => {
  const formattedTime = dateFormatter.format(Date.parse(lastUpdate));
  return (
    <div className={s.main}>
      <b>
        <div>Город: {cityName}</div>
      </b>
      <div>
        Температура: {temperature}°C
        <img src={icon} alt="icon" />
      </div>
      <div>Влажность: {humidity}%</div>
      <div>Атмосферное давление: {pressure}</div>
      <div>
        Сила и направление ветра:
        {getPowerAndDirectionWind(windSpeed, windDeg)}
        <span
          className={s.arrow}
          style={{ transform: `rotate(${windDeg - 90}deg)` }}
        >
          ➵
        </span>
      </div>
      <div>Последнее обновление данных: {formattedTime}</div>
      <div>
        <button
          style={{
            backgroundColor: "#f15555",
          }}
          onClick={() => onDeleteCard(cityName)}
        >
          Удалить
        </button>

        <button
          style={{
            backgroundColor: "#4aae4a",
            marginLeft: "20px",
          }}
          onClick={() => onUpdateCard(cityName)}
        >
          Обновить
        </button>
      </div>
    </div>
  );
};
