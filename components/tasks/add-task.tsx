import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../shared/button";
import { TaskContext } from "@/context/task-context";

const barVariants = {
  initial: { scaleY: 0, originY: 0.5 },
  animate: { scaleY: 1, originY: 0.5 },
  exit: { scaleY: 0, originY: 0.5 },
};

interface Props {
  setInputValueChange: Dispatch<SetStateAction<number>>
}

export default function AddTask({ setInputValueChange }: Props) {
  const [isAdding, setIsAdding] = useState(false);
  const [value, setValue] = useState("");

  const { setInputValue } = useContext(TaskContext);

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
      (e.target as Element).closest("#add-task")
    ) {
      return;
    }
    setIsAdding(false);
  };

  const addTask = () => {
    setIsAdding(true);
    
  };

  const endTask = () => {
    setIsAdding(false);
  };


 
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputValueChange(prev => prev + 1)

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
        <motion.form
          className="flex flex-col mt-8 bg-white rounded-xl"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={barVariants}
          onSubmit={submitHandler}
          id="add-task"
        >
          <input
            placeholder="What are you working on?"
            className="px-4 py-8 text-2xl font-bold text-black border-none outline-none rounded-xl"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <div className="flex justify-end p-4 bg-[#efefef] gap-x-4 rounded-b-xl">
            <Button onClick={endTask}>Cancel</Button>
            <Button type="submit" primary>
              Save
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
