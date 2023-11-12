// import React, { useEffect } from "react";
// import { useState } from "react";
// import Helmet from "react-helmet";

// export default function TemperatureConvertor() {
//   const [variables, setVariables] = useState(0);
//   const [result, setResult] = useState(null);
//   const [selectedUnit1, setSelectedUnit1] = useState("Celsius");
//   const [selectedUnit2, setSelectedUnit2] = useState("Kelvin");
//   const [switchExpression, setSwitchExpression] = useState(
//     selectedUnit1 + "To" + selectedUnit2
//   );

//   const TemperatureUnits = [
//     { option: "Celsius", symbol: "C" },
//     { option: "Kelvin", symbol: "K" },
//     { option: "Fahrenheit", symbol: "F" },
//   ];

//   useEffect(() => {
//     setSwitchExpression(selectedUnit1 + "To" + selectedUnit2);
//   }, [selectedUnit1, selectedUnit2]);
//   function onChange(e) {
//     setVariables(e.target.value);
//   }

//   function onSubmit(e) {
//     e.preventDefault();
//     switch (switchExpression) {
//       case "CelsiusToKelvin":
//         celsiusToKelvin();
//         break;
//       case "KelvinToCelsius":
//         kelvinToCelsius();
//         break;
//       case "CelsiusToFahrenheit":
//         celsiusToFahrenheit();
//         break;
//       case "FahrenheitToCelsius":
//         fahrenheitToCelsius();
//         break;
//       case "KelvinToFahrenheit":
//         kelvinToFahrenheit();
//         break;
//       case "FahrenheitToKelvin":
//         fahrenheitToKelvin();
//         break;
//       case "CelsiusToCelsius":
//         same();
//         break;
//       case "KelvinToKelvin":
//         same();
//         break;
//       case "FahrenheitToFahrenheit":
//         same();
//         break;
//       default:
//         break;
//     }
//   }

//   function selectUnit1(e) {
//     setSelectedUnit1(e.target.value);
//     setSwitchExpression(selectedUnit1 + "To" + selectedUnit2);
//     console.log("unit 1 " + e.target.value);
//   }
//   function selectUnit2(e) {
//     setSelectedUnit2(e.target.value);
//     setSwitchExpression(selectedUnit1 + "To" + selectedUnit2);
//     console.log("unit 2 " + e.target.value);
//   }
//   const same = () => setResult(parseFloat(variables));
//   const celsiusToKelvin = () => setResult(parseFloat(variables) + 273.15);
//   const kelvinToCelsius = () => setResult(parseFloat(variables) + 273.15);
//   const celsiusToFahrenheit = () =>
//     setResult(parseFloat(variables) * (9 / 5) + 32);
//   const fahrenheitToCelsius = () =>
//     setResult((parseFloat(variables) - 32) * (5 / 9));
//   const kelvinToFahrenheit = () =>
//     setResult(parseFloat(variables) * (9 / 5) - 459.67);
//   const fahrenheitToKelvin = () =>
//     setResult((parseFloat(variables) + 459.67) * (5 * 9));

//   return (
//     <>
//       <main className="w-full  flex justify-center items-center ">
//         <div className="w-full flex flex-col  justify-center items-center bg-[#19376D]    my-5 p-5 mx-5  lg:mx-auto  rounded-lg shadow-lg max-w-xl lg:max-w-3xl">
//           <Helmet bodyAttributes={{ style: "background-color : #0B2447" }} />
//           <h2 className=" justify-center text-center text-lg md:text-3xl font-semibold text-white pb-6">
//             Unit Convertor
//           </h2>
//           <form onSubmit={onSubmit} className="w-full flex flex-col">
//             <div className=" flex flex-col justify-between items-center text-sm md:space-x-10 md:text-xl lg:text-2xl w-full ">
//               {/* Conversion Units */}
//               <div className="flex flex-row w-full justify-center items-center">
//                 <div className="flex flex-col w-full pr-2">
//                   <label className="font-semibold text-white">From:</label>
//                   <select
//                     onChange={selectUnit1}
//                     className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
//                   >
//                     {TemperatureUnits.map((unit, index) => (
//                       <option
//                         key={index}
//                         name={unit.option}
//                         value={unit.option}
//                       >
//                         {unit.option}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="flex flex-col w-full pl-2">
//                   <label className="font-semibold text-white">To:</label>
//                   <select
//                     onChange={selectUnit2}
//                     className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
//                   >
//                     {TemperatureUnits.map((unit, index) => (
//                       <option key={index} value={unit.option}>
//                         {unit.option}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               {/* Conversion Input */}
//               <div id="inputV" className="flex  flex-col w-full ">
//                 <label className="text-white font-semibold" htmlFor="Height">
//                   Variable
//                 </label>
//                 <input
//                   required
//                   onChange={onChange}
//                   type="number"
//                   step="0.000000001"
//                   min="-1000000000"
//                   max="1000000000"
//                   id="height"
//                   value={variables}
//                   placeholder="insert value"
//                   className=" mb-6 mt-1 py-2 text-sm md:text-xl lg:text-2xl text-slate-200 rounded bg-[#2a436e]  border-0 outline-none transition ease-in-out shadow-sm  ring-inset focus:ring-2 focus:ring-inset focus:ring-blue-600  "
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className=" justify-center items-center  flex-col bg-blue-600 text-white px-7 py-3 text-sm md:text-xl font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out active:bg-blue-800"
//             >
//               Convert
//             </button>
//           </form>
//           {result && (
//             <p className="justify-center items-center  flex-col  text-white px-7 py-3 text-sm md:text-xl lg:text-2xl font-medium ">
//               Your BMI is {Math.round(result * 10000) / 10000} <sup></sup>
//             </p>
//           )}
//         </div>
//       </main>
//     </>
//   );
// }
