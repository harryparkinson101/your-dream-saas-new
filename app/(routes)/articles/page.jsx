"use client"
import AnimatedText from "../../components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../../public/images/articles/pagination component in reactjs.jpg";
import blog2 from "../../../public/images/articles/create loading screen in react js.jpg";
import blog3 from "../../../public/images/articles/form validation in reactjs using custom react hook.png";
import blog4 from "../../../public/images/articles/smooth scrolling in reactjs.png";
import blog5 from "../../../public/images/articles/create modal component in react using react portals.png";
import blog6 from "../../../public/images/articles/todo list app built using react redux and framer motion.png";
import blog7 from "../../../public/images/articles/What is Redux with easy explanation.png";
import blog8 from "../../../public/images/articles/What is higher order component in React.jpg";
// TODO: Make it so that whenever i post A blog on medium it shows up on my blog section which links to medium.
// TODO: Need a search bar to search for relavant blogs and slice the array so that it only displays x number of articles 
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "../../components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light"
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta
          name="description"
          content="Browse through CodeBucks's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden p-10`}
      >
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="build a custom pagination component in reactjs from scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this 
              step-by-step guide to integrate Pagination component in your ReactJS project."
              link="https://devdreaming.com/blogs/create-pagination-component-reactjs"
            />

            <FeaturedArticle
              img={blog2}
              title="creating stunning loading screens in react: Build 3 types of loading screens"
              time="10 min read"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the 
              user experience."
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>
          <ul className="flex flex-col items-center relative">
            <Article
              title="The Ultimate Guide to Choosing the Right Website Plan for Your Business"
              img={blog1} // Replace with corresponding image
              date="March 10, 2023"
              link="https://medium.com/@yourbusiness/choosing-right-website-plan"
            />
            <Article
              title="SSL Certificates Explained: Why They're Essential for Your Business Website"
              img={blog2} // Replace with corresponding image
              date="March 15, 2023"
              link="https://medium.com/@yourbusiness/ssl-certificates-explained"
            />
            <Article
              title="Understanding Web Hosting: How to Pick the Best Option for Your Business"
              img={blog3} // Replace with corresponding image
              date="March 20, 2023"
              link="https://medium.com/@yourbusiness/understanding-web-hosting"
            />
            <Article
              title="Maximizing Your Online Presence: Effective Digital Marketing Strategies for 2023"
              img={blog4} // Replace with corresponding image
              date="March 25, 2023"
              link="https://medium.com/@yourbusiness/digital-marketing-strategies-2023"
            />
            <Article
              title="SEO Myths Debunked: What Really Works for Business Websites Today?"
              img={blog5} // Replace with corresponding image
              date="March 30, 2023"
              link="https://medium.com/@yourbusiness/seo-myths-debunked"
            />
            <Article
              title="The Power of Content Marketing: Driving Growth for Your Business Website"
              img={blog6} // Replace with corresponding image
              date="April 4, 2023"
              link="https://medium.com/@yourbusiness/content-marketing-growth"
            />
            <Article
              title="Navigating the World of E-commerce: Best Practices for Your Business Website"
              img={blog7} // Replace with corresponding image
              date="April 9, 2023"
              link="https://medium.com/@yourbusiness/e-commerce-best-practices"
            />
            <Article
              title="Website Speed Optimization: Why It Matters and How to Achieve It"
              img={blog8} // Replace with corresponding image
              date="April 14, 2023"
              link="https://medium.com/@yourbusiness/website-speed-optimization"
            />
            {/* ... additional articles ... */}
          </ul>
      </main>
    </>
  );
}
