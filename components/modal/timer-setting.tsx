import { useContext } from "react";
import { BiTime } from "react-icons/bi";
import { Control, UseFormRegister } from "react-hook-form/dist/types";

import Input from "./input";
import Toggle from "./toggle";
import { PomodoroContext } from "@/context/pomodoro-context";
import { InputValues } from ".";

interface Props {
  register: UseFormRegister<InputValues>;
  control: Control<InputValues>
}

type TimeOptions = {
  name: string;
  id: "pomodoro" | "longBreakInterval" | "shortBreak" | "longBreak";
  defaultValue: number;
};

export default function TimerSetting({ register, control }: Props) {
  const {
    pomodoro,
    short,
    long,
    longBreakInterval,
  } = useContext(PomodoroContext);

  const timeOptions: TimeOptions[] = [
    {
      name: "Pomodoro",
      id: "pomodoro",
      defaultValue: pomodoro,
    },
    {
      name: "Short Break",
      id: "shortBreak",
      defaultValue: short,
    },
    {
      name: "Long Break",
      id: "longBreak",
      defaultValue: long,
    },
  ];

  return (
    <div className="py-3">
      <div className="flex items-center py-2 font-bold gap-x-2 text-light_dark">
        <BiTime size={20} />
        <h4>TIMER</h4>
      </div>
      <div className="py-3">
        <h4 className="mb-2 text-black">Time (minutes)</h4>
        <div className="flex w-full gap-x-8">
          {timeOptions.map((timeOption) => (
            <div className="space-y-2" key={timeOption.id}>
              <label className="text-light_dark" htmlFor={timeOption.id}>
                {timeOption.name}
              </label>
              <Input
                id={timeOption.id}
                defaultValue={timeOption.defaultValue}
                register={register}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <h4 className="font-bold text-black">Auto Start Breaks</h4>
        <Toggle register={register} control={control} id="autoBreaks" />
      </div>
      <div className="flex items-center justify-between py-3">
        <h4 className="font-bold text-black">Auto Start Pomodoros</h4>
        <Toggle register={register} control={control} id="autoPomodoros" />
      </div>
      <div className="flex items-center justify-between py-3">
        <label className="font-bold text-black" htmlFor="long-break-interval">
          Long Break Interval
        </label>
        <div className="w-20">
          <Input
            id="longBreakInterval"
            defaultValue={longBreakInterval}
            register={register}
          />
        </div>
      </div>
    </div>
  );
}
