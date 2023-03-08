import Image from "next/image";
import MenuButton from "../shared/menu-button";

import {HiOutlineDocumentReport} from 'react-icons/hi'
import {IoIosSettings} from 'react-icons/io'
import {MdAccountCircle} from 'react-icons/md'


export default function Navbar() {
  return (
    <div className="w-full py-3">
      <div className="flex items-center mx-auto w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] justify-between border-b border-transparent-white pb-3">
        <div className="text-white flex items-center space-x-1">
          <Image
            src="/pomo-icon.png"
            alt="Pomodoro Icon"
            width={20}
            height={20}
          />
          <h3 className="font-bold text-lg">Pomofocus</h3>
        </div>
        <div className="flex space-x-4">
            <MenuButton icon={<HiOutlineDocumentReport size={20} />} content='Report' />
            <MenuButton icon={<IoIosSettings size={20} />} content='Setting' />
            <MenuButton icon={<MdAccountCircle size={20} />} content='Login' />
        </div>
      </div>
    </div>
  );
}
