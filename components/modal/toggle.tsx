import { useState } from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { InputValues } from ".";

interface Props {
  register: UseFormRegister<InputValues>;
  id: "autoBreaks" | "autoPomodoros";
  control: Control<InputValues>;
}

export default function Toggle({ register, id, control }: Props) {
  const [enabled, setEnabled] = useState(false);

  const changeHandler = (onChange: (...event: any[]) => void, value: boolean) => {
    setEnabled((prev) => !prev);
    onChange(!value);
  };

  return (
    <Controller
      name={id}
      defaultValue={false}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={enabled} className="sr-only peer" readOnly />
          <div
            onClick={() => changeHandler(onChange, value)}
            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </div>
      )}
    />
  );
}
