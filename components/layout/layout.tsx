import { ReactNode } from "react";
import Navbar from "./navbar";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <header className="bg-primary h-screen w-full">
            <Navbar />
            <main>
                {children}
            </main>
        </header>
    )
}