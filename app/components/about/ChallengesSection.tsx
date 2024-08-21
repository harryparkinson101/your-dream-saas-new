"use client"
import React from 'react';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import Content from "../../data/about"
const ChallengesSection = () => {

  return (
    <section className="py-10 w-full mt-6">
      <div className="max-w-7xl mx-auto px-4  py-2  rounded-xl shadow-indigo-600 shadow-xl border-t border-indigo-500">
        <h2 className="text-3xl font-bold mb-8 text-white text-center pt-6">Rome wasn't built in a day</h2>
        {/* Integrate the StickyScroll component with your challenges content */}
        <StickyScroll content={Content} />
      </div>
    </section>
  );
}

export default ChallengesSection;