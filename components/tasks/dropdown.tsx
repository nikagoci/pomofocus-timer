import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { BiSave } from "react-icons/bi";
import MenuButton from "../shared/menu-button";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import { BsTrash } from "react-icons/bs";

export default function Dropdown() {
  return (
    <div className="z-10 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center p-2 space-x-1 text-white rounded cursor-pointer opacity-90 hover:opacity-100 bg-transparent-black">
          <HiDotsVertical size={20} />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[rgb(241,238,238)]" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`}
                  >
                    <IoIosRemoveCircleOutline className="mr-2" size={19} />
                    Clear Finished Tasks
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[rgb(241,238,238)]" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`}
                  >
                    <BiSave className="mr-2" size={19} />
                    Save as template
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[rgb(241,238,238)]" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`}
                  >
                    <AiOutlinePlus className="mr-2" size={19} />
                    Add from templates
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[rgb(241,238,238)] " : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`}
                  >
                    <BsTrash className="mr-2" size={19} />
                    Clear all tasks
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
