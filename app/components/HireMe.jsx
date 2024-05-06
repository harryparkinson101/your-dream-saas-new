import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

export const HireMe = () => {
  return (
    <div
      className=" absolute left-4 bottom-4 flex flex-col items-center justify-center
    overflow-hidden md:hidden sm:hidden lg:hidden"
    >
      <div className="w-48 h-48 flex items-center justify-center relative md:w-28 md:h-28 lg:mt-10 lg:pt-10">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow duration-200"}
        />
        {/* Need to add professional email */}
        <Link
          href="mailto:info@yourdreamsaas"
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border border-solid
bg-primary rounded-full text-light w-20 h-20 font-semibold hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-400 hover:border-dark hover:scale-105 hover:skew-x-6 hover:skew-y-6 hover:text-white dark:text-white dark:bg-primary
dark:hover:text-white dark:hover:border-light dark:shadow-light/25 md:h-16 md:w-16 md:text-[10px] lg:mt-5
"
        >
          Hire Us
        </Link>
      </div>
    </div>
  );
};
