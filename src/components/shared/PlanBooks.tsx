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
  const isDone = donePlan.some((item) => item.id === plan.id);

  const handleDelete = () => {
    setTodayPlan(todayPlan.filter((item) => item.id !== plan.id));
    toast.error(`Remove Today Plan - ${plan.name}`);
  };

  const handleMarkDone = () => {
    if (isDone) return;

    setDonePlan((currentDone) => {
      if (currentDone.some((item) => item.id === plan.id)) {
        return currentDone;
      }

      return [...currentDone, plan];
    });

    toast.success(`Workout marked as done - ${plan.name}`);
  };

  return (
    <div className="group flex flex-col items-stretch gap-4 rounded-2xl border border-neutral-800 bg-[#15171d] p-3 transition-all duration-300 hover:border-neutral-700 sm:p-4 md:flex-row md:items-center md:justify-between md:gap-5">
      {/* Left: Image + Content */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-5">
        {/* Image */}
        <div className="shrink-0 overflow-hidden rounded-lg">
          <Image
            src={plan.image}
            alt={plan.name}
            width={144}
            height={80}
            className="h-16 w-24 object-cover sm:h-20 sm:w-36"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 text-left">
          <h2 className="truncate text-base font-extrabold uppercase tracking-wide text-white md:text-lg">
            {plan.name}
          </h2>

          <p className="mt-1 truncate text-xs text-[#8A92A0]">
            {plan.equipment}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#8A92A0] sm:mt-3 sm:gap-4">
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
      <div className="flex flex-wrap items-center gap-2 md:shrink-0 md:gap-3">
        <Link
          href={`/Gym/${plan.id}`}
          className="min-w-0 flex-1 rounded-full border border-neutral-700 px-3 py-2.5 text-center text-xs font-medium text-neutral-300 transition hover:border-neutral-500 hover:bg-neutral-800 hover:text-white sm:flex-none sm:px-5"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={handleMarkDone}
          disabled={isDone}
          className={`flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2.5 text-xs font-bold transition sm:flex-none sm:px-5 ${
            isDone
              ? "cursor-default bg-[#26351b] text-lime-300"
              : "bg-lime-400 text-black hover:bg-lime-300"
          }`}
        >
          <IoCheckmark className="text-base" />
          {isDone ? "Done" : "Mark as Done"}
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
