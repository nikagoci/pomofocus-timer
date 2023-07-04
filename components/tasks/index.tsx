import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Dropdown from "./dropdown";
import AddTask from "./add-task";
import TaskItem from "./task-item";
import { TaskContext } from "@/context/task-context";

export default function Tasks() {
  const { setTask, tasks, inputValue } = useContext(TaskContext);
  const [inputValueChange, setInputValueChange] = useState(0);

  useEffect(() => {
    if (inputValue !== "") {
      const taskObject = {
        id: uuidv4(),
        title: inputValue,
        checked: false,
        active: tasks.length === 0 ? true : false,
      };

      setTask(taskObject);
    }
  }, [inputValue, inputValueChange]);

  return (
    <div className="flex flex-col max-w-[550px] mx-auto">
      <div className="flex justify-between py-4 border-b-2 border-[rgba(255,255,255,0.6)]">
        <h2 className="text-xl font-bold">Tasks</h2>
        <Dropdown />
      </div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
      <AddTask setInputValueChange={setInputValueChange} />
    </div>
  );
}
