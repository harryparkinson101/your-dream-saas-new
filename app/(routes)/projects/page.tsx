"use client";
import proj1 from "../../../public/images/projects/datawave.png";
import proj2 from "../../../public/images/projects/philharmonic.png";
import proj3 from "../../../public/images/projects/gericht.png";
import proj4 from "../../../public/images/projects/stop-away.png";
import proj5 from "../../../public/images/projects/alive.png";
import proj6 from "../../../public/images/projects/devdreaming.jpg";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { HeroParallax } from "../../components/ui/hero-parallax";
import { AuroraBackground } from "../../components/ui/aurora-background";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { CloseIcon } from "../../components/CloseIcon"; // Adjust the path accordingly


export default function Projects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleProductClick = (product: { title: string; thumbnail: string }) => {
    const card = cards.find((card) => card.title === product.title);
    if (card) {
      setActive(card);
    }
  };

  const products = cards.map(card => ({
    title: card.title,
    thumbnail: card.src.src  // Convert StaticImageData to string URL
  }));

  return (
    <AuroraBackground className="h-full w-full z-10">
      <div className="text-center mb-8 mt-8">
        <header className="text-3xl text-black dark:text-white">Recent Projects</header>
      </div>
      <div className="flex justify-center z-50 ">
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed z-[100] h-fit mt-10">
              <CardContainer className="inter-var bottom-20 shadow-xl dark:shadow-pink-600 rounded-xl">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
                  <motion.button
                    key={`button-${active.title}-${id}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className="flex absolute top-2 right-2 z-50 items-center justify-center bg-white rounded-full h-8 w-8"
                    onClick={() => setActive(null)}
                  >
                    <CloseIcon />
                  </motion.button>
                  <motion.div
                    layoutId={`card-${active.title}-${id}`}
                    ref={ref}
                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-xl shadow-xl overflow-hidden"
                  >
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      <motion.div layoutId={`image-${active.title}-${id}`}>
                        <Image
                          priority
                          width={200}
                          height={200}
                          src={active.src}
                          alt={active.title}
                          className="w-full h-80 lg:h-80 rounded-tl-xl object-cover object-top"
                        />
                      </motion.div>
                    </CardItem>
                    <CardItem translateZ="60" className="w-full">
                      <div className="flex justify-between items-center dark:bg-black/40 p-4 ">
                        <div>
                          <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="font-bold text-neutral-700 dark:text-neutral-200"
                          >
                            {active.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-neutral-600 dark:text-neutral-400"
                          >
                            {active.description}
                          </motion.p>
                        </div>

                        <motion.a
                          layoutId={`button-${active.title}-${id}`}
                          target="_blank"
                          className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                        >
                          {active.ctaText}
                        </motion.a>
                      </div>
                    </CardItem>
                    <CardItem translateZ="100">
                      <div className="pt-4 relative px-4">
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                        >
                          {typeof active.content === "function" ? active.content() : active.content}
                        </motion.div>
                      </div>
                    </CardItem>
                  </motion.div>
                </CardBody>
              </CardContainer>
            </div>
          ) : null}
        </AnimatePresence>
      </div>

      <HeroParallax products={products} onProductClick={handleProductClick} />
    </AuroraBackground>
  );
}

const cards = [
  {
    description: "Managing data",
    title: "Datawave Management System",
    src: proj1,
    ctaText: "Visit",
    content: () => {
      return (
        <p>
          A web application that allows users to manage their data and generate reports. It is built with React, Tailwind CSS, and Firebase. It has a responsive design and is mobile-friendly.
        </p>
      );
    },
  },
  {
    description: "A symphony of sound",
    title: "Philharmonic Orchestra",
    src: proj2,
    ctaText: "Visit",

    content: () => {
      return (
        <p>
          An app for managing orchestra schedules and musicians, providing a platform for seamless communication and collaboration.
        </p>
      );
    },
  },
  {
    description: "Culinary delight",
    title: "Gericht Restaurant",
    src: proj3,
    ctaText: "Visit",
    content: () => {
      return (
        <p>
          A modern restaurant website featuring dynamic menu updates, online reservations, and customer reviews.
        </p>
      );
    },
  },
  {
    description: "Travel planning",
    title: "Stop-Away",
    src: proj4,
    ctaText: "Visit",
    content: () => {
      return (
        <p>
          A travel planning application that helps users organize their itineraries, book hotels, and discover local attractions.
        </p>
      );
    },
  },
  {
    description: "Fitness tracker",
    title: "Alive",
    src: proj5,
    ctaText: "Visit",
    content: () => {
      return (
        <p>
          A fitness tracking app that monitors your workouts, diet, and progress over time, providing personalized recommendations.
        </p>
      );
    },
  },
  {
    description: "A symphony of sound",
    title: "Philharmonic Orchestra",
    src: proj2,
    ctaText: "Visit",

    content: () => {
      return (
        <p>
          An app for managing orchestra schedules and musicians, providing a platform for seamless communication and collaboration.
        </p>
      );
    },
  },
  {
    description: "Culinary delight",
    title: "Gericht Restaurant",
    src: proj3,
    ctaText: "Visit",
    content: () => {
      return (
        <p>
          A modern restaurant website featuring dynamic menu updates, online reservations, and customer reviews.
        </p>
      );
    },
  },
]