import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { BsFillSkipEndFill } from "react-icons/bs";

import { focusEnum } from "@/pages";
import TimerStart from "../shared/timer-start";
import { PomodoroContext } from "@/context/pomodoro-context";

interface Props {
  setFocus: Dispatch<SetStateAction<focusEnum>>;
  focus: focusEnum;
  setPoint: Dispatch<SetStateAction<number>>;
  point: number;
}


function formatNumberToTime(number: number) {
  var hours = Math.floor(number);
  var minutes = Math.floor((number - hours) * 60);
  var formattedMinutes = String(minutes).padStart(2, '0');
  return hours + ':' + formattedMinutes;
}

export default function TimerMenu({ setFocus, focus, setPoint, point }: Props) {
  const ctx = useContext(PomodoroContext)
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

  const compareFocuses = (curFocus: focusEnum): string => {
    return focus === curFocus ? "bg-transparent-white" : "";
  };

  const handleSkipTimer = () => {
    if(focus === focusEnum.pomodoro){
      setPoint((prevPoint) => prevPoint + 1);


      // point % 3 should be dynamic
      if (point % ctx.longBreakInterval === 0 && point !== 0) {
        setFocus(focusEnum.long);
      } else {
        setFocus(focusEnum.short);
      }
    } else {
      setFocus(focusEnum.pomodoro)
    }
    
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
