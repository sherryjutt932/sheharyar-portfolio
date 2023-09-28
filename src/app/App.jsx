"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
// import Achivements from "@/components/Achivements";
// import Projects from "@/components/Projects";
// import Marque from "@/components/Marque";
// import Education from "@/components/Education";
// import Skills from "@/components/Skills";
// import Quote from "@/components/Quote";

const Achivements = dynamic(() => import("@/components/Achivements"), {});
const Projects = dynamic(() => import("@/components/Projects"), {});
const Marque = dynamic(() => import("@/components/Marque"), {});
const Education = dynamic(() => import("@/components/Education"), {});
const Skills = dynamic(() => import("@/components/Skills"), {});
const Quote = dynamic(() => import("@/components/Quote"), {});
const Footer = dynamic(() => import("@/components/Footer"), {});

export default function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);
  const main = useRef();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* {loaderFinished ? (
        <>
          <Hero />
          <Projects />
          <Education />
          <Quote />
          <Skills />
          <Marque text="Achivements" />
          <Achivements />
        </>
      ) : (
          <Loader timeline={timeline} />
      )} */}

      <Hero />
      
      <Projects />
      <Education />
      <Quote />
      <Skills />

      <Marque text="Achivements" />
      <Achivements />
      <Footer />
    </>
  );
}
