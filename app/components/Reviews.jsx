import { useState } from 'react';
{/*TODO: Need to make a card component, I have one in my linkedIn demo I can copy */}
import { Card, CardContent, CardTitle } from "./components/ui/card";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "John Doe",
    avatar: "JD",
    title: "Business Owner",
    description: "Their website design service transformed my business's online presence. Highly recommended!"
  },
  {
    name: "Emma Smith",
    avatar: "ES",
    title: "Entrepreneur",
    description: "The hosting solutions are top-notch. My site's uptime and speed have improved dramatically."
  },
  {
    name: "Michael Johnson",
    avatar: "MJ",
    title: "Freelance Photographer",
    description: "Purchasing and setting up my domain was a breeze. Fantastic customer support."
  },
  {
    name: "Sophia Williams",
    avatar: "SW",
    title: "Blogger",
    description: "Their SSL security gives me peace of mind about my website's safety and my visitors' privacy."
  },
  {
    name: "James Brown",
    avatar: "JB",
    title: "Startup Founder",
    description: "Their all-in-one marketing tools have been vital in scaling my business online."
  },
  {
    name: "Isabella Davis",
    avatar: "ID",
    title: "E-commerce Owner",
    description: "I saw a significant increase in traffic and sales after using their SEO services."
  },
  {
    name: "Ethan Wilson",
    avatar: "EW",
    title: "IT Manager",
    description: "The reliability and features of their hosting services are unmatched in the industry."
  },
  {
    name: "Ava Martinez",
    avatar: "AM",
    title: "Graphic Designer",
    description: "Their website builder is intuitive and flexible - a creative's dream."
  },
  {
    name: "Mason Hernandez",
    avatar: "MH",
    title: "Digital Marketer",
    description: "The email marketing platform has revolutionized my outreach strategies."
  },
  {
    name: "Olivia Garcia",
    avatar: "OG",
    title: "Retail Business Owner",
    description: "Their e-commerce solutions helped me expand my business online effortlessly."
  },
  {
    name: "Liam Rodriguez",
    avatar: "LR",
    title: "Tech Enthusiast",
    description: "The technical support team is outstanding – knowledgeable and responsive."
  },
  {
    name: "Charlotte Gonzalez",
    avatar: "CG",
    title: "Restaurant Owner",
    description: "Their local SEO service boosted my restaurant's visibility in local search results significantly."
  }
];

const initialDisplayCount = 4;

const Reviews = () => {
  const [displayedReviews, setDisplayedReviews] = useState(testimonials.slice(0, initialDisplayCount));

  const showMoreReviews = () => {
    setDisplayedReviews(testimonials);
  };
// TODO: Fix stagger animation

  // Variants for the container
  const staggerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.4
      }
    }
  };
  
  const cardVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-black dark:text-white font-semibold mb-10">
        What Our Clients Say
      </h2>
      <motion.div
        className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayedReviews.map((review, index) => (
          <motion.div key={index} variants={cardVariants} className='flex flex-col'>
            <Tilt
              className="parallax-effect-glare-scale flex justify-center"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="lightblue"
              glarePosition="all"
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
            >
              <Card className="bg-[#192339] border-none text-white shadow-md rounded-lg h-full flex flex-col">
                <CardTitle className="flex items-center pl-4 pt-4 pb-4 gap-x-3">
                  <p className="text-lg">{review.name}</p>
                  <p className="text-zinc-400 text-sm">{review.title}</p>
                </CardTitle>
                <CardContent className="pt-4 px-4 text-[#efaf19]">
                  <div className="text-ellipsis overflow-hidden h-24">
                    {review.description}
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {displayedReviews.length < testimonials.length && (
        <div className="text-center mt-4 pt-4">
          <button
            className="bg-primary dark:bg-primary dark:hover:bg-sky-500 hover:bg-sky-500 hover:scale-105 transition-all duration-500 text-white dark:text-white font-bold py-2 px-4 rounded"
            onClick={showMoreReviews}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;