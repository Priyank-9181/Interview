import React from "react";
import styles from "../../../../styles/homePage/featured.module.css"

function FirstRow(props) {
  return (
    <div className={styles.featureCardTitleContainer}>
      <img src={props.mainIcon} alt={props.name} />
      <h5>{props.name}</h5>
      <img src={props.bookMarkIcon} alt={props.name} />
    </div>
  );
}

export default FirstRow;
