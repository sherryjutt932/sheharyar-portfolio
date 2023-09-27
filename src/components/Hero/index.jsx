import React, { useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import Name from "./Name.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../../assets/images/SSWhite.svg"

import {HiDownload} from 'react-icons/hi';
import {BiLogoLinkedin,BiLogoGithub,BiLogoCodepen,BiLogoInstagram,BiLogoFacebook} from 'react-icons/bi';
import StickyIcon from './StickyIcon.jsx'
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

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
      y: 0,
      scale: 1.3,
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

    gsap.set(intro.current.children, { y: -100, opacity: 0 });
    gsap.set([intro.current.children[1], intro.current.children[2]], { y: 100, opacity: 0 });

    var introtl = gsap.timeline();
    introtl.to(intro.current.children, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power3", // Easing function (you can choose a different one)
    });
  }, []);

  return (
    <section ref={section}  className={styles.Hero}>
      <div ref={intro} style={{zIndex: 3}}>
        <nav>
        <div className={styles.logo}>
          <Image src={Logo} width={54} height={54}/>
          </div>

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
        </nav>

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

      <div ref={name} style={{zIndex: 2}} className={styles.Name}>
        <Name />
      </div>

      <div style={{zIndex: 1}}>
        <div className={styles.blobS}></div>
        <Blob/>
      </div>
    </section>
  );
}
