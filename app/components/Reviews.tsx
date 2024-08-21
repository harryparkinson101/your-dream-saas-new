"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { reviews } from "../utils/data";

export default function Reviews({ className }: { className?: string }) {
  return (
    <div className={`max-w-5xl mx-auto px-2 sm:px-0 ${className}`}>
      <HoverEffect items={reviews} />
    </div>
  );
}
