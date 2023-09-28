
"use client";
import {useEffect,useState , useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function SingleLink({data}) {
    const wrap = useRef();
    const L1 = useRef();
    const L2 = useRef();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      gsap.set(L1.current.children, { y: 0 });
      gsap.set(L2.current.children, { y: 20 });
      gsap.defaults({
        ease: "power2", 
        duration: 0.3
      });

      var animation = gsap.timeline({ paused: true });
      
      animation.to(L1.current.children, {
        y:-20,
        stagger:0.01,
      },"a")
      .to(L2.current.children, {
        y: 0,
        stagger:0.01,
      },"a");
  
      // ScrollTrigger.create({
      //   trigger: props.wrp.current,
      //   start: "top bottom",
      //   end: "bottom top",
      //   animation: tl,
      //   scrub: true,
      // });
      
      
      wrap.current.addEventListener('mouseenter', () => {
        if (!isHovered) {
          animation.play();
          setIsHovered(true);
        }
      });
  
      wrap.current.addEventListener('mouseleave', () => {
        animation.reverse();
        setIsHovered(false);
      });
  
      return () => {
        // Clean up event listeners if the component unmounts
        wrap.current.removeEventListener('mouseenter', () => {});
        wrap.current.removeEventListener('mouseleave', () => {});
      };
    }, [isHovered]);

    
    return (
      <div 
      
      ref={wrap}className={styles.wrapper}>
             <Link ref={L1} href="#">
              {
              data.name.split("").map((ch, i) => (
                <span key={i}>{ch}</span>
              ))
              }
              </Link>
             <Link ref={L2} href="#">
             {
              data.name.split("").map((ch, i) => (
                <span key={i}>{ch}</span>
              ))
              }
              </Link>
             </div>
    )
  }