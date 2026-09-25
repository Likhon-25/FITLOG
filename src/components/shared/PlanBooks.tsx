import { IGym } from "@/types/Gym.type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { GymContext } from "@/components/context/GymContext";
import { CiStopwatch } from "react-icons/ci";
import { FaFire, FaRegStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

interface IPlanBooks {
  plan: IGym;
}

const PlanBooks = ({ plan }: IPlanBooks) => {
  const { todayPlan, setTodayPlan, donePlan, setDonePlan } =
    useContext(GymContext);

  const handleDelete = () => {
    setTodayPlan(todayPlan.filter((item) => item.id !== plan.id));
    toast.error(`Remove Today Plan - ${plan.name}`);
  };

  const handleMarkDone = () => {
    setTodayPlan((currentPlans) =>
      currentPlans.filter((item) => item.id !== plan.id),
    );

    setDonePlan((currentDone) => {
      if (currentDone.some((item) => item.id === plan.id)) {
        return currentDone;
      }

      return [...currentDone, plan];
    });

    toast.success(`Workout marked as done - ${plan.name}`);
  };

  return (
    <div className="group flex items-center justify-between gap-5 rounded-2xl border border-neutral-800 bg-[#15171d] p-4 transition-all duration-300 hover:border-neutral-700">
      {/* Left: Image + Content */}
      <div className="flex min-w-0 items-center gap-5">
        {/* Image */}
        <div className="shrink-0 overflow-hidden rounded-lg">
          <Image
            src={plan.image}
            alt={plan.name}
            width={144}
            height={80}
            className="h-20 w-36 object-cover"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 text-left">
          <h2 className="truncate text-base font-extrabold uppercase tracking-wide text-white md:text-lg">
            {plan.name}
          </h2>

          <p className="mt-1 text-xs text-[#8A92A0]">{plan.equipment}</p>

          <div className="mt-3 flex items-center gap-4 text-xs text-[#8A92A0]">
            <div className="flex items-center gap-1.5">
              <CiStopwatch className="text-sm text-lime-400" />
              <span>{plan.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaFire className="text-[10px] text-lime-400" />
              <span>{plan.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaRegStar className="text-[10px] text-lime-400" />
              <span>{plan.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex shrink-0 items-center gap-3">
        <Link
          href={`/Gym/${plan.id}`}
          className="rounded-full border border-neutral-700 px-5 py-2.5 text-xs font-medium text-neutral-300 transition hover:border-neutral-500 hover:bg-neutral-800 hover:text-white"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={handleMarkDone}
          className="flex items-center gap-1.5 rounded-full bg-lime-400 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-lime-300"
        >
          <IoCheckmark className="text-base" />
          Mark as Done
        </button>

        <button
          type="button"
          aria-label={`Remove ${plan.name} from today's plan`}
          onClick={handleDelete}
          className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-800 hover:text-red-400"
        >
          <MdDeleteForever className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default PlanBooks;
