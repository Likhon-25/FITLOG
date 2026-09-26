import React from "react";

const loading = () => {
  return (
    <main
      className="animate-pulse"
      aria-busy="true"
      aria-label="Loading workout library"
    >
      <section className="w-full px-5 py-8 md:px-10 md:py-10">
        <div className="container mx-auto flex min-h-118.75 flex-col justify-between overflow-hidden rounded-2xl bg-[#15171d] px-8 md:flex-row md:items-center md:px-12 lg:px-16">
          <div className="w-full space-y-5 py-12 md:max-w-162.5 md:py-0">
            <div className="h-3 w-28 rounded bg-neutral-700" />
            <div className="space-y-3">
              <div className="h-10 w-11/12 rounded bg-neutral-700 md:h-14" />
              <div className="h-10 w-3/4 rounded bg-neutral-700 md:h-14" />
            </div>
            <div className="max-w-135 space-y-2">
              <div className="h-3 w-full rounded bg-neutral-800" />
              <div className="h-3 w-5/6 rounded bg-neutral-800" />
              <div className="h-3 w-2/3 rounded bg-neutral-800" />
            </div>
            <div className="h-10 w-40 rounded bg-neutral-700" />
          </div>
          <div className="hidden h-97.5 w-90 shrink-0 rounded-xl bg-neutral-800 md:block lg:w-100" />
        </div>
      </section>

      <section className="container mx-auto px-5 pb-10">
        <div className="mb-8 space-y-3">
          <div className="h-10 w-64 rounded bg-neutral-800" />
          <div className="h-4 w-80 max-w-full rounded bg-neutral-800" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-neutral-800 bg-[#15171d]"
            >
              <div className="h-87.5 w-full bg-neutral-800" />
              <div className="space-y-4 p-4">
                <div className="flex gap-2">
                  <div className="h-5 w-16 rounded-full bg-neutral-700" />
                  <div className="h-5 w-20 rounded-full bg-neutral-700" />
                </div>
                <div className="h-7 w-3/4 rounded bg-neutral-800" />
                <div className="h-3 w-1/2 rounded bg-neutral-800" />
                <div className="h-px bg-neutral-800" />
                <div className="h-4 w-2/3 rounded bg-neutral-800" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default loading;
