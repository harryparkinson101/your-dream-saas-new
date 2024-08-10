"use client";
import AnimatedText from "./components/AnimatedText";
import { HireMe } from "./components/HireMe";
import { LinkArrow } from "./components/Icons";
import Reviews from "./components/Reviews";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/profile/developer-pic-1.png";
import TransitionEffect from "./components/TransitionEffect";
import Typewriter from "./components/Typewriter";
import { Boxes } from "./components/ui/background-boxes";
import { TracingBeam } from "./components/ui/tracing-beam";
// TODO: fix the document issues with tracing beam then add it back in it look at the aceternity example
export default function Home() {
  return (
    <main className="relative">
      <Head>
        <title>
          Your Dream SaaS Ltd - Comprehensive Digital Solutions for Businesses
        </title>
        <meta
          name="description"
          content="Discover Your Dream SaaS Ltd: A leading provider of professional website creation, digital marketing, and hosting services. Specializing in bespoke digital solutions, we offer state-of-the-art web design, strategic digital marketing, and essential web solutions including hosting, SSLs, and domains. Our expertise ensures your business excels in the digital landscape. Book a consultation to transform your online presence into a powerful asset."
        />
        <meta
          name="keywords"
          content="professional website design, digital marketing services, hosting solutions, SSL certificates, domain registration, web development, online business growth"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourdreamsaas.com" />
      </Head>

      <TransitionEffect />


      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <div className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Profile Picture"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center mr-20">
              <div className="relative overflow-hidden shadow-lg dark:shadow-blue-600 shadow-dark pl-20 p-10 rounded-xl -skew-x-2">
                <Boxes className="absolute inset-0 z-10" />
                <div className="relative z-20">
                  <AnimatedText
                    text="Empower Your Business Online with Your Dream SaaS"
                    className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl animate-pulse"
                  />
                  <Typewriter />
                  <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
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
                  <div className="mt-2 flex items-center self-start lg:self-center pt-8 sm:pb-20 sm:mb-10 md:pb-10">
                    <Link
                      href="/products.pdf"
                      target={"_blank"}
                      className={`flex items-center rounded-lg border-2 border-solid bg-primary p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-blue-600 hover:text-white dark:bg-primary dark:text-white dark:hover:bg-sky-500 dark:hover:text-light transition-all duration-400 md:p-2 md:px-4 md:text-base`}
                      download
                    >
                      Explore Our Services{" "}
                      <LinkArrow className="ml-1 !w-6 md:!w-4" />
                    </Link>
                    <Link
                      href="mailto:consultation@yourdreamsaas.com"
                      className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                    >
                      Book Your Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center justify-center flex text-center">
          <HireMe />
        </div>
      </article>

      <div className="w-full justify-between items-center">
        <h1 className="text-center text-4xl text-black dark:text-white font-bold">
          What Our Customers Say
        </h1>
        <Reviews />
      </div>
    </main>
  );
}
