"use client";

import Head from "next/head";
import Image from "next/image";
import profile from "../../../public/images/profile/profile.jpg";
import {
  useInView,
  useMotionValue,
  useSpring,
  motion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "../../components/Skills";

import AnimatedText from "../../components/AnimatedText";
import TransitionEffect from "../../components/TransitionEffect";
import TypeParagraphs from "../../components/TypeParagraphs";

// TODO: Make the colors change as the count increases

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 5000 });

  // Define the color stops
  const colorStops = [0, value * 0.33, value * 0.66, value];

  // Define the corresponding colors for each stop
  // Adding an additional color to match the length of the colorStops array
  const colors = ["#ffffff", "#ff69b4", "#0000ff", "#ffeb3b"]; // start color (white), pink, blue, yellow

  // Transform the numeric value to a color value
  const colorValue = useTransform(motionValue, colorStops, colors);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
          ref.current.style.color = colorValue.get(); // Apply the color change
        }
      }),
    [springValue, value, colorValue]
  );

  return <motion.span ref={ref} />;
}

const staggerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export default function About() {
  useEffect(() => {
    document.title = "About Us - Your Dream SaaS Ltd";
  }, []);
  return (
    <>
      <Head>
        <title>{document.title}</title>
        <meta
          name="description"
          content="Discover the story behind Your Dream SaaS Ltd, a vanguard in web development and digital marketing. With a foundation rooted in innovation and customer-focused solutions, we are redefining the digital landscape. Explore our journey, values, and vision as we continue to empower businesses worldwide."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light p-10`}
      >
        <AnimatedText
          text="Where Passion Meets Innovation"
          className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        {/* TODO: Implement framer-motion animation from the left side  */}
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <motion.div
            className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8"
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              OUR JOURNEY
            </h2>

            <TypeParagraphs />
          </motion.div>
          <div
            className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
          >
            <div
              className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
            />
            {/* TODO: Change to tilt tile, take inspiration from Evoque landing page - Gallery */}
            <Image
              className="h-auto w-full rounded-2xl"
              src={profile}
              alt="Your Dream SaaS"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority
            />
          </div>
          <div
            className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
          >
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={40} />+
              </span>
              <h2
                className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
              >
                satisfied clients
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={50} />+
              </span>
              <h2
                className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
              >
                projects completed
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={4} />+
              </span>
              <h2
                className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
              >
                Years of experience
              </h2>
            </div>
          </div>
        </div>

        <Skills />
      </main>
    </>
  );
}
