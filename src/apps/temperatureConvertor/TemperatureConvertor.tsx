import { useEffect } from "react";
import { useState } from "react";
import SelectOption from "./SelectOption";
import ConvertUnit from "./ConvertUnit";

export default function TemperatureConvertor() {
  const TemperatureUnits = [
    { option: "Celsius", symbol: "°C" },
    { option: "Kelvin", symbol: "K" },
    { option: "Fahrenheit", symbol: "°F" },
  ];
  const [variables, setVariables] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [selectedUnit1, setSelectedUnit1] = useState<string>(
    TemperatureUnits[0].option
  );
  const [selectedUnit2, setSelectedUnit2] = useState<string>(
    TemperatureUnits[0].option
  );
  const [switchExpression, setSwitchExpression] = useState(
    selectedUnit1 + "To" + selectedUnit2
  );
  const [unitSymbol, setUnitSymbol] = useState<string | undefined>();
  useEffect(() => {
    setSwitchExpression(selectedUnit1 + "To" + selectedUnit2);
    const unit = TemperatureUnits.find((u) => u.option === selectedUnit2);
    setUnitSymbol(unit?.symbol);
  }, [selectedUnit1, selectedUnit2]);
  function onChange(e: any) {
    setVariables(e.target.value);
  }

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center bg-[#183C57]">
        <div className="w-full flex flex-col  justify-center items-center bg-[#27282f]    my-5 p-5 mx-5  lg:mx-auto  rounded-lg shadow-lg max-w-xl lg:max-w-xl">
          <h2 className=" justify-center text-center text-lg md:text-3xl font-semibold text-white pb-6">
            Unit Convertor
          </h2>
          <div className="w-full flex flex-col">
            <div className=" flex flex-col justify-between items-center text-sm  md:text-xl lg:text-2xl w-full space-y-2">
              {/* Conversion Units */}
              <div className="flex flex-row w-full justify-center items-center">
                <div className="flex flex-col items-start w-full pr-2">
                  <label className="font-semibold text-white">From:</label>
                  <SelectOption
                    units={TemperatureUnits}
                    onChange={(o) => setSelectedUnit1(o)}
                  />{" "}
                </div>
                <div className="flex flex-col items-start w-full pr-2">
                  <label className="font-semibold text-white">To:</label>
                  <SelectOption
                    units={TemperatureUnits}
                    value={selectedUnit2}
                    onChange={(o) => setSelectedUnit2(o)}
                  />{" "}
                </div>
              </div>
              {/* Conversion Input */}
              <div id="inputV" className="flex  flex-col w-full">
                <label className="text-white font-semibold" htmlFor="Height">
                  Variable
                </label>
                <input
                  required
                  onChange={onChange}
                  type="number"
                  step="0.000000001"
                  min="-1000000000"
                  max="1000000000"
                  id="height"
                  value={variables === 0 ? undefined : variables}
                  placeholder="insert value"
                  className="appearance-none mb-6 mt-1 p-2 text-sm md:text-xl lg:text-2xl text-slate-950 rounded bg-[#f2f2f2]  border-0 outline-none transition ease-in-out shadow-sm  ring-inset focus:ring-2 focus:ring-inset focus:ring-[#10637d]"
                />
              </div>
            </div>
            <ConvertUnit
              variables={variables}
              setResult={(r) => setResult(r)}
              switchExpression={switchExpression}
            />
          </div>
          {result && (
            <p className="text-center my-6 p-2 text-sm md:text-xl lg:text-2xl text-slate-950 rounded bg-[#f2f2f2]  border-0 outline-none transition ease-in-out shadow-sm  ring-inset focus:ring-2 focus:ring-inset focus:ring-[#10637d] w-full ">
              {Math.round(result * 10000) / 10000} {unitSymbol}
            </p>
          )}
        </div>
      </main>
    </>
  );
}
