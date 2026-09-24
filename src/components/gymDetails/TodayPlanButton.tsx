"use client";

import { useContext } from "react";
import { GymContext } from "../context/GymContext";
import { IGym } from "@/types/Gym.type";

const TodayPlanButton = ({gData} : {gData: IGym}) => {
  const { todayPlan, setTodayPlan } = useContext(GymContext);

  const handleTodayBtn = () => {
    if (todayPlan.find((gym) => gym.id === gData.id)) return;

    setTodayPlan([...todayPlan, gData]);
  };

  return (
    <div>
      <button
        onClick={handleTodayBtn}
        className="rounded-md bg-lime-400 px-5 py-3 text-[10px] font-extrabold uppercase tracking-wide text-black transition hover:bg-lime-300"
      >
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default TodayPlanButton;
