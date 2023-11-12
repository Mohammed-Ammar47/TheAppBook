import {} from "react";
const options: any = {
  hour: "2-digit",
  minute: "2-digit",
  day: "numeric",
  weekday: "short",
};
type itemProps = {
  listItem: any;
};
export default function CurrentDayWeatherItem({ listItem }: itemProps) {
  const forecastTime = new Date(listItem.dt_txt);
  return (
    <li className=" sm:w-[150px]  flex  justify-between flex-col items-center text-center text-[#f2f2f2] ring-1 ring-[#f2f2f2]">
      <p className="text-sm sm:text-xl w-20 py-2">
        {forecastTime.toLocaleTimeString("ISO", options)}
      </p>
      <p className="text-xs sm:text-lg">
        {Math.floor(listItem.main.temp) + "°C"}
      </p>
      <img
        className="w-14 sm:w-20 h-14 sm:h-20"
        src={`https://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`}
      />
    </li>
  );
}
