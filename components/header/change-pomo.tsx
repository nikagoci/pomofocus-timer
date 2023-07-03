import { Dispatch, SetStateAction } from "react";

import { focusEnum } from "@/pages";

interface Props {
  setFocus: Dispatch<SetStateAction<focusEnum>>;
  focus: focusEnum;
  title: string;
  pomoFocus: focusEnum;
}

export default function ChangePomo({
  focus,
  setFocus,
  title,
  pomoFocus,
}: Props) {
  const compareFocuses = (curFocus: focusEnum): string => {
    return focus === curFocus ? "bg-transparent-white" : "";
  };

  return (
    <button
      className={`px-3 py-1 rounded-md transform duration-200 ${compareFocuses(
        pomoFocus
      )} `}
      onClick={() => setFocus(pomoFocus)}
    >
      {title}
    </button>
  );
}
