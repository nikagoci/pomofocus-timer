import { BsFillSkipEndFill } from "react-icons/bs";
import { Dispatch, SetStateAction } from "react";

import { focusEnum } from "@/pages";
import TimerStart from "../shared/timer-start";

interface Props {
  setFocus: Dispatch<SetStateAction<focusEnum>>;
  focus: focusEnum;
}

export default function TimerMenu({ setFocus, focus }: Props) {
  const compareFocuses = (curFocus: focusEnum): string => {
    if (focus === curFocus) {
      return "bg-transparent-white";
    }

    return "";
  };

  return (
    <div className="flex flex-col bg-transparent-black p-7 rounded mt-8 space-y-4 max-w-[550px] mx-auto">
      <div className="flex items-center justify-center font-semibold cursor-pointer">
        <div
          className={`px-3 py-1 rounded-md transform duration-200 ${compareFocuses(
            focusEnum.pomodoro
          )} `}
          onClick={() => setFocus(focusEnum.pomodoro)}
        >
          Pomodoro
        </div>
        <div
          className={`px-3 py-1 rounded-md transform duration-200 ${compareFocuses(
            focusEnum.short
          )}`}
          onClick={() => setFocus(focusEnum.short)}
        >
          Short Break
        </div>
        <div
          className={`px-3 py-1 rounded-md transform duration-200 ${compareFocuses(
            focusEnum.long
          )}`}
          onClick={() => setFocus(focusEnum.long)}
        >
          Long Break
        </div>
      </div>
      <div>
        <div className="py-6 font-bold text-center text-8xl">25:00</div>
      </div>
      <div className="relative flex justify-center">
        <TimerStart focus={focus} />
        <BsFillSkipEndFill
          size={40}
          className="absolute duration-200 transform -translate-y-1/2 cursor-pointer top-1/2 sm:right-20 right-14 hover:opacity-20"
        />
      </div>
    </div>
  );
}
