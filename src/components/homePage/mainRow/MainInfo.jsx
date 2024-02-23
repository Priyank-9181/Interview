import React from "react";
import styles from "../../../styles/homePage/mainRow.module.css";

function MainInfo() {
  const searches = [
    "Designer",
    "Writer",
    "Team Leader",
    "Senior",
    "Web Designer",
  ];

  const badge = searches.map((value, index) => {
    return <span key={index}>{value}</span>;
  });

  return (
    <div className={styles.infoOuterContainer}>
      <div className={styles.infoDescContainer}>
        <h1>Find The Perfect Job For You</h1>
        <p>Search your career opportunity through 12,800 jobs</p>
        <input
          type="text"
          placeholder={`Search by job title, company or keywords | Province, city, or region`}
        />
        <h5>Popular Searches</h5>
        <div>{badge}</div>
      </div>

      <div className={styles.infoImgContainer}>
        <img src="/image/bannerIMG.png" alt="banner" />
      </div>
    </div>
  );
}

export default MainInfo;
