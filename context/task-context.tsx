import { useReducer, createContext, ReactNode } from "react";
import reducer from "./task-reducer";

const initialState: ValueIntreface = {
  tasks: [],
  inputValue: "",
  setInputValue: (value: string) => {},
  setTask: (task: Task) => {},
  changeTaskValue: (info: { id: string; value: string }) => {},
  deleteTask: (id: string) => {},
  changeStatusValue: (info: { id: string; status: "checked" | "active" }) => {},
  clearFinishedTasks: () => {},
  clearAllTasks: () => {},
};

export const TaskContext = createContext(initialState);

interface ValueIntreface {
  tasks: Task[];
  inputValue: string;
  setInputValue: (value: string) => void;
  setTask: (task: Task) => void;
  changeTaskValue: (info: { id: string; value: string }) => void;
  deleteTask: (id: string) => void;
  changeStatusValue: (info: {
    id: string;
    status: "checked" | "active";
  }) => void;
  clearFinishedTasks: () => void
  clearAllTasks: () => void
}

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setInputValue = (value: string) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: value });
  };

  const setTask = (task: Task) => {
    dispatch({ type: "SET_TASK", payload: task });
  };

  const changeTaskValue = (info: { id: string; value: string }) => {
    dispatch({ type: "CHANGE_TASK_VALUE", payload: info });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const changeStatusValue = (info: {
    id: string;
    status: "checked" | "active";
  }) => {
    dispatch({ type: "CHANGE_STATUS_VALUE", payload: info });    
  };

  const clearFinishedTasks = () => {
    dispatch({ type: "CLEAR_FINISHED_TASKS"} )
  }

  const clearAllTasks= () => {
    dispatch({type: "CLEAR_ALL_TASKS"})
  }


  const value: ValueIntreface = {
    tasks: state.tasks,
    inputValue: state.inputValue,
    setInputValue,
    setTask,
    changeTaskValue,
    deleteTask,
    changeStatusValue,
    clearFinishedTasks,
    clearAllTasks
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
