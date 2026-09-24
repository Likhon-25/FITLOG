"use client";

import { useContext, useState } from "react";
import { GymContext } from "@/components/context/GymContext";
import PlanBooks from "@/components/shared/PlanBooks";
import SaveBooks from "@/components/shared/SaveBooks";

const MyPlanPage = () => {
  const { todayPlan, saveLeter } = useContext(GymContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("saved");
  const activePlans = activeTab === "today" ? todayPlan : saveLeter;
  const totalMinutes = activePlans.reduce(
    (total, plan) => total + plan.duration,
    0,
  );
  const totalCalories = activePlans.reduce(
    (total, plan) => total + plan.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="mt-15 mb-10">
        <h2 className="text-4xl font-bold mb-2">MY PLAN</h2>
        <p className="text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* total */}
      <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-800 bg-[#15171d] md:grid-cols-3">
        <div className="border-b border-neutral-800 px-6 py-5 md:border-b-0 md:border-r">
          <p className="text-sm text-[#8A92A0]">Exercises</p>
          <h3 className="mt-1 text-4xl font-black text-lime-400">
            {activePlans.length}
          </h3>
        </div>

        <div className="border-b border-neutral-800 px-6 py-5 md:border-b-0 md:border-r">
          <p className="text-sm text-[#8A92A0]">Minutes</p>
          <h3 className="mt-1 text-4xl font-black text-white">
            {totalMinutes}
          </h3>
        </div>

        <div className="px-6 py-5">
          <p className="text-sm text-[#8A92A0]">Calories</p>
          <h3 className="mt-1 text-4xl font-black text-white">
            {totalCalories}
          </h3>
        </div>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box rounded-xl border border-neutral-800 bg-[#15171d] p-1">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab mb-4 rounded-lg px-6 text-sm font-semibold text-[#8A92A0] checked:bg-[#20232b] checked:text-white"
          aria-label="Today's Plan"
          checked={activeTab === "today"}
          onChange={() => setActiveTab("today")}
        />

        <div className="tab-content rounded-xl border border-neutral-800 bg-[#101216] p-5 text-center md:p-6">
          {todayPlan.length > 0 ? (
            <div className="space-y-4">
              {todayPlan.map((plan) => {
                return <PlanBooks key={plan.id} plan={plan} />;
              })}
            </div>
          ) : (
            <div className="py-14">
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                NOTHING HERE YET
              </h2>

              <p className="mb-10 mt-2 text-sm text-[#A1A1AA]">
                Browse the library and add a lift to get today moving.
              </p>

              <button className="rounded-full bg-lime-400 px-6 py-3 text-[10px] font-extrabold uppercase tracking-wide text-black transition hover:bg-lime-300">
                Go to workouts
              </button>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-lg px-6 text-sm font-semibold text-[#8A92A0] checked:bg-[#20232b] checked:text-white"
          aria-label="Saved"
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />

        <div className="tab-content rounded-xl border border-neutral-800 bg-[#101216] p-5 text-center md:p-6">
          {saveLeter.length > 0 ? (
            <div className="space-y-4">
              {saveLeter.map((later) => {
                return <SaveBooks key={later.id} later={later} />;
              })}
            </div>
          ) : (
            <div className="py-14">
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                NOTHING HERE YET
              </h2>

              <p className="mb-10 mt-2 text-sm text-[#A1A1AA]">
                Browse the library and add a lift to get today moving.
              </p>

              <button className="rounded-full bg-lime-400 px-6 py-3 text-[10px] font-extrabold uppercase tracking-wide text-black transition hover:bg-lime-300">
                Go to workouts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
