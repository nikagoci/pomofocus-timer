import { AiOutlinePlusCircle } from "react-icons/ai";

export default function AddTask() {
  return (
    <button className="transform duration-150 flex justify-center items-center gap-x-2 cursor-pointer border-2 border-dashed py-6 mt-8 border-[rgba(255,255,255,0.6)] bg-transparent-white hover:border-[rgba(255,255,255,0.8)]">
      <AiOutlinePlusCircle size={20} />
      <div className="text-lg">Add Task</div>
    </button>
  );
}
