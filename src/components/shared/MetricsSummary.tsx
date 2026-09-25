import { IGym } from "@/types/Gym.type";

interface MetricsSummaryProps {
  plans: IGym[];
}

const MetricsSummary = ({ plans }: MetricsSummaryProps) => {
  const totalMinutes = plans.reduce((total, plan) => total + plan.duration, 0);
  const totalCalories = plans.reduce(
    (total, plan) => total + plan.caloriesBurned,
    0,
  );

  return (
    <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-800 bg-[#15171d] md:grid-cols-3">
      <div className="border-b border-neutral-800 px-6 py-5 md:border-b-0 md:border-r">
        <p className="text-sm text-[#8A92A0]">Exercises</p>
        <h3 className="mt-1 text-4xl font-black text-lime-400">
          {plans.length}
        </h3>
      </div>

      <div className="border-b border-neutral-800 px-6 py-5 md:border-b-0 md:border-r">
        <p className="text-sm text-[#8A92A0]">Minutes</p>
        <h3 className="mt-1 text-4xl font-black text-white">{totalMinutes}</h3>
      </div>

      <div className="px-6 py-5">
        <p className="text-sm text-[#8A92A0]">Calories</p>
        <h3 className="mt-1 text-4xl font-black text-white">{totalCalories}</h3>
      </div>
    </div>
  );
};

export default MetricsSummary;
