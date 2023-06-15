import { BiTime } from "react-icons/bi";
import Input from "./input";
import Toggle from "./toggle";

const timeOptions = [
  {
    name: "Pomodoro",
    id: "pomodoro",
  },
  {
    name: "Short Break",
    id: "short-break",
  },
  {
    name: "Long Break",
    id: "long-break",
  }
]

export default function TimerSetting() {
  return (
    <div className="py-3">
      <div className="flex items-center py-2 font-bold gap-x-2 text-light_dark">
        <BiTime size={20} />
        <h4>TIMER</h4>
      </div>
      <div className="py-3">
        <h4 className="mb-2 text-black">Time (minutes)</h4>
        <div className="flex w-full gap-x-8">
          {timeOptions.map(timeOption => (
            <div className="space-y-2">
            <label className="text-light_dark" htmlFor={timeOption.id}>
              {timeOption.name}
            </label>
            <Input id={timeOption.id} />
          </div>
          ))}
          
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <h4 className="font-bold text-black">Auto Start Breaks</h4>
        <Toggle />
      </div>
      <div className="flex items-center justify-between py-3">
        <h4 className="font-bold text-black">Auto Start Pomodoros</h4>
        <Toggle />
      </div>
      <div className="flex items-center justify-between py-3">
        <label className="font-bold text-black" htmlFor="long-break-interval">
          Long Break Interval
        </label>
        <div className="w-20">
          <Input id="long-break-interval" />
        </div>
      </div>
    </div>
  );
};