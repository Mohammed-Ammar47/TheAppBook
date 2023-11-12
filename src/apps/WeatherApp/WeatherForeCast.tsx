import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ComingDaysWeatherItem from "./ComingDaysWeatherItem";
import Carol from "./Carol";
import CurrentMomentWeather from "./CurrentMomentWeather";
export default function WeatherForeCast() {
  const [weatherData, setWeatherData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [todayDayForecast, setTodayDayForecast] = useState<any>();
  const [comingDaysForecast, setComingDaysForecast] = useState<any>();
  const [city, setCity] = useState<string>("London");
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
              import.meta.env.VITE_WEATHER_APP_API_KEY
            }&units=metric`
          )
          .then((res) => {
            setWeatherData(res.data);
            const todayWeather = res.data.list.slice(0, 8);
            const cdfIndexes = [0, 7, 15, 23, 31];
            const comingDaysWeather = res.data.list.filter(
              (data: any, index: number) => cdfIndexes.includes(index)
            );
            setTodayDayForecast(todayWeather);
            setComingDaysForecast(comingDaysWeather);
          });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [city]);
  if (loading) {
    return <h1>Loading</h1>;
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  function onSubmit() {
    setCity(input.charAt(0).toUpperCase() + input.slice(1));
  }
  return (
    <div
      className={`flex justify-center p-3 fontRubik bg-[url(https://images.unsplash.com/photo-1500390365106-166bb67248d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-screen bg-cover bg-center `}
    >
      <div className="w-full sm:w-[740px] h-fit flex flex-col justify-center items-center  p-5 my-20 space-y-5  backdrop-blur-md rounded-2xl drop-shadow-xl ring-2 ring-slate-400/75  shadow-[0_0px_50px_0px_rgba(120,120,120,1)]">
        <p className="text-2xl sm:text-5xl font-semibold text-white">
          Weather Forecast
        </p>
        <div className="flex flex-row relative">
          <input
            onChange={onChange}
            name="city"
            type="text"
            value={input}
            required
            className="text-lg sm:text-xl text-white bg-transparent focus:bg-transparent/25 ring-1 ring-slate-400/75 focus:ring-slate-100 w-full sm:w-96 h-10 sm:h-14 rounded-full outline-none border-none"
          />
          <AiOutlineSearch
            onClick={onSubmit}
            className="absolute top-2 right-3 text-2xl sm:text-4xl text-slate-300"
          />
        </div>
        <CurrentMomentWeather
          currentWeather={weatherData.list[0]}
          city={weatherData.city}
        />
        <Carol todayDayForecast={todayDayForecast} />
        <ul className="w-full flex flex-col sm:flex-row divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#f2f2f2]">
          {comingDaysForecast.map((listItem: any) => (
            <ComingDaysWeatherItem listItem={listItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
