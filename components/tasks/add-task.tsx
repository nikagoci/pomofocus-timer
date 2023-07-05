import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

import { TaskContext } from "@/context/task-context";
import Form from "../shared/form";

interface Props {
  setInputValueChange: Dispatch<SetStateAction<number>>;
}

export default function AddTask({ setInputValueChange }: Props) {
  const [isAdding, setIsAdding] = useState(false);
  const [value, setValue] = useState("");

  const { setInputValue } = useContext(TaskContext);

  const addTask = () => {
    setIsAdding(true);
  };

  const handleEndTask = () => {
    setIsAdding(false);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputValueChange((prev) => prev + 1);

    setInputValue(value);
    setValue("");
    setIsAdding(false);
  };

  return (
    <AnimatePresence>
      {!isAdding ? (
        <motion.button
          onClick={addTask}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="transform duration-150 flex justify-center items-center gap-x-2 cursor-pointer border-2 border-dashed py-6 mt-8 border-[rgba(255,255,255,0.6)] bg-transparent-white hover:border-[rgba(255,255,255,0.8)]"
        >
          <AiOutlinePlusCircle size={20} />
          <div className="text-lg">Add Task</div>
        </motion.button>
      ) : (
        <Form
          submitHandler={submitHandler}
          value={value}
          setValue={setValue}
          handleEndTask={handleEndTask}
          id="add-task"
          setOpen={setIsAdding}
        />
      )}
    </AnimatePresence>
  );
}
