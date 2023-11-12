import { useEffect } from "react";
import Glide from "@glidejs/glide";
import CurrentDayWeatherItem from "./CurrentDayWeatherItem";

export default function Carol({ todayDayForecast }: any) {
  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "slider",
      startAt: 0,
      focusAt: 0,
      bound: true,
      perView: 8,
      autoplay: 0,
      animationDuration: 400,
      gap: 0,
      breakpoints: {
        640: {
          perView: 4,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <div className="glide-06 relative w-full overflow-hidden rounded">
      <div className="overflow-hidden" data-glide-el="track">
        <ul className=" whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          {todayDayForecast.map((listItem: any) => (
            <CurrentDayWeatherItem listItem={listItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
