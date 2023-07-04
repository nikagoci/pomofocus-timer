import { FormEvent, useContext, useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";

import MenuButton from "../shared/menu-button";
import { TaskContext } from "@/context/task-context";
import Button from "../shared/button";

const barVariants = {
  initial: { scaleY: 0, originY: 0.5 },
  animate: { scaleY: 1, originY: 0.5 },
  exit: { scaleY: 0, originY: 0.5 },
};

interface Props {
  task: { id: string; title: string; checked: boolean; active: boolean };
}

export default function TaskItem({ task }: Props) {
  const { inputValue, deleteTask, changeTaskValue, changeStatusValue } =
    useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(inputValue);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      !e.target ||
      !(e.target instanceof Node) ||
      (e.target as Element).closest("#end-task")
    ) {
      return;
    }
    setIsEditing(false);
  };

  const handleEndTask = () => {
    setIsEditing(false);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changeTaskValue({ id: task.id, value });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <motion.form
          className="flex flex-col mt-8 bg-white rounded-xl"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={barVariants}
          onSubmit={submitHandler}
          id="end-task"
        >
          <input
            placeholder="What are you working on?"
            className="px-4 py-8 text-2xl font-bold text-black border-none outline-none rounded-xl"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <div className="flex justify-between p-4 bg-[#efefef]  rounded-b-xl">
            <Button onClick={handleDeleteTask}>Delete</Button>
            <div className="flex gap-x-4">
              <Button onClick={handleEndTask}>Cancel</Button>
              <Button type="submit" primary>
                Save
              </Button>
            </div>
          </div>
        </motion.form>
      ) : (
        <div
          className={`${
            task.active
              ? "border-l-8 border-black"
              : "hover:border-l-8 border-gray-200"
          } flex items-center justify-between p-4 mt-4 bg-white  rounded-md cursor-pointer`}
          onClick={() => changeStatusValue({ id: task.id, status: "active" })}
        >
          <div className="flex items-center gap-x-2 ">
            <AiFillCheckCircle
              color={!task.checked ? "rgb(223, 223, 223)" : "rgb(186, 73, 73)"}
              className="cursor-pointer"
              size={30}
              onClick={(e) => {
                e.stopPropagation();
                changeStatusValue({ id: task.id, status: "checked" });
              }}
            />
            <h3
              className={`${
                !task.checked
                  ? "text-black "
                  : "line-through text-[rgb(187,187,187)]  "
              } `}
            >
              {task.title}
            </h3>
          </div>
          <div className="border border-[rgb(223,223,223)] rounded-sm">
            <MenuButton
              icon={<HiDotsVertical className="text-gray-500 " size={20} />}
              handleClick={() => setIsEditing(true)}
            />
          </div>
        </div>
      )}
    </>
  );
}
