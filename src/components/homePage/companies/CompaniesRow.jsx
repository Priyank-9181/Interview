import React from "react";
import CompaniesCard from "./CompaniesCard";
import styles from "../../../styles/homePage/companies.module.css";
import { companies } from "../../../data/data";

function CompaniesRow() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Find Best Companies</h1>
      </div>
      <div className={styles.cardsContainer}>
        {companies.map((value, index) => {
          return (
            <CompaniesCard
              key={index}
              icon={value.icon}
              companyName={value.companyName}
              rating={value.rating}
              reviews={value.reviews}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CompaniesRow;
