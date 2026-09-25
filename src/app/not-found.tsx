import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#101216] px-5 py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative w-full max-w-3xl">
        {/* Top label */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-neutral-800" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-lime-400">
            FITLOG / ERROR
          </span>
          <span className="h-px w-10 bg-neutral-800" />
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#15171D] shadow-2xl">
          
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-neutral-800 px-5 py-4 md:px-7">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-lime-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Workout Library
              </span>
            </div>

            <span className="rounded-full border border-neutral-800 px-3 py-1 text-[9px] font-bold text-neutral-500">
              404
            </span>
          </div>

          {/* Content */}
          <div className="px-6 py-14 text-center md:px-12 md:py-20">
            <div className="relative mx-auto w-fit">
              <h1 className="text-[110px] font-black leading-none tracking-[-0.08em] text-white md:text-[160px]">
                404
              </h1>

              <span className="absolute -right-4 top-2 rotate-3 rounded-md bg-lime-400 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-black md:-right-7 md:top-4">
                Rest Day
              </span>
            </div>

            <div className="mx-auto mt-4 max-w-lg">
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
                THIS WORKOUT DOESN&apos;T EXIST.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#8A92A0]">
                The page you&apos;re looking for may have been removed,
                renamed, or never made it into the library.
              </p>
            </div>

            {/* Fake workout stats */}
            <div className="mx-auto mt-8 grid max-w-md grid-cols-3 overflow-hidden rounded-xl border border-neutral-800 bg-[#101216]">
              <div className="border-r border-neutral-800 px-3 py-4">
                <p className="text-[9px] uppercase tracking-wider text-neutral-600">
                  Sets
                </p>
                <p className="mt-1 text-lg font-black text-neutral-500">00</p>
              </div>

              <div className="border-r border-neutral-800 px-3 py-4">
                <p className="text-[9px] uppercase tracking-wider text-neutral-600">
                  Reps
                </p>
                <p className="mt-1 text-lg font-black text-neutral-500">00</p>
              </div>

              <div className="px-3 py-4">
                <p className="text-[9px] uppercase tracking-wider text-neutral-600">
                  Status
                </p>
                <p className="mt-1 text-lg font-black text-lime-400">OFF</p>
              </div>
            </div>

            {/* Action */}
            <Link
              href="/"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-wider text-black transition duration-200 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.15)]"
            >
              Back to Workout Library
              <span className="text-sm">→</span>
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="h-1 w-full bg-lime-400" />
        </div>

        <p className="mt-5 text-center text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-700">
          Train hard · Log honest
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;