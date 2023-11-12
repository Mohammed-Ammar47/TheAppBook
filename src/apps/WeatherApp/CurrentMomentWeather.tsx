import {} from "react";
const options: any = {
  hour: "2-digit",
  minute: "2-digit",
  day: "numeric",
  weekday: "short",
};
export default function CurrentMomentWeather({ currentWeather, city }: any) {
  const currentTime = new Date();
  const fields: any = [
    {
      name: "Wind",
      value: Math.round(currentWeather.wind.speed * 3.6) + "km/m",
    },
    { name: "Humidity", value: currentWeather.main.humidity + "%" },
    { name: "Pressure", value: currentWeather.main.pressure + "hPa" },
    { name: "Visibility", value: currentWeather.visibility / 1000 + "km" },
    {
      name: "Dew point",
      value:
        Math.round(
          currentWeather.main.temp - (100 - currentWeather.main.humidity) / 5
        ) + "°C",
    },
  ];
  return (
    <div className=" w-full p-1.5 sm:p-10">
      <div className="justify-start flex flex-col text-[#f2f2f2] space-y-1">
        <p className="text-lg sm:text-3xl ">
          {city.name + ", " + city.country}
        </p>
        <p className="text-base sm:text-2xl">
          {currentTime.toLocaleTimeString("iso", options)}
        </p>
        <div className="flex flex-row items-start sm:items-center justify-start">
          <div className="basis-1/2 flex-col ">
            <p className="text-5xl font-medium  sm:text-9xl py-3">
              {Math.round(currentWeather.main.temp) + "°C"}
            </p>
            <p className="text-sm w-[90px] sm:w-full sm:text-2xl">
              {Math.floor(currentWeather.main.temp_min) +
                "° / " +
                Math.round(currentWeather.main.temp_max) +
                "° feels like " +
                Math.round(currentWeather.main.feels_like) +
                "°"}
            </p>
          </div>
          <img
            className="basis-1/2 w-20 sm:w-full sm:h-full "
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5">
          {fields.map((field: any) => (
            <div className="flex flex-col">
              <p className="text-base sm:text-xl font-medium py-0.5">
                {field.name}
              </p>
              <p className="text-sm sm:text-lg py-0.5">{field.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
