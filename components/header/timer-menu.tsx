import {BsFillSkipEndFill} from 'react-icons/bs'

import PauseButton from "./pause-button";

export default function TimerMenu() {
  return (
    <div>
      <div className="flex flex-col bg-transparent-black p-7 rounded mt-8 space-y-4">
        <div className="flex justify-center items-center cursor-pointer font-semibold">
          <div className='px-3 py-1 bg-transparent-white rounded-md '>Pomodoro</div>
          <div className='px-3 py-1 rounded-md'>Short Break</div>
          <div className='px-3 py-1 rounded-md'>Long Break</div>
        </div>
        <div>
          <div className="font-bold text-center py-6 text-8xl">25:00</div>
        </div>
        <div className="flex justify-center relative">
          <PauseButton />
          <BsFillSkipEndFill size={40} className='absolute top-1/2 transform duration-200 -translate-y-1/2 right-10 cursor-pointer hover:opacity-20' />
        </div>
      </div>

      <div>
        <h5>#2</h5>
        <h4>Time to focus!</h4>
      </div>

      <div>
        <div>
          <h2>Tasks</h2>
          <h3>Icon</h3>
        </div>
        <div>
          <h3>add</h3>
          <button>Add Task</button>
        </div>
      </div>
    </div>
  );
}
