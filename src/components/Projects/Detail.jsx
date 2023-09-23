import React, {useRef,useLayoutEffect, useEffect } from "react";
import styles from "./style.module.scss";
import { gsap } from 'gsap';


export default function Detail(props) {
  const mysplit = useRef();


  return (
    <div className={styles.details}>
      <div ref={mysplit} className={styles.headline}  data-anm-text>
      {props.head}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
