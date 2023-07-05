import { motion } from "framer-motion";

import Button from "../shared/button";
import { Dispatch, FormEvent, SetStateAction, useEffect } from "react";

const barVariants = {
  initial: { scaleY: 0, originY: 0.5 },
  animate: { scaleY: 1, originY: 0.5 },
  exit: { scaleY: 0, originY: 0.5 },
};

interface Props {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleEndTask: () => void;
  isDeleting?: boolean;
  handleDeleteTask?: () => void;
  id: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Form({
  submitHandler,
  value,
  setValue,
  handleEndTask,
  isDeleting,
  handleDeleteTask,
  id,
  setOpen,
}: Props) {
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
      (e.target as Element).closest(`#${id}`)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
      <motion.form
        className="flex flex-col mt-8 bg-white rounded-xl"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={barVariants}
        onSubmit={submitHandler}
        id={id}
      >
        <input
          placeholder="What are you working on?"
          className="px-4 py-8 text-2xl font-bold text-black border-none outline-none rounded-xl"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          autoFocus
        />

        {isDeleting ? (
          <div className="flex justify-between p-4 bg-[#efefef]  rounded-b-xl">
            <Button onClick={handleDeleteTask}>Delete</Button>
            <div className="flex gap-x-4">
              <Button onClick={handleEndTask}>Cancel</Button>
              <Button type="submit" primary>
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex justify-end p-4 bg-[#efefef] gap-x-4 rounded-b-xl">
            <Button onClick={handleEndTask}>Cancel</Button>
            <Button type="submit" primary>
              Save
            </Button>
          </div>
        )}
      </motion.form>
  );
}