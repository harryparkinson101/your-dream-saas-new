import { TypeAnimation } from "react-type-animation";

import { useState, useEffect, useMemo } from "react";

const TypeParagraphs = () => {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const paragraphs = useMemo(
    () => [
      "At Your Dream SaaS Ltd, we blend our founder's rich history in full-stack development and insights from leading tech companies to create unique digital experiences. Inspired by a vision to empower businesses in the digital age, we embarked on this journey to bring your digital dreams to life.",
      "Our approach goes beyond aesthetics. We believe in creating solutions that not only look great but also solve real-world problems. We pride ourselves on our ability to understand and anticipate the needs of our clients, ensuring every project is a step towards digital excellence.",
      "Our dedication to quality and innovation has led us to work with over 40 satisfied clients, completing more than 50 projects, and constantly growing in our 4+ years of operation. We are excited about the future, as we continue to expand our horizons and bring cutting-edge solutions to our clients.",
    ],
    []
  );

  useEffect(() => {
    if (currentParagraphIndex < paragraphs.length - 1) {
      const timer = setTimeout(() => {
        setCurrentParagraphIndex(currentParagraphIndex + 1);
      }, paragraphs[currentParagraphIndex].length * 10 + 800); // 20 ms per character + 0.8 second pause

      return () => clearTimeout(timer);
    }
  }, [currentParagraphIndex, paragraphs]);

  return (
    <div>
      {paragraphs
        .slice(0, currentParagraphIndex + 1)
        .map((paragraph, index) => (
          <TypeAnimation
            key={index}
            sequence={[paragraph, 500]}
            wrapper="p"
            speed={90}
            delay={2}
            style={{ fontSize: "18px", display: "block", marginBottom: "1em" }}
            cursor={index === currentParagraphIndex}
          />
        ))}
    </div>
  );
};

export default TypeParagraphs;
