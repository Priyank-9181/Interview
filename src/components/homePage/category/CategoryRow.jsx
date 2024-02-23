import React from "react";
import styles from "../../../styles/homePage/categoryRow.module.css";
import CategoryBadge from "./CategoryBadge";
import { categoryData } from "../../../data/data";

function CategoryRow() {
  const categoryBadge = categoryData.map((value, index) => {
    return (
      <CategoryBadge
        key={index}
        icon={value.icon}
        name={value.name}
        openings={value.openings}
      />
    );
  });

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTitleContainer}>
        <h2>Search by Category</h2>
        <p>
          All Categories<i className="fa-solid fa-angle-right"></i>
        </p>
      </div>

      <div className={styles.categoryBadgeContainer}>{categoryBadge}</div>
    </div>
  );
}

export default CategoryRow;
