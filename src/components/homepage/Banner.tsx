import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="w-full px-5 py-8 md:px-10 md:py-10">
      <div className="container mx-auto flex min-h-[475px] flex-col items-center justify-between overflow-hidden rounded-2xl bg-[#15171D] px-8 md:flex-row md:px-12 lg:px-16">

        {/* Content */}
        <div className="w-full py-12 md:max-w-[650px] md:py-0">
          <p className="mb-5 text-xs font-bold tracking-[0.18em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-[56px] lg:text-[60px]">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mb-8 max-w-[540px] text-sm leading-7 text-neutral-400 md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="btn border-none bg-lime-400 px-6 text-xs font-extrabold tracking-wide text-black transition hover:bg-lime-300">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image */}
        <div className="hidden h-[390px] w-[360px] shrink-0 items-end justify-center md:flex lg:w-[400px]">
          <Image
            src={bannerImage}
            alt="Workout model"
            width={500}
            height={500}
            className="h-[390px] w-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;