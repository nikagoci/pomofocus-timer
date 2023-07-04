import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  primary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, primary, onClick, type }: Props) {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={`${
        primary ? "bg-[rgb(34,34,34)] text-white px-5" : "text-[rgb(136,136,136)]"
      }  py-2  opacity-90 hover:opacity-100 rounded-md duration-150 transform`}
    >
      {children}
    </button>
  );
}
