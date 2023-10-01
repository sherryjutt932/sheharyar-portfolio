import React, { useRef, useEffect, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import Name from "./Name.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../../assets/images/SSWhite.svg";
import LinkRow from "../LinkRow";
import fileDownload from "js-file-download";
import { HiDownload } from "react-icons/hi";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoCodepen,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";
import StickyIcon from "./StickyIcon.jsx";
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
  const navItems = [
    {
      name: "Projects",
      ref: "Projects",
      url: "",
    },
    {
      name: "Education",
      ref: "Education",
      url: "",
    },
    {
      name: "Skills",
      ref: "Skills",
      url: "",
    },
    {
      name: "Contact",
      ref: "Contact",
      url: "",
    },
  ];

  useLayoutEffect(() => {
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
    gsap.set([intro.current.children[1], intro.current.children[2]], {
      y: 100,
      opacity: 0,
    });

    var introtl = gsap.timeline();
    introtl.to(intro.current.children, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power3", // Easing function (you can choose a different one)
    });
  }, []);

  const handleDownload = () => {
    const pdfUrl = "/Sheharyar_Saeed_Resume.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sheharyar_Saeed_Resume.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body after the download
    document.body.removeChild(link);

    window.open("/Sheharyar_Saeed_Resume.pdf", "_blank");
  };

  return (
    <section ref={section} className={styles.Hero}>
      <div ref={intro} style={{ zIndex: 3 }}>
        <nav>
          <div className={styles.logo}>
            <Image alt="blob" src={Logo} width={46} height={46} />
          </div>

          <div className={styles.nav}>
            <LinkRow data={navItems} />
          </div>
        </nav>

        <ul className={styles.SocialIcons}>
          <li className={styles.Icon}>
            <StickyIcon
              url={"https://www.linkedin.com/in/sheharyarsaeed932/"}
              icon={<BiLogoLinkedin />}
            />
          </li>
          <li className={styles.Icon}>
            <StickyIcon
              url={"https://github.com/sherryjutt932"}
              icon={<BiLogoGithub />}
            />
          </li>
          <li className={styles.Icon}>
            <StickyIcon
              url={"https://codepen.io/sherryjutt932"}
              icon={<BiLogoCodepen />}
            />
          </li>
          <li className={styles.Icon}>
            <StickyIcon
              url={"https://www.instagram.com/sherry_jutt42/"}
              icon={<BiLogoInstagram />}
            />
          </li>
          <li className={styles.Icon}>
            <StickyIcon
              url={"https://www.facebook.com/profile.php?id=100009704040257"}
              icon={<BiLogoFacebook />}
            />
          </li>
        </ul>

        <div className={styles.resume}>
          <button onClick={() => handleDownload()}>
            <span>
              <HiDownload />
            </span>
            Resume
          </button>
        </div>
      </div>

      <div ref={name} style={{ zIndex: 2 }} className={styles.Name}>
        <Name />
      </div>

      <div style={{ zIndex: 1 }}>
        <div className={styles.blobS}></div>
        <Blob />
      </div>
    </section>
  );
}
