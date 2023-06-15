import { PomodoroContextProvider } from "@/context/pomodoro-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PomodoroContextProvider>
      <Component {...pageProps} />
    </PomodoroContextProvider>
  );
}
