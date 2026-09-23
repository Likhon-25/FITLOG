import React from 'react';
import Image from 'next/image';
import bannerImage from "@/assets/banner.png"

const Banner = () => {
    return (
        <div className="bg-neutral-900 rounded-2xl px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
                <p className="text-lime-400 font-semibold text-sm tracking-widest mb-4">WORKOUT LIBRARY</p>
                <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    TRAIN WITH INTENT. LOG EVERY SET.
                </h1>
                <p className="text-neutral-400 mb-8">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-6 py-3 rounded-lg">
                    BROWSE WORKOUTS
                </button>
            </div>
            <div className="flex-shrink-0">
                <Image src={bannerImage} alt="Workout model" className="w-80 md:w-96 h-auto" />
            </div>
        </div>
    );
};

export default Banner;