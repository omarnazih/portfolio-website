"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Fully committed to the philosophy of life-long learning, I&apos;m a full
        stack developer with a deep passion for Python and JavaScript and all
        things web development. The unique combination of creativity, logic,
        technology and never running out of new things to discover, drives my
        excitement and passion for web development. When I&apos;m not at my
        computer I like to spend my time reading, keeping fit and playing games.
      </p>
    </motion.section>
  );
}
