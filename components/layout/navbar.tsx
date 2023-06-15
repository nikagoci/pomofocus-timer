import Image from "next/image";
import {IoIosSettings} from 'react-icons/io'

import MenuButton from "../shared/menu-button";
import Modal from "../modal";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <Modal open={open} setOpen={setOpen} />
    <div className="w-full py-3">
      <div className="flex items-center mx-auto w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] justify-between border-b border-transparent-white pb-3">
        <div className="flex items-center space-x-1 text-white">
          <Image
            src="/pomo-icon.png"
            alt="Pomodoro Icon"
            width={20}
            height={20}
          />
          <h3 className="text-lg font-bold">Pomofocus</h3>
        </div>
        <div className="flex space-x-4">
            <MenuButton icon={<IoIosSettings size={20} />} content='Setting' handleClick={() => setOpen(true)} />
        </div>
      </div>
    </div>
    </>
  );
}
