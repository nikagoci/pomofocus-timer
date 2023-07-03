import Dropdown from "./dropdown";
import AddTask from "./add-task";

export default function Tasks() {
  return (
    <div className="flex flex-col max-w-[550px] mx-auto">
      <div className="flex justify-between py-4 border-b-2 border-[rgba(255,255,255,0.6)]">
        <h2 className="text-xl font-bold">Tasks</h2>
        <Dropdown />
      </div>
      <AddTask />
    </div>
  );
}
