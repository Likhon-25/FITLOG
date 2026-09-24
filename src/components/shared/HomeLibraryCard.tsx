import { IGym } from "@/types/Gym.type";
import Image from "next/image";
import Link from "next/link";
import { CiStopwatch } from "react-icons/ci";
import { FaFire, FaRegStar } from "react-icons/fa";

interface IHomeLibraryProps {
  data: IGym;
}

const HomeLibraryCard = ({ data }: IHomeLibraryProps) => {
  return (
    <Link href={`/Gym/${data.id}`}  className="group overflow-hidden rounded-xl border border-neutral-800 bg-[#15171d] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          width={200}
          height={90}
          className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {Object.values(data.muscleGroups).map((item) => (
            <span
              key={item}
              className="rounded-full bg-lime-400 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-black"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h2 className="mt-4 text-2xl font-extrabold uppercase tracking-wide text-white">
          {data.equipment}
        </h2>

        <p className="mt-1 text-xs text-neutral-500">
          {data.equipment}
        </p>

        {/* Divider */}
        <div className="my-3 h-px bg-neutral-800" />

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <CiStopwatch className="text-sm text-neutral-500" />
            <span>{data.duration}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaFire className="text-[11px] text-neutral-500" />
            <span>{data.caloriesBurned}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaRegStar className="text-[11px] text-neutral-500" />
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeLibraryCard;