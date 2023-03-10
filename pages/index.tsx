import FocusTime from "@/components/header/focus_time";
import Tasks from "@/components/header/tasks";
import TimerMenu from "@/components/header/timer-menu";
import Layout from "@/components/layout/layout";

import { useState } from "react";

export enum focusEnum {
  pomodoro = "pomodoro",
  short = "short",
  long = "long",
}

export default function Home() {
  const [focus, setFocus] = useState<focusEnum>(focusEnum.pomodoro);
  const [point, setPoint] = useState(0);

  console.log(point)
  return (
    <Layout focus={focus}>
      <div className="text-white w-[90%] mx-auto flex flex-col">
        <div>
          <TimerMenu point={point} setPoint={setPoint} setFocus={setFocus} focus={focus} />
          <FocusTime point={point} />
          <Tasks />
        </div>
      </div>
    </Layout>
  );
}
