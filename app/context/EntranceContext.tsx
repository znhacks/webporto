"use client";

import { createContext, useContext } from "react";

interface EntranceContextType {
  isEntering: boolean;
}

const EntranceContext = createContext<EntranceContextType>({ isEntering: false });

export const useEntrance = () => useContext(EntranceContext);

export function EntranceProvider({
  children,
  isEntering,
}: {
  children: React.ReactNode;
  isEntering: boolean;
}) {
  return (
    <EntranceContext.Provider value={{ isEntering }}>
      {children}
    </EntranceContext.Provider>
  );
}
