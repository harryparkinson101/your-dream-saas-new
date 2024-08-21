"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";

export const HeroParallax = ({
  products,
  onProductClick,
}: {
  products: {
    title: string;
    thumbnail: string;
  }[];
  onProductClick: (product: { title: string; thumbnail: string }) => void;
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 7);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 50]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, -50]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [30, -30]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.05], [-600, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-fit py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      {/* Scroll Down Div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[110%] left-1/2 transform -translate-x-1/2 mt-10 w-fit bg-gray-700 text-white py-2 px-4 rounded-xl shadow-lg z-50"
      >
        <p>Scroll down to see projects</p>
      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col items-center bg-gray-300 rounded-2xl px-14 pt-10 mb-20"
      >
        <motion.div className="flex flex-row space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              onClick={() => onProductClick(product)}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20 mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              onClick={() => onProductClick(product)}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const scrollToSection = () => {
    const targetPosition = window.innerHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust this value to make the scroll slower or faster
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="bg-black opacity-80 w-1/3 ml-20 rounded-xl z-10 p-4 shadow-blue-500 shadow-xl">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Innovative Solutions in <br /> SaaS, AI, and Web Development
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        As a passionate web developer, I specialize in creating cutting-edge Software as a Service (SaaS) applications, AI-driven solutions, and dynamic websites. My focus is on delivering innovative, user-centric solutions that meet the needs of modern businesses. Let's transform your ideas into powerful, functional software.
      </p>
      <div className="flex justify-center items-center">
        <button
          className="flex flex-col  text-center items-center mt-10"
          onClick={scrollToSection}
        >
          <span className="text-white text-lg pb-4">
            Scroll Down To Check Out The Good Shit
          </span>
          <ChevronsDown
            className="text-blue-500 animate-bounce"
            size={64}
            style={{
              filter: "drop-shadow(0px 10px 10px rgba(50, 0, 255, 1))",
            }}
          />
        </button>
      </div>
    </div>
  );
};


export const ProductCard = ({
  product,
  translate,
  onClick,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  onClick: () => void;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-80 relative flex-shrink-0 hover:brightness-125 brightness-90"
      onClick={onClick}
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl shadow-xl shadow-blue-500"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-10 group-hover/product:opacity-100 pointer-events-none rounded-xl"></div>
      <h2 className="absolute bottom-4 left-4 opacity-60 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
