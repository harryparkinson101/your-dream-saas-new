"use client"
import { HoverEffect } from "./ui/card-hover-effect";
import { reviews } from "../utils/data";
export default function Reviews() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-0">
      <HoverEffect items={reviews} />
    </div>
  );
}
