import { getAllGimData } from "@/lib/app";
import { IGym } from "@/types/Gym.type";
import Image from "next/image";
import { CiStopwatch } from "react-icons/ci";
import { FaFire, FaRegStar } from "react-icons/fa";
import TodayPlanButton from "@/components/gymDetails/TodayPlanButton";
import SaveLeterButton from "@/components/gymDetails/SaveLeterButton";

interface IGymCardDetailProps {
  params: Promise<{
    gymId: string;
  }>;
}

const GymCardDetail = async ({ params }: IGymCardDetailProps) => {
  const { gymId } = await params;
  const getdata = await getAllGimData();

  const gData = getdata.find((data: IGym) => String(data.id) === String(gymId));

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-300">
        <div className="rounded-2xl border border-neutral-800 bg-[#15171d] p-3 md:p-4">
          <div className="grid overflow-hidden rounded-xl border border-neutral-800 bg-[#101216] lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-100 overflow-hidden lg:min-h-155">
              <Image
                src={gData.image}
                alt={gData.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Details */}
            <div className="p-6 md:p-8 lg:p-10">
              {/* Title */}
              <div>
                <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl">
                  {gData?.name}
                </h1>

                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {gData?.description}
                </p>
              </div>

              {/* Muscle Groups */}
              <div className="mt-5 flex flex-wrap gap-2">
                {gData &&
                  Object.values(gData.muscleGroups).map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-black"
                    >
                      {item}
                    </span>
                  ))}
              </div>

              {/* Information */}
              <div className="mt-6 overflow-hidden rounded-xl border border-neutral-800 bg-[#15171d]">
                <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Equipment
                  </span>
                  <span className="text-xs text-neutral-300">
                    {gData?.equipment}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Difficulty
                  </span>
                  <span className="text-xs text-neutral-300">
                    {gData?.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Sets
                  </span>
                  <span className="text-xs text-neutral-300">
                    {gData?.sets}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Reps
                  </span>
                  <span className="text-xs text-neutral-300">
                    {gData?.reps}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Duration
                  </span>
                  <span className="flex items-center gap-1 text-xs text-neutral-300">
                    <CiStopwatch />
                    {gData?.duration} min
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Calories
                  </span>
                  <span className="flex items-center gap-1 text-xs text-neutral-300">
                    <FaFire className="text-[10px]" />
                    {gData?.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Rating
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-lime-400">
                    <FaRegStar className="text-[10px]" />
                    {gData?.rating}
                  </span>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-7">
                <h2 className="text-xs font-extrabold uppercase tracking-[0.15em] text-white">
                  Instructions
                </h2>

                <div className="mt-4 space-y-3">
                  {gData?.instructions?.map((instruction, index) => (
                    <div
                      key={instruction}
                      className="flex gap-3 text-xs leading-5 text-neutral-400"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] font-bold text-lime-400">
                        {index + 1}
                      </span>

                      <p>{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-wrap gap-3">
                <TodayPlanButton gData={gData}/>

                <SaveLeterButton gData={gData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GymCardDetail;
