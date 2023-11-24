import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BMICalculator from "./apps/bmiCalculator/BMICalculator";
import Home from "./components/Home";
import Header from "./components/Header";
import TemperatureConvertor from "./apps/temperatureConvertor/TemperatureConvertor";
import WeatherForeCast from "./apps/WeatherApp/WeatherForeCast";
import Notes from "./apps/NotesApp/Notes";
import Footer from "./components/Footer";

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
          <Route path="/maNotes" element={<Notes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
