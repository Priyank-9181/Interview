import React from "react";
import styles from "../../../styles/homePage/categoryRow.module.css";

function CategoryBadge(props) {
  return (
    <div className={styles.badgeContainer}>
      <div className={styles.badgeIconContainer}>
        <img src={props.icon} alt={props.name} />
      </div>
      <div className={styles.badgeInfoContainer}>
        <h4>{props.name}</h4>
        <p>Openings {props.openings}</p>
      </div>
    </div>
  );
}

export default CategoryBadge;
