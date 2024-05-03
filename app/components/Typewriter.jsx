import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "Your One-Stop Web Solution Hub",
        1000,
        "Professional Website Development",
        1000,
        "Comprehensive Digital Marketing Services",
        1000,
        "Secure SSL Certificates for Your Site",
        1000,
        "Reliable Web Hosting Solutions",
        1000,
        "Domain Registration Made Easy",
        1000,
        "Enhancing Digital Presence",
        1000,
        "Advanced Web Security for Businesses",
        1000,
        "Streamline Your Operations with M365",
        1000,
        "Elevate Your Brand with Tailored Websites",
        "Maximize Reach with Strategic SEO",
        1000,
        "Expert E-commerce Solutions for Online Stores",
        1000,
        "Cutting-Edge UI/UX Design Services",
        1000,
        "Revolutionize Your Marketing with Data-Driven Strategies",
        1000,
        "Seamless Integration of Business Tools",
        1000,
        "Innovative Cloud Solutions for Scalability",
        1000,
        "Dedicated Customer Support for Your Online Journey",
        1000,
        "Bridging Technology and Creativity",
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
