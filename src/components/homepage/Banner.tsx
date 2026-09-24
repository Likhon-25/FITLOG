import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="w-full px-5 md:px-10 py-10  ">
      <div className="mx-auto min-h-[475px] bg-[#15171D]  rounded-none px-8 md:px-12 lg:px-12 flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-lg container mx-auto">

        {/* Content */}
        <div className="w-full  py-10 md:py-0">
          <p className="text-lime-400 font-bold text-[11px] tracking-[0.15em] mb-5">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-white text-4xl md:text-[48px] font-extrabold leading-[1.02] mb-5">
            TRAIN WITH INTENT. LOG  <br /> EVERY SET.
          </h1>

          <p className="text-neutral-400 text-sm md:text-base leading-6 max-w-[500px] mb-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="btn bg-lime-400 hover:bg-lime-300 border-none text-black font-bold text-xs px-5">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image */}
        <div className="hidden md:flex w-[280px] h-[330px] items-end justify-center">
          <Image
            src={bannerImage}
            alt="Workout model"
            className="w-auto object-contain"
            width={400}
            height={250}
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;