import { UseFormRegister } from "react-hook-form/dist/types";
import { InputValues } from ".";

interface Props {
  id: "pomodoro" | "shortBreak" | "longBreak" | "longBreakInterval";
  defaultValue: number
  register: UseFormRegister<InputValues>
}

export default function Input({ id, defaultValue, register }: Props)  {
  return (
    <input
      type="number"
      id={id}
      className="bg-[rgb(239,239,239)] w-full p-2 rounded focus:outline-none"
      defaultValue={defaultValue}
      {...register(id, { valueAsNumber: true })}
    />
  );
};
