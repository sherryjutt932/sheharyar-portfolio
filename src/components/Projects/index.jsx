import { React, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { photoAnm, detailAnm } from "./animation.js";
import Detail from "./Detail.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function index() {
  const gallery = useRef(null);
  const left = useRef(null);
  const details = useRef(null);
  const right = useRef(null);
  const photo = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: gallery.current,
      start: "top top",
      end: "bottom bottom",
      pin: right.current,
      animation: photoAnm(photo),
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: left.current,
      start: "top top",
      end: "bottom bottom",
      pin: left.current,
      animation: detailAnm(details),
      scrub: true,
    });

    
  }, []);

  return (
    <>
      <div ref={gallery} className={styles.gallery}>
        <div ref={left} className={styles.left}>
          <div className={styles.Heading}>
            <span></span>projects
          </div>
          <div ref={details} className={styles.detailsWrapper}>
            <Detail
              head="Forensic Analysis"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto, voluptatibus facere cupiditate amet, sequi corporis ad, debitis beatae deleniti minus quam officiis laborum necessitatibus id quibusdam inventore consequuntur exercitationem."
            />

            <Detail
              head="Vertiment E-Commerce"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto, voluptatibus facere cupiditate amet, sequi corporis ad, debitis beatae deleniti minus quam officiis laborum necessitatibus id quibusdam inventore consequuntur exercitationem."
            />

            <Detail
              head="Account Management System"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto, voluptatibus facere cupiditate amet, sequi corporis ad, debitis beatae deleniti minus quam officiis laborum necessitatibus id quibusdam inventore consequuntur exercitationem."
            />
          </div>
        </div>

        <div ref={right} className={styles.right}>
          <div ref={photo} className={styles.photos}>
            <div className={styles.photo}></div>
            <div className={styles.photo}></div>
            <div className={styles.photo}></div>
          </div>
        </div>
      </div>
    </>
  );
}
