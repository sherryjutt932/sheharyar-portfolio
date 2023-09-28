"use client";
import {useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
import LinkRow from "../LinkRow";


export default function Footer(props) {
  const wrap = useRef();
  const cont = useRef();
  const navItems = [
    {
      name:"linkedIn",
      url:"#"
    },
    {
      name:"Github",
      url:"#"
    },
    {
      name:"Codepen",
      url:"#"
    },
    {
      name:"Instagram",
      url:"#"
    },
    {
      name:"Facebook",
      url:"#"
    },
  ]

  useEffect(() => {

    // gsap.set(cont.current, {  padding: "0rem 0rem" });
    // gsap.set(wrap.current, { borderColor:"#000", borderRadius: "0px" });

    var tl = gsap.timeline();
    tl.from(cont.current, {
      padding: "0rem 0rem",
      ease: "ease", // Easing function (you can choose a different one)
    },"a")
    .from(wrap.current, {
        backgroundColor: "#000" ,
        borderRadius: "0" ,
        ease: "expo", // Easing function (you can choose a different one)
      },"a")
    ;

    ScrollTrigger.create({
      trigger: cont.current,
      start: "top 20%",
      end: "top 2%",
      animation: tl,
      scrub: 5,
    });
  }, []);

  return (
    <footer ref={cont} className={styles.container}>
      <div ref={wrap} className={styles.wrapper}>
        <p>Have a project in mind?</p>
        <h1>Let's connect</h1>
      </div>

        <div className={styles.bottomNav}>
            <p className={styles.name}>
                Sheharyar Saeed
            </p>

            <div className={styles.SocialLinks}>
            <LinkRow data={navItems} />
            </div>
        </div>
    </footer>
  );
}
