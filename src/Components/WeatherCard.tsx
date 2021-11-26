import s from "./WeatherCard.module.css";

export const WeatherCard = () => {
  return (
    <div className={s.main}>
      <b>
        <div>Город:</div>
      </b>
      <div>Температура:</div>
      <div>Влажность:</div>
      <div>Атмосферное давление:</div>
      <div>Сила и направление ветра:</div>
      <div>Последнее обновление данных:</div>
      <div>
        <button>Удалить</button>
        <button>Обновить</button>
      </div>
    </div>
  );
};
