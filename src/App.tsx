import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BMICalculator from "./apps/bmiCalculator/BMICalculator";
import Home from "./components/Home";
import Header from "./components/Header";
import TemperatureConvertor from "./apps/temperatureConvertor/TemperatureConvertor";
import WeatherForeCast from "./apps/WeatherApp/WeatherForeCast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmicalculator" element={<BMICalculator />} />
          <Route
            path="/temperatureConversion"
            element={<TemperatureConvertor />}
          />
          <Route path="/weatherForecast" element={<WeatherForeCast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
