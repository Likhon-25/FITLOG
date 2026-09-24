"use client";

import { useContext } from "react";
import { GymContext } from "@/components/context/GymContext";
import PlanBooks from "@/components/shared/PlanBooks";
import SaveBooks from "@/components/shared/SaveBooks";

const MyPlanPage = () => {
  const { todayPlan, saveLeter } = useContext(GymContext);
  return (
    <div className="container mx-auto my-10 px-4">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box rounded-xl border border-neutral-800 bg-[#15171d] p-1">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab mb-4 rounded-lg px-6 text-sm font-semibold text-[#8A92A0] checked:bg-[#20232b] checked:text-white"
          aria-label="Today's Plan"
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
          defaultChecked
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