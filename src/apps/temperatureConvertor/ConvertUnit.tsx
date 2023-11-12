type conversionProps = {
  variables: number;
  setResult: (value: number | null) => void;
  switchExpression: string;
};

export default function ConvertUnit({
  variables,
  setResult,
  switchExpression,
}: conversionProps) {
  const same = () => setResult(variables);
  const celsiusToKelvin = () => setResult(variables * 1 + 273.15);
  const kelvinToCelsius = () => setResult(variables - 273.15);
  const celsiusToFahrenheit = () => setResult(variables * (9 / 5) + 32);
  const fahrenheitToCelsius = () => setResult((variables * 1 - 32) * (5 / 9));
  const kelvinToFahrenheit = () => setResult(variables * (9 / 5) - 459.67);
  const fahrenheitToKelvin = () =>
    setResult((variables * 1 + 459.67) * (5 / 9));
  function onClick() {
    switch (switchExpression) {
      case "CelsiusToKelvin":
        celsiusToKelvin();
        break;
      case "KelvinToCelsius":
        kelvinToCelsius();
        break;
      case "CelsiusToFahrenheit":
        celsiusToFahrenheit();
        break;
      case "FahrenheitToCelsius":
        fahrenheitToCelsius();
        break;
      case "KelvinToFahrenheit":
        kelvinToFahrenheit();
        break;
      case "FahrenheitToKelvin":
        fahrenheitToKelvin();
        break;
      case "CelsiusToCelsius":
        same();
        break;
      case "KelvinToKelvin":
        same();
        break;
      case "FahrenheitToFahrenheit":
        same();
        break;
      default:
        break;
    }
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className=" justify-center items-center  flex-col bg-[#10647d94] text-[#f2f2f2] px-7 py-3 text-sm md:text-xl font-medium uppercase rounded shadow-md hover:bg-[#10647dc4] transition duration-200 ease-in-out active:bg-[#10637d]"
    >
      Convert
    </button>
  );
}
