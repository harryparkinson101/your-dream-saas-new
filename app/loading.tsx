import React, { Suspense } from "react";
import { MultiStepLoader } from "./components/ui/multi-step-loader"; // Adjust the path to where your component is located

const loadingStates = [
  {
    text: "Step 1: Initializing...",
  },
  {
    text: "Step 2: Loading resources...",
  },
  {
    text: "Step 3: Fetching data...",
  },
  {
    text: "Step 4: Finalizing...",
  },
];

const Loading = () => {
  return <MultiStepLoader loadingStates={loadingStates} loading={true} duration={2000} />;
};

export default Loading;
