"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader } from "../components/ui/multi-step-loader";

const loadingStates = [
  {
    text: "Initializing...",
  },
  {
    text: "Loading resources...",
  },
  {
    text: "Fetching data...",
  },
  {
    text: "Almost there...",
  },
  {
    text: "Done!",
  },
];

const Loader = ({ loading }: { loading: boolean }) => {
  const [currentLoading, setCurrentLoading] = useState(loading);

  useEffect(() => {
    if (!loading) {
      setCurrentLoading(false);
      return;
    }
    setCurrentLoading(true);
  }, [loading]);

  return (
    <MultiStepLoader
      loadingStates={loadingStates}
      loading={currentLoading}
      duration={2000}
      loop={false}
    />
  );
};

export default Loader;
