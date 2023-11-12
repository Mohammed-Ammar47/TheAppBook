export type UnitOption = {
  option: string;
  symbol: string;
};

type selectProps = {
  units: UnitOption[];
  value?: string;
  onChange: (value: string) => void;
};

export default function SelectOption({ units, onChange }: selectProps) {
  function select(e: any) {
    onChange(e.target.value);
  }
  return (
    <select
      onChange={select}
      className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
    >
      {units.map((unit, index) => (
        <option key={index} value={unit.option}>
          {unit.option}
        </option>
      ))}
    </select>
  );
}
