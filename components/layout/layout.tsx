import { ReactNode } from "react";

import Navbar from "./navbar";
import { focusEnum } from "@/pages";

interface Props {
  children: ReactNode;
  focus: focusEnum;
}

export default function Layout({ children, focus }: Props) {
  return (
    <header
      className={`${focus === focusEnum.pomodoro ? "bg-primary" : ""} ${
        focus === focusEnum.short ? "bg-secondary" : ""
      } ${
        focus === focusEnum.long ? "bg-tertiary" : ""
      } tranform duration-500 h-screen w-full`}
    >
      <Navbar />
      <main>{children}</main>
    </header>
  );
}
