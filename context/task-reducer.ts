const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "SET_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "CHANGE_TASK_VALUE":
      const updatedTasks = state.tasks.map((task: Task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.value,
          };
        }

        return task;
      });

      return {
        ...state,
        tasks: updatedTasks,
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== action.payload),
      };

    case "CHANGE_STATUS_VALUE": {
      const { id, status } = action.payload as {
        id: "string";
        status: "checked" | "active";
      };

        const updatedTasks = state.tasks.map((task: Task) => {
          if (status === "active") {
            task.active = false;
          }
          if (task.id === id) {
            return {
              ...task,
              [status]: !task[status],
            };
          }
          return task;
        });

        return {
          ...state,
          tasks: updatedTasks,
        };
    }

    case "CLEAR_FINISHED_TASKS" : {
      const updatedTasks = state.tasks.filter((task: Task) => !task.checked)

      return {
        ...state,
        tasks: updatedTasks
      }
    }
    case "CLEAR_ALL_TASKS": {
      return {
        ...state,
        tasks: []
      }
    }
  }
};

export default reducer;
