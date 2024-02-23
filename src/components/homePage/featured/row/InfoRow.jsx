import React from "react";
import styles from "../../../../styles/homePage/featured.module.css";

function InfoRow(props) {
  return (
    <div className={styles.featureCardInfoContainer}>
      <ul>
        {props.extraInfo.map((value, index) => {
          return (
            <li key={index}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfoRow;
