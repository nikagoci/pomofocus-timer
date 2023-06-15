import { useReducer, createContext, ReactNode } from "react";
import reducer from "./reducer";

const initialState: ValueIntreface = {
  pomodoro: 25,
  short: 5,
  long: 15,
  autoBreaks: false,
  autoPomodoros: false,
  longBreakInterval: 4,
  addPomodoro: (value: number) => {},
  addShort: (value: number) => {},
  addLong: (value: number) => {},
  addAutoBreaks: (value: boolean) => {},
  addAutoPomodoros: (value: boolean) => {},
  addLongBreakInterval: (value: number) => {},
};

export const PomodoroContext = createContext(initialState);

interface ValueIntreface {
  pomodoro: number;
  short: number;
  long: number;
  autoBreaks: boolean;
  autoPomodoros: boolean;
  longBreakInterval: number;
  addPomodoro: (value: number) => void;
  addShort: (value: number) => void;
  addLong: (value: number) => void;
  addAutoBreaks: (value: boolean) => void;
  addAutoPomodoros: (value: boolean) => void;
  addLongBreakInterval: (value: number) => void;
}

export const PomodoroContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPomodoro = (value: number) => {
    dispatch({ type: "ADD_POMODORO", payload: value });
  };
  const addShort = (value: number) => {
    dispatch({ type: "ADD_SHORT", payload: value });
  };
  const addLong = (value: number) => {
    dispatch({ type: "ADD_LONG", payload: value });
  };
  const addAutoBreaks = (value: boolean) => {
    dispatch({ type: "ADD_AUTO_BREAKS", payload: value });
  };
  const addAutoPomodoros = (value: boolean) => {
    dispatch({ type: "ADD_AUTO_POMODOROS", payload: value });
  };
  const addLongBreakInterval = (value: number) => {
    dispatch({ type: "ADD_LONG_BREAK_INTERVAL", payload: value });
  };

  const value: ValueIntreface = {
    pomodoro: state.pomodoro,
    short: state.short,
    long: state.long,
    autoBreaks: state.autoBreaks,
    autoPomodoros: state.autoPomodoros,
    longBreakInterval: state.longBreakInterval,
    addPomodoro,
    addShort,
    addLong,
    addAutoBreaks,
    addAutoPomodoros,
    addLongBreakInterval,
  };

  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  );
};
