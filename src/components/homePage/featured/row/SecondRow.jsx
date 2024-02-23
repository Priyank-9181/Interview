import React from "react";
import styles from "../../../../styles/homePage/featured.module.css";

function SecondRow(props) {
  return (
    <div className={styles.featureCardRatingContainer}>
      <p>{props.desc}</p>
      <p>
        <i className="fa-regular fa-star"></i>
        {props.rating} | {props.reviews}+ reviews
      </p>
    </div>
  );
}

export default SecondRow;
