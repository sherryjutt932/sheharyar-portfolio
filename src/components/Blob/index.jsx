import React from "react";
import styles from "./style.module.scss";
import Spline from "@splinetool/react-spline";

export default function index() {
  return (
    <Spline
          className={styles.blob}
          scene="https://prod.spline.design/SqSkjiIgXOUq7TGf/scene.splinecode"
        />
  );
}
