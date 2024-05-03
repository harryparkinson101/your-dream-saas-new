/* TODO: Need to read next docs and figure out how to use layout.jsx and page.jsx again */

"use client"
import React from "react";


const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <div className="py-8 flex items-center justify-center lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

