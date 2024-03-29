import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { BsFillSkipEndFill } from "react-icons/bs";

import { focusEnum } from "@/pages";
import TimerStart from "../shared/timer-start";
import { PomodoroContext } from "@/context/pomodoro-context";
import { formatNumberToTime } from "@/libs/usable-functions";
import ChangePomo from "./change-pomo";

interface Props {
  setFocus: Dispatch<SetStateAction<focusEnum>>;
  focus: focusEnum;
  setPoint: Dispatch<SetStateAction<number>>;
  point: number;
}

export default function TimerMenu({ setFocus, focus, setPoint, point }: Props) {
  const ctx = useContext(PomodoroContext);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [curTime, setCurTime] = useState(formatNumberToTime(ctx.pomodoro));

  const TIME_VALUES_FOR_FOCUS = {
    pomodoro: formatNumberToTime(ctx.pomodoro),
    short: formatNumberToTime(ctx.short),
    long: formatNumberToTime(ctx.long),
  };

  useEffect(() => {
    setCurTime(TIME_VALUES_FOR_FOCUS[focus]);
  }, [focus, ctx]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isTimerStarted) {
      timer = setInterval(() => {
        const minutes = parseInt(curTime.split(":")[0]);
        const seconds = parseInt(curTime.split(":")[1]);

        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          setIsTimerStarted(false);
          setCurTime(TIME_VALUES_FOR_FOCUS[focus]);
        } else {
          if (minutes < 10) {
            if (seconds === 0) {
              setCurTime(`0${minutes - 1}:59`);
            } else {
              setCurTime(
                `0${minutes}:${seconds - 1 < 10 ? "0" : ""}${seconds - 1}`
              );
            }
          } else {
            if (seconds === 0) {
              setCurTime(`${minutes - 1}:59`);
            } else {
              setCurTime(
                `${minutes}:${seconds - 1 < 10 ? "0" : ""}${seconds - 1}`
              );
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [curTime, isTimerStarted]);

  useEffect(() => {
    setCurTime(TIME_VALUES_FOR_FOCUS[focus]);
    setIsTimerStarted(false);
  }, [focus]);

  const handleSkipTimer = () => {
    if (focus === focusEnum.pomodoro) {
      setPoint((prevPoint) => prevPoint + 1);

      if (point % ctx.longBreakInterval === 0 && point !== 0) {
        setFocus(focusEnum.long);
      } else {
        setFocus(focusEnum.short);
      }
    } else {
      setFocus(focusEnum.pomodoro);
    }
  };

  return (
    <div className="flex flex-col bg-transparent-black p-7 rounded mt-8 space-y-4 max-w-[550px] mx-auto">
      <div className="flex items-center justify-center font-semibold cursor-pointer">
        <ChangePomo
          title="Pomodoro"
          focus={focus}
          setFocus={setFocus}
          pomoFocus={focusEnum.pomodoro}
        />
        <ChangePomo
          title="Short Break"
          focus={focus}
          setFocus={setFocus}
          pomoFocus={focusEnum.short}
        />
        <ChangePomo
          title="Long Break"
          focus={focus}
          setFocus={setFocus}
          pomoFocus={focusEnum.long}
        />
      </div>
      <div>
        <div className="py-6 font-bold text-center text-8xl">{curTime}</div>
      </div>
      <div className="relative flex justify-center">
        <TimerStart
          focus={focus}
          setIsTimerStarted={setIsTimerStarted}
          isTimerStarted={isTimerStarted}
        />
        {isTimerStarted && (
          <BsFillSkipEndFill
            size={40}
            className="absolute duration-200 transform -translate-y-1/2 cursor-pointer top-1/2 sm:right-20 right-14 hover:opacity-20"
            onClick={handleSkipTimer}
          />
        )}
      </div>
    </div>
  );
}
