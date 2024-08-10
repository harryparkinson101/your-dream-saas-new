import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "Bespoke Software Development",
        1000,
        "Complex Custom Projects",
        1000,
        "Advanced Website Development",
        1000,
        "Strategic SEO for Maximum Reach",
        1000,
        "Cutting-Edge Web Technologies",
        1000,
        "Tailored Solutions for Businesses",
        1000,
        "Enhancing Digital Presence",
        1000,
        "Industry Best Practices",
        1000,
        "Scalable AI Solutions",
        1000,
        "Transformative Digital Experiences",
        1000,
        "Optimizing Business Operations",
        1000,
        "Custom-Built Web Applications",
        1000,
        "Revolutionizing Digital Solutions",
        1000,
        "Premium Technical Expertise",
        1000,
      ]}
      wrapper="span"
      speed={85}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Typewriter;
