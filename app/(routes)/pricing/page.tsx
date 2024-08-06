// pages/pricing.tsx

"use client";

import React from "react";
import { Tabs, Tab } from "../../components/ui/tabs";
import { SparklesCore } from "../../components/ui/sparkles";

const pricingTabs: Tab[] = [
  {
    title: 'Basic',
    value: 'basic',
    content: (
      <div className="p-4 bg-gray-300 rounded-xl shadow-xl shadow-pink-500">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Basic Plan</h2>
          <div className="rounded-xl bg-gray-400 px-2 items-center py-0.5">
            <h3>Best Offer</h3>
          </div>
        </div>
        <p className="mt-2">Ideal for individuals starting out.</p>
        <ul className="mt-4">
          <li>Up to 5 pages</li>
          <li>Custom responsive design</li>
          <li>Basic SEO optimization</li>
          <li>Contact form integration</li>
          <li>Social media integration</li>
          <li>Basic website analytics setup</li>
        </ul>
        <div className="text-center flex items-center justify-center w-full mt-6">
          <button className="mt-0 text-lg font-bold rounded-2xl bg-emerald-500 w-1/3">£300</button>
        </div>
      </div>
    ),
  },
  {
    title: 'Pro',
    value: 'pro',
    content: (
      <div className="p-4 bg-emerald-600 rounded-xl shadow-xl shadow-pink-500">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Pro Plan</h2>
          <div className="rounded-xl bg-gray-400 px-2 items-center py-0.5">
            <h3>Best Value</h3>
          </div>
        </div>
        <p className="mt-2">For professionals who need more features.</p>
        <ul className="mt-4">
          <li>Up to 10 pages</li>
          <li>All Basic Plan features</li>
          <li>Advanced SEO optimization</li>
          <li>Blog setup with CMS integration</li>
          <li>E-commerce functionality (up to 10 products)</li>
          <li>Enhanced website analytics setup</li>
        </ul>
        <div className="text-center flex items-center justify-center w-full mt-6">
          <button className="mt-0 text-lg font-bold rounded-2xl bg-emerald-500 w-1/3">£600</button>
        </div>
      </div>
    ),
  },
  {
    title: 'Premium',
    value: 'premium',
    content: (
      <div className="p-4 bg-yellow-500 rounded-xl shadow-xl shadow-pink-500">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Premium Plan</h2>
          <div className="rounded-xl bg-gray-400 px-2 items-center py-0.5">
            <h3>Best for Business</h3>
          </div>
        </div>
        <p className="mt-2">All features for businesses and teams.</p>
        <ul className="mt-4">
          <li>Up to 20 pages</li>
          <li>All Pro Plan features</li>
          <li>Custom functionality (e.g., membership sites, forums)</li>
          <li>E-commerce functionality (up to 50 products)</li>
          <li>Monthly maintenance and updates (3 hours/month)</li>
          <li>Priority support</li>
        </ul>
        <div className="text-center flex items-center justify-center w-full mt-6">
          <button className="mt-0 text-lg font-bold rounded-2xl bg-emerald-500 w-1/3">£1200</button>
        </div>
      </div>
    ),
  },
];

const Pricing = () => {
  return (
    <div className="h-screen justify-center sm:mb-40">
      <div className="absolute flex flex-col items-center justify-center  inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white  z-20">
        Our Pricing Plans
      </h1>
      <div className="w-full mt-4 flex justify-center relative z-20 items-center">
        <div className="sm:w-full w-full max-w-2xl mb-10 mt-6 pr-10 justify-center items-center">
          <Tabs
            tabs={pricingTabs}
            containerClassName="flex justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
