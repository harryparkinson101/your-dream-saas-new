"use client"; // Required for components with UI-related client-side logic

import { useEffect } from 'react';
import { motion } from "framer-motion";
import Head from "next/head";
import AboutHero from "../../components/about/AboutHero";
import ChallengesSection from "../../components/about/ChallengesSection";
import MovingCards from '../../components/about/MovingCards';

export default function About() {
  useEffect(() => {
    document.title = "About Me - Your Name";
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Learn more about Your Name, a full-stack developer specializing in Next.js and TypeScript." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About Me - Your Name" />
        <meta property="og:description" content="Learn more about Your Name, a full-stack developer specializing in Next.js and TypeScript." />
        <meta property="og:image" content="/path/to/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative flex flex-col items-center">
          {/* Animated AboutHero component */}
          <motion.div
            className="w-full max-w-7xl pt-8"
            initial={{ y: -100, opacity: 0 }} // Start position (off-screen)
            animate={{ y: 0, opacity: 1 }} // End position (in view)
            transition={{ type: "spring", stiffness: 70, damping: 10 }} // Spring animation
          >
            <AboutHero />
          </motion.div>

          <ChallengesSection />
          <MovingCards />
        </div>
      </div>
    </>
  );
}
