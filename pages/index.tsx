import FocusTime from "@/components/header/focus_time";
import Tasks from "@/components/header/tasks";
import TimerMenu from "@/components/header/timer-menu";

export default function Home() {
  return (
    <div className="text-white w-[90%] mx-auto flex flex-col">
      <div>
        <TimerMenu />
        <FocusTime />
        <Tasks />
      </div>
    </div>
  );
}
