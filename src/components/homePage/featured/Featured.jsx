import React from "react";
import FeatureCard from "./FeatureCard";
import { featureData } from "../../../data/data";
import styles from "../../../styles/homePage/featured.module.css";

function Featured() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Featured Job Offers</h1>
      </div>
      <div className={styles.featureOuterContainer}>
        {featureData.map((value, index, array) => {
          return <FeatureCard key={index} value={value} />;
        })}
      </div>
      <div className={styles.featureButtonContainer}>
        <button>All Job Offer</button>
      </div>
    </div>
  );
}

export default Featured;
