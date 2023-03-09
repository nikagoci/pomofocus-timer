import { BsFillSkipEndFill } from "react-icons/bs";


import MenuButton from "../shared/menu-button";
import PauseButton from "../shared/pause-button";
import FocusTime from "./focus_time";
import Tasks from "./tasks";

export default function TimerMenu() {
  return (
      <div className="flex flex-col bg-transparent-black p-7 rounded mt-8 space-y-4 max-w-[550px] mx-auto">
        <div className="flex items-center justify-center font-semibold cursor-pointer">
          <div className="px-3 py-1 rounded-md bg-transparent-white ">
            Pomodoro
          </div>
          <div className="px-3 py-1 rounded-md">Short Break</div>
          <div className="px-3 py-1 rounded-md">Long Break</div>
        </div>
        <div>
          <div className="py-6 font-bold text-center text-8xl">25:00</div>
        </div>
        <div className="relative flex justify-center">
          <PauseButton />
          <BsFillSkipEndFill
            size={40}
            className="absolute duration-200 transform -translate-y-1/2 cursor-pointer top-1/2 sm:right-20 right-14 hover:opacity-20"
          />
        </div>
      </div>


  );
}
