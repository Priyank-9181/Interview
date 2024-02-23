import React from "react";
import styles from "../../../../styles/homePage/featured.module.css";

function ExtraTag(props) {
  return (
    <div className={styles.featureCardExtraTagContainer}>
      <ul>
        {props.extraTags.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

export default ExtraTag;
