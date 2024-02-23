import React from "react";
import styles from "../../../../styles/homePage/featured.module.css";

function ThirdRow(props) {
  return (
    <div className={styles.featureCardTagsContainer}>
      {props.tags.map((value, index) => {
        return (
          <div key={index}>
            <img src={value.icon} alt={value.tag} />
            <span>{value.tag}</span>
          </div>
        );
      })}
      <span>{props.hoursAgo} hours ago</span>
    </div>
  );
}

export default ThirdRow;
