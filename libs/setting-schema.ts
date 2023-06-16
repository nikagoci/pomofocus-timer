export interface InputValues {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
  autoBreaks: boolean;
  autoPomodoros: boolean;
}

import { z } from "zod";

const schema = z.object({
    pomodoro: z.number({ invalid_type_error: "Pomodoro Should Be A Number" }).positive().max(1000),
    shortBreak: z.number({ invalid_type_error: "Pomodoro Should Be A Number" }).positive().max(1000),
    longBreak: z.number({ invalid_type_error: "Pomodoro Should Be A Number" }).positive().max(1000),
    longBreakInterval: z.number({ invalid_type_error: "Pomodoro Should Be A Number" }).positive().max(50),
    autoBreaks: z.boolean(),
    autoPomodoros: z.boolean(),
})

export default schema