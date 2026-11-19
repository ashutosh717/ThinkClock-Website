"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

const HomeCurtainContext = createContext<boolean | null>(null);

export function HomeCurtainProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [entry, setEntry] = useState(() => ({
    currentPathname: pathname,
    hasLeftHome: false,
  }));

  if (pathname !== entry.currentPathname) {
    setEntry({
      currentPathname: pathname,
      hasLeftHome: entry.hasLeftHome || entry.currentPathname === "/",
    });
  }

  const shouldPlay = pathname === "/" && !entry.hasLeftHome;

  return (
    <HomeCurtainContext.Provider value={shouldPlay}>
      {children}
    </HomeCurtainContext.Provider>
  );
}

export function useShouldPlayHomeCurtain() {
  const shouldPlay = useContext(HomeCurtainContext);

  if (shouldPlay === null) {
    throw new Error("useShouldPlayHomeCurtain must be used within HomeCurtainProvider");
  }

  return shouldPlay;
}
