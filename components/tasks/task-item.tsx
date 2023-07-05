import { FormEvent, useContext, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

import MenuButton from "../shared/menu-button";
import { TaskContext } from "@/context/task-context";
import Form from "../shared/form";

interface Props {
  task: { id: string; title: string; checked: boolean; active: boolean };
}

export default function TaskItem({ task }: Props) {
  const { inputValue, deleteTask, changeTaskValue, changeStatusValue } =
    useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(inputValue);

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
        <Form
          submitHandler={submitHandler}
          value={value}
          setValue={setValue}
          handleEndTask={handleEndTask}
          isDeleting
          handleDeleteTask={handleDeleteTask}
          id="edit-task"
          setOpen={setIsEditing}
        />
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
