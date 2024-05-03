"use client";
import AnimatedText from "./components/AnimatedText";
import { HireMe } from "./components/HireMe";
import { LinkArrow } from "./components/Icons";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../public/images/profile/developer-pic-1.png";
import TransitionEffect from "./components/TransitionEffect";
import Typewriter from "./components/Typewriter";
{
  /*TODO: Need to make a Card component and import it into reviews */
}
//import Reviews from "./reviews";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Your Dream SaaS Ltd - Comprehensive Digital Solutions for Businesses
        </title>
        <meta
          name="description"
          content="Discover Your Dream SaaS Ltd: A leading provider of professional website creation, digital marketing, and hosting services. Specializing in bespoke digital solutions, we offer state-of-the-art web design, strategic digital marketing, and essential web solutions including hosting, SSLs, and domains. Our expertise ensures your business excels in the digital landscape. Book a consultation to transform your online presence into a powerful asset."
        />
        {/* Additional SEO meta tags */}
        <meta
          name="keywords"
          content="professional website design, digital marketing services, hosting solutions, SSL certificates, domain registration, web development, online business growth"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourdreamsaas.com" />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <div className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              {/* Ensure you have the profilePic variable defined or imported */}
              <Image
                src={profilePic}
                alt="Profile Picture"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            {/* TODO: Add a gradient background to the text */}
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Empower Your Business Online with Your Dream SaaS"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              {/* TODO: Fix padding issue on small devices */}
              <Typewriter />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs pr-10">
                Welcome to Your Dream SaaS – your all-in-one digital solutions
                partner! We specialize in crafting professional websites,
                providing top-tier digital marketing services, and offering a
                suite of essential web solutions including hosting, SSLs, and
                domains.
                <br /> <br />
                Leveraging our expertise and exclusive partnerships, we ensure
                your business thrives in the digital world. Book a consultation
                today, and let us transform your online presence into a powerful
                business asset!
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center pt-8 pb-20 mb-10">
                <Link
                  whileHover={{
                    cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  }}
                  href="/products.pdf" // Updated link for products information
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-primary p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-sky-500 hover:text-white
            dark:bg-primary dark:text-white dark:hover:bg-sky-500 dark:hover:text-light transition-all duration-400
            md:p-2 md:px-4 md:text-base
            `}
                  download
                >
                  Explore Our Services{" "}
                  <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
                {/* Updated call to action */}
                <Link
                  href="mailto:consultation@yourdreamsaas.com" // Professional email for consultation
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Book Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* TODO: Create a carosel with Words like, Security, SSLs, Domains, Hosting, Web Design, Professional Email, Office 365, Customer Support, Marketing,  */}
        <div className="items-center justify-center flex text-center">
          <HireMe />
        </div>
      </article>
      {/*<Reviews />*/}
    </>
  );
}
