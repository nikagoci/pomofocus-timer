import { HiDotsVertical } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";

import MenuButton from "../shared/menu-button";
import Dropdown from "./dropdown";

export default function Tasks() {
  return (
    <div className="flex flex-col max-w-[550px] mx-auto">
      <div className="flex justify-between py-4 border-b-2 border-[rgba(255,255,255,0.6)]">
        <h2 className="text-xl font-bold">Tasks</h2>
        {/* <MenuButton icon={<HiDotsVertical size={20} />} /> */}
        <Dropdown />
      </div>
      <div className="transform duration-150 flex justify-center items-center gap-x-2 cursor-pointer border-2 border-dashed py-6 mt-8 border-[rgba(255,255,255,0.6)] bg-transparent-white hover:border-[rgba(255,255,255,0.8)]">
        <AiOutlinePlusCircle size={20} />
        <div className="text-lg">Add Task</div>
      </div>
    </div>
  );
}
