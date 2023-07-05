import FocusTime from "@/components/header/focus-time";
import Tasks from "@/components/tasks";
import TimerMenu from "@/components/header/timer-menu";
import Layout from "@/components/layout/layout";

import { useState } from "react";
import { TaskContextProvider } from "@/context/task-context";
import Head from "next/head";

export enum focusEnum {
  pomodoro = "pomodoro",
  short = "short",
  long = "long",
}

export default function Home() {
  const [focus, setFocus] = useState<focusEnum>(focusEnum.pomodoro);
  const [point, setPoint] = useState(0);

  return (
    <>
      <Head>
        {focus === focusEnum.pomodoro && <title>Time to focus!</title>}
        {(focus === focusEnum.short || focus === focusEnum.long) && (
          <title>Time for break!</title>
        )}
        <link rel="shortcut icon" type="image/x-icon" href="/images/pomo-focus.png" />
        <meta name="description" content="track time and focus more!" />
        <meta name="keywords" content="focus, pomodoro, pomo, timer" />
      </Head>
      <Layout focus={focus}>
        <div className="text-white w-[90%] mx-auto flex flex-col">
          <div>
            <TimerMenu
              point={point}
              setPoint={setPoint}
              setFocus={setFocus}
              focus={focus}
            />
            <FocusTime point={point} />
            <TaskContextProvider>
              <Tasks />
            </TaskContextProvider>
          </div>
        </div>
      </Layout>
    </>
  );
}
