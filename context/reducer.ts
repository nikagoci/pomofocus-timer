const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_POMODORO":
      return {
        ...state,
        pomodoro: action.payload,
      };
    case "ADD_SHORT":
      return {
        ...state,
        short: action.payload,
      };
    case "ADD_LONG":
      return {
        ...state,
        long: action.payload,
      };
    case "ADD_AUTO_BREAKS":
      return {
        ...state,
        autoBreaks: action.payload,
      };
    case "ADD_AUTO_POMODOROS":
      return {
        ...state,
        autoPomodoros: action.payload,
      };
    case "ADD_LONG_BREAK_INTERVAL":
      return {
        ...state,
        longBreakInterval: action.payload,
      };
  }
};

export default reducer;
