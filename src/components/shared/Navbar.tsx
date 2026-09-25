"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useContext } from "react";
import { GymContext } from "@/components/context/GymContext";

const Navbar = () => {
  const { todayPlan, saveLeter } = useContext(GymContext);
  const pathname = usePathname();
  const isMyPlanActive = pathname.startsWith("/myPlan");

  const navigationLinks = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
            !isMyPlanActive
              ? "bg-lime-400 text-black"
              : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
          }`}
          aria-current={!isMyPlanActive ? "page" : undefined}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myPlan"
          className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
            isMyPlanActive
              ? "bg-lime-400 text-black"
              : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
          }`}
          aria-current={isMyPlanActive ? "page" : undefined}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto border-b border-neutral-800 bg-[#000] px-5 py-4">
      {/* Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm px-2 text-white hover:bg-neutral-800 lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-xl border border-neutral-800 bg-[#15171d] p-2 shadow-2xl"
          >
            {navigationLinks}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Image src={logo} alt="Nav Logo" className="h-7 w-7 object-contain" />

          <Link
            href={"/"}
            className="px-1 text-sm font-extrabold tracking-[0.18em] text-white"
          >
            FIT<span className="text-lime-400">LOG</span>
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-1 px-1">
          {navigationLinks}
        </ul>
      </div>

      {/* Plan / Saved */}
      <div className="navbar-end gap-3 text-xs">
        <Link
          href={"/myPlan"}
          className="flex items-center gap-2 rounded-full border border-neutral-800 bg-[#15171d] px-3 py-2 transition hover:border-neutral-700"
        >
          <span className="font-semibold text-neutral-400">Plan</span>

          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1 text-[10px] font-extrabold text-black">
            {todayPlan.length}
          </span>
        </Link>

        <Link
          href={"/myPlan"}
          className="flex items-center gap-2 rounded-full border border-neutral-800 bg-[#15171d] px-3 py-2 transition hover:border-neutral-700"
        >
          <span className="font-semibold text-neutral-400">Saved</span>

          <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-neutral-600 px-1 text-[10px] font-bold text-neutral-300">
            {saveLeter.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
