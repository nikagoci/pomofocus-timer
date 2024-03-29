import { Dispatch, Fragment, SetStateAction, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";

import TimerSetting from "./timer-setting";
import { PomodoroContext } from "@/context/pomodoro-context";
import schema from "@/libs/setting-schema";
import { isObjectEmpty } from "@/libs/usable-functions";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface InputValues {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
  autoBreaks: boolean;
  autoPomodoros: boolean;
}



export default function Modal({ open, setOpen }: Props) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<InputValues>({ resolver: zodResolver(schema) });
  const {
    addPomodoro,
    addShort,
    addLong,
    addAutoBreaks,
    addAutoPomodoros,
    addLongBreakInterval,
  } = useContext(PomodoroContext);

  const onSubmit = (inputValues: InputValues) => {
    addPomodoro(inputValues.pomodoro);
    addShort(inputValues.shortBreak);
    addLong(inputValues.longBreak);
    addAutoBreaks(inputValues.autoBreaks);
    addAutoPomodoros(inputValues.autoPomodoros);
    addLongBreakInterval(inputValues.longBreakInterval);

    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full ">
              <div className="absolute top-7 right-7 ">
                <AiOutlineClose
                  size={20}
                  className="cursor-pointer opacity-30 hover:opacity-100"
                  onClick={() => setOpen(false)}
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} name="setting-form">
                <div className="px-4 pt-5 pb-4 sm:p-6">
                  <div className="pb-4 border-b">
                    <h4 className="font-bold tracking-wide text-dark">
                      Setting
                    </h4>
                  </div>
                  <TimerSetting register={register} control={control} />
                </div>
                <div className="bg-[rgb(239,239,239)] py-4 flex items-center justify-end pr-4">
                  <button
                    className={`bg-[rgb(34,34,34)] text-white py-2 px-6 rounded opacity-90 hover:opacity-100 transition duration-300 ${
                      isObjectEmpty(errors) ? "" : "disabled:opacity-60"
                    }`}
                    type="submit"
                    disabled={!isObjectEmpty(errors)}
                  >
                    OK
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
