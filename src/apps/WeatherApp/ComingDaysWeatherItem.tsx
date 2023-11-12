import {} from "react";

type itemProps = {
  listItem: any;
};
const options: any = {
  weekday: "short",
  month: "short",
  day: "numeric",
};
const dateFormatter = new Intl.DateTimeFormat(undefined, options);
export default function ComingDaysWeatherItem({ listItem }: itemProps) {
  const minTemp: number = Math.floor(listItem.main.temp_min);
  const maxTemp: number = Math.floor(listItem.main.temp_max);
  return (
    <li className=" sm:w-36 flex flex-row justify-between sm:justify-start sm:flex-col items-center sm:text-center text-[#f2f2f2]">
      <p className="text-sm sm:text-xl w-16 sm:w-full sm:py-2">
        {dateFormatter.format(Date.parse(listItem.dt_txt))}
      </p>
      <div className="flex flex-row sm:flex-col justify-end items-center">
        <div className="text-xs sm:text-lg w-12 sm:w-fit fontRubik">
          {minTemp !== maxTemp
            ? minTemp + "° / " + maxTemp + "°C"
            : minTemp + "°C"}
        </div>
        <img
          className="w-14 sm:w-20 h-14 sm:h-20"
          src={`https://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`}
        />
        <p className="text-xs sm:text-xl text-end sm:text-center w-16 sm:w-full sm:pb-2">
          {listItem.weather[0].description}
        </p>
      </div>
    </li>
  );
}
