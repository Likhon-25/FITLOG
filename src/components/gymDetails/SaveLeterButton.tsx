"use client";

import { useContext } from "react";
import { GymContext } from "../context/GymContext";
import { IGym } from "@/types/Gym.type";

const SaveLeterButton = ({ gData }: { gData: IGym }) => {
  const { saveLeter, setSaveLeter } = useContext(GymContext);

  const handleSaveBtn = () => {
    if (saveLeter.find((gym) => gym.id === gData.id)) return;

    setSaveLeter( [...saveLeter, gData]);
  };


  return (
    <div>
      <button
        onClick={handleSaveBtn}
        className="rounded-md border border-neutral-700 bg-transparent px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-neutral-300 transition hover:border-neutral-500 hover:bg-neutral-800 hover:text-white"
      >
        Save for later
      </button>
    </div>
  );
};

export default SaveLeterButton;
