"use client";

import { useContext, useState } from "react";
import { GymContext } from "@/components/context/GymContext";
import PlanBooks from "@/components/shared/PlanBooks";
import SaveBooks from "@/components/shared/SaveBooks";

type SortOption = "" | "duration" | "rating" | "calories";

const MyPlanPage = () => {
  const { todayPlan, saveLeter } = useContext(GymContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("saved");
  const [sortBy, setSortBy] = useState<SortOption>("");
  const activePlans = activeTab === "today" ? todayPlan : saveLeter;
  const sortedPlans = sortBy
    ? [...activePlans].sort((firstPlan, secondPlan) => {
        if (sortBy === "duration") {
          return secondPlan.duration - firstPlan.duration;
        }

        if (sortBy === "rating") {
          return secondPlan.rating - firstPlan.rating;
        }

        return secondPlan.caloriesBurned - firstPlan.caloriesBurned;
      })
    : activePlans;
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

      <div className="rounded-xl border border-neutral-800 bg-[#15171d] p-1">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="tabs tabs-box">
            <button
              type="button"
              className={`tab rounded-lg px-6 text-sm font-semibold ${
                activeTab === "today"
                  ? "bg-[#20232b] text-white"
                  : "text-[#8A92A0]"
              }`}
              aria-selected={activeTab === "today"}
              onClick={() => setActiveTab("today")}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              className={`tab rounded-lg px-6 text-sm font-semibold ${
                activeTab === "saved"
                  ? "bg-[#20232b] text-white"
                  : "text-[#8A92A0]"
              }`}
              aria-selected={activeTab === "saved"}
              onClick={() => setActiveTab("saved")}
            >
              Saved
            </button>
          </div>

          <label className="flex items-center gap-2 px-2 text-xs text-[#8A92A0]">
            <span>Sort By</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortOption)}
              className="rounded-lg border border-neutral-700 bg-[#20232b] px-3 py-2 text-xs text-white outline-none focus:border-lime-400"
              aria-label="Sort plans by"
            >
              <option value="">Choose metric</option>
              <option value="duration">Duration</option>
              <option value="rating">Rating</option>
              <option value="calories">Calories</option>
            </select>
          </label>
        </div>

        <div className="mt-3 rounded-xl border border-neutral-800 bg-[#101216] p-5 text-center md:p-6">
          {sortedPlans.length > 0 ? (
            <div className="space-y-4">
              {activeTab === "today"
                ? sortedPlans.map((plan) => (
                    <PlanBooks key={plan.id} plan={plan} />
                  ))
                : sortedPlans.map((plan) => (
                    <SaveBooks key={plan.id} later={plan} />
                  ))}
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
