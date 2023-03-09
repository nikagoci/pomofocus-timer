import { Dispatch, SetStateAction } from "react";

import { focusEnum } from "@/pages";

interface Props {
  focus: focusEnum;
  setIsTimerStarted: Dispatch<SetStateAction<boolean>>;
  isTimerStarted: boolean;
}

export default function PauseButton({
  focus,
  setIsTimerStarted,
  isTimerStarted,
}: Props) {

  return (
    <button
      className={`transform duration-200 ${!isTimerStarted ? 'button-shadow' : ''} active:shadow-none px-12 py-3 text-2xl font-semibold bg-white rounded ${
        focus === focusEnum.pomodoro ? "text-primary" : ""
      } ${focus === focusEnum.short ? "text-secondary" : ""} ${
        focus === focusEnum.long ? "text-tertiary" : ""
      }`}
      onClick={() => setIsTimerStarted(prev => !prev)}
    >
      {isTimerStarted ? 'PAUSE' : 'START'}
    </button>
  );
}
