import { useState } from "react";
interface variablesTypes {
  height: number;
  weight: number;
}

export default function BMICalculator() {
  const [variables, setVariables] = useState<variablesTypes>({
    height: 0,
    weight: 0,
  });
  const [bmiValue, setBmiValue] = useState<number | null>(null);
  const { height, weight } = variables;

  function onChange(e: any) {
    setVariables({ ...variables, [e.target.id]: e.target.value });
  }

  function onSubmit(e: any) {
    e.preventDefault();
    setBmiValue(weight / Math.pow(height, 2));
  }

  return (
    <div className="bg-[#183C57] w-full py-10 h-screen">
      <div className="w-full flex flex-col  justify-center items-center bg-[#19376D] p-5   lg:mx-auto  rounded-lg shadow-lg max-w-xl lg:max-w-3xl">
        <div className=" text-3xl text-white font-semibold p-5">
          BMICalculator
        </div>
        <form onSubmit={onSubmit} className="w-full flex flex-col">
          <div className=" flex flex-col sm:flex-row justify-between items-center text-sm md:space-x-10 md:text-xl lg:text-2xl w-full ">
            <div className="flex  flex-col w-full ">
              <label className="text-white font-semibold">Height</label>
              <input
                required
                onChange={onChange}
                type="number"
                step="0.01"
                min="0"
                max="10"
                id="height"
                value={height}
                placeholder="height on m"
                className=" mb-6 mt-1 px-1 py-2 text-sm md:text-xl lg:text-2xl text-slate-200 rounded bg-[#2a436e]  border-0 outline-none transition ease-in-out shadow-sm  ring-inset focus:ring-2 focus:ring-inset focus:ring-blue-600  "
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white font-semibold">Weight</label>
              <input
                required
                onChange={onChange}
                type="number"
                step={0.01}
                min={0}
                max={150}
                id="weight"
                value={weight}
                placeholder="weight on kg"
                className=" mb-6 mt-1 px-1 py-2 text-sm md:text-xl lg:text-2xl text-slate-200 rounded bg-[#2a436e]  border-0 outline-none transition ease-in-out shadow-sm  ring-inset focus:ring-2 focus:ring-inset focus:ring-blue-600  "
              />
            </div>
          </div>
          <button
            type="submit"
            className=" justify-center items-center  flex-col bg-blue-600 text-white px-7 py-3 text-sm md:text-xl font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out active:bg-blue-800"
          >
            Calculate
          </button>
        </form>
        {bmiValue && (
          <p className="justify-center items-center  flex-col  text-white px-7 py-3 text-sm md:text-xl lg:text-2xl font-medium ">
            Your BMI is {Math.round(bmiValue * 100) / 100} kg/m<sup>2</sup>
          </p>
        )}
      </div>
    </div>
  );
}
