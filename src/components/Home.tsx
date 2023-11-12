import AppCard from "./AppCard";

export default function Home() {
  const apps = [
    {
      id: 0,
      appName: "BMI Calculator",
      appLink: "/bmicalculator",
      appImg:
        "https://imgs.search.brave.com/B6OnHhVpS8nsrBFVVwphpspFkreRC-_n4M80SOt6I-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgx/ODE0NDIwL3Bob3Rv/L2JtaS1ib2R5LW1h/c3MtaW5kZXgtZm9y/bXVsYS1pbi1hLW5v/dGVwYWQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVV4ZmZB/ajVkaWM3N09wS2RK/ZGRodHBJYlV6VW5U/aGw5N3BhVWFkVTlm/cFE9",
      appDescription:
        "Caluclate your BMI, BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass.",
    },
    {
      id: 1,
      appName: "Temperature Convertor",
      appLink: "/temperatureConversion",
      appImg:
        "https://imgs.search.brave.com/moqFVe0XWog4psgW-377Z9Q1OgJZORyqctF6AFPyYEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubHRrY29udGVu/dC5jb20vaW1hZ2Vz/LzMwNzM1L3RoZXJt/b21ldGVyLWluLXNu/b3dfMjdjNTU3MTMw/Ni5qcGc",
      appDescription:
        "Caluclate your BMI, BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass.",
    },
    {
      id: 2,
      appName: "Weather Forecast",
      appLink: "/weatherForecast",
      appImg:
        "https://imgs.search.brave.com/SXUs8oVr-pwA0_8Kc-EYEzJBQElrsQsU-JqImnRXR04/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/MDQwNTM3My9waG90/by9leHRyZW1lLXdl/YXRoZXItb24tZWFy/dGgtYmFja2dyb3Vu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NkM2eW1Xc3FG/R3UwVHo1UUJBNVRs/UmZXU2hGUDdQUGZW/eV9DLW5vXzdfND0",
      appDescription:
        "Caluclate your BMI, BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass.",
    },
  ];
  return (
    <>
      <div className="justify-center items-center px-10 h-screen bg-[#1c2025]">
        <h1 className="text-center text-white font-semibold text-4xl">Home</h1>
        <ul className="sm:grid sm:grid-cols-4 gap-5 mt-5 mb-5">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </ul>
      </div>
    </>
  );
}