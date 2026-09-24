"use client";

import { IGym } from "@/types/Gym.type";
// import { create } from "domain"; // Removed unused import
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IGymContext {
  todayPlan: IGym[];
  setTodayPlan: Dispatch<SetStateAction<IGym[]>>;
  saveLeter: IGym[];
  setSaveLeter: Dispatch<SetStateAction<IGym[]>>;
}

// export const GymContext = createContext<IGymContext | undefined>(undefined);
export const GymContext = createContext<IGymContext>({
  todayPlan: [],
  setTodayPlan: () => undefined,
  saveLeter: [],
  setSaveLeter: () => undefined,
});

const GymProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IGym[]>([]);
  const [saveLeter, setSaveLeter] = useState<IGym[]>([]);

  const shareData = {
    todayPlan,
    setTodayPlan,
    saveLeter,
    setSaveLeter,
  };

  return (
    <GymContext.Provider value={shareData}>{children}</GymContext.Provider>
  );
};

export default GymProvider;
