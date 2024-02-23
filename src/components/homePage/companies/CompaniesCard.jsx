import React from "react";
import styles from "../../../styles/homePage/companies.module.css";

function CompaniesCard(props) {
  return (
    <div className={styles.companiesCardContainer}>
      <div className={styles.companiesCardImgContainer}>
        <img src={props.icon} alt={props.companyName} />
      </div>
      <div className={styles.companiesInfoContainer}>
        <h3>{props.companyName}</h3>
        <p>
          <i className="fa-regular fa-star"></i>
          {props.rating} | {props.reviews}+ reviews
        </p>
      </div>
      <div className={styles.companiesCardArrowContainer}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default CompaniesCard;
