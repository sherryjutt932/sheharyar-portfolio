import React, { useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import Name from "./Name.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {HiDownload} from 'react-icons/hi';
import {BiLogoLinkedin,BiLogoGithub,BiLogoCodepen,BiLogoInstagram,BiLogoFacebook} from 'react-icons/bi';
import StickyIcon from './StickyIcon.jsx'

const Blob = dynamic(() => import("../Blob"), {
  ssr: true,
  // loading: () => <p>Loading...</p>,
});

export default function index() {
  const section = useRef();
  const name = useRef();
  const intro = useRef();

  useEffect(() => {
    gsap.set(name, { y: 0 });

    var tl = gsap.timeline();
    tl.to(name.current, {
      y: 20,
      scale: 1.1,
      scrub: 10,
      ease: "power3", // Easing function (you can choose a different one)
    });

    ScrollTrigger.create({
      trigger: section.current,
      start: "top top",
      end: "bottom top",
      animation: tl,
      scrub: true,
    });

    gsap.set(intro.current.children, { y: -50, opacity: 0 });
    gsap.set([intro.current.children[2], intro.current.children[3]], { y: 50, opacity: 0 });

    var introtl = gsap.timeline();
    introtl.to(intro.current.children, {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0,
      ease: "power3", // Easing function (you can choose a different one)
    });
  }, []);

  return (
    <section ref={section} className={styles.Hero}>
      <div ref={intro}>
        <div className={styles.logo}>SS</div>

        <div className={styles.nav}>
          <div>
            {" "}
            <Link href="#">ABOUT</Link>
          </div>
          <div>
            {" "}
            <Link href="#">WORK</Link>
          </div>
          <div>
            {" "}
            <Link href="#">CONTACT</Link>
          </div>
        </div>
        <ul className={styles.SocialIcons}>
          <li className={styles.Icon}>
            <StickyIcon icon={<BiLogoLinkedin/>}/>
          </li>
          <li className={styles.Icon}>
            <StickyIcon icon={<BiLogoGithub/>}/>
          </li>
          <li className={styles.Icon}>
            <StickyIcon icon={<BiLogoCodepen/>}/>
          </li>
          <li className={styles.Icon}>
            <StickyIcon icon={<BiLogoInstagram/>}/>
          </li>
          <li className={styles.Icon}>
            <StickyIcon icon={<BiLogoFacebook/>}/>
          </li>
        </ul>


        <div className={styles.resume}>
        <button>
        <span >
        <HiDownload/> 
        </span>
            Resume
        </button>
        </div>

      </div>

      <div ref={name} className={styles.Name}>
        <Name />
      </div>

      <div>
        <div className={styles.blobS}></div>
        <Blob/>
      </div>
    </section>
  );
}
