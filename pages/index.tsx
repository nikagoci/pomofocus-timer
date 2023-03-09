import FocusTime from "@/components/header/focus_time";
import Tasks from "@/components/header/tasks";
import TimerMenu from "@/components/header/timer-menu";

import { useState } from "react";

export enum focusEnum {
  pomodoro = 'pomodoro',
  short = 'short',
  long = 'long'
}

export default function Home() {
  const [ focus, setFocus ] = useState<focusEnum>(focusEnum.pomodoro)

  return (
    <div className="text-white w-[90%] mx-auto flex flex-col">
      <div>
        <TimerMenu setFocus={setFocus} focus={focus} />
        <FocusTime />
        <Tasks />
      </div>
    </div>
  );
}