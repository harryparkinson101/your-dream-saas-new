import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Link } from 'next/link';
const Skill = ({ name, x, y, color }) => {
  const ref = useRef(null);
  return (
        <motion.div
          ref={ref}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          className={`cursor-pointer w-max origin-center absolute font-semibold py-3 px-6 rounded-full text-light ${color}`}
        >
          {name}
        </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  // TODO: Each Skill needs to link to a blog post on how we achive that skill!
  // Mapping of skills to colors and coordinates
  const skillsColorCoordinates = new Map([
    ["Web", { color: "bg-blue-500", position: { x: "-20vw", y: "2vw" } }],
    [
      "SEO Strategies",
      { color: "bg-red-500", position: { x: "-5vw", y: "-10vw" } },
    ],
    [
      "Digital Marketing",
      { color: "bg-yellow-500", position: { x: "20vw", y: "6vw" } },
    ],
    [
      "Responsive Designs",
      { color: "bg-green-500", position: { x: "0vw", y: "12vw" } },
    ],
    [
      "User-Centric Experiences",
      { color: "bg-pink-500", position: { x: "-20vw", y: "-15vw" } },
    ],
    [
      "E-commerce Solutions",
      { color: "bg-purple-500", position: { x: "15vw", y: "-12vw" } },
    ],
    [
      "Brand Development",
      { color: "bg-indigo-500", position: { x: "-35vw", y: "-5vw" } },
    ],
    [
      "Social Media Management",
      { color: "bg-orange-500", position: { x: "32vw", y: "-5vw" } },
    ],
    [
      "Conversion Optimization",
      { color: "bg-teal-500", position: { x: "0vw", y: "-20vw" } },
    ],
    [
      "UX/UI Design",
      { color: "bg-cyan-500", position: { x: "-25vw", y: "18vw" } },
    ],
    [
      "Content Strategy",
      { color: "bg-lime-500", position: { x: "28vw", y: "18vw" } },
    ],
    [
      "Marketing Analytics",
      { color: "bg-gray-500", position: { x: "10vw", y: "25vw" } },
    ],
  ]);

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]"
      >
        {[...skillsColorCoordinates].map(
          ([skill, { color, position }], index) => (
            <Skill
              key={index}
              name={skill}
              x={position.x}
              y={position.y}
              color={color}
            />
          )
        )}
      </div>
    </>
  );
};

export default Skills;
