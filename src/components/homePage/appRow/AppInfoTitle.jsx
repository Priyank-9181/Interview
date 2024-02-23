import React from "react";
import styles from "../../../styles/homePage/appRow.module.css";

function AppInfoTitle() {
  const helpCompanies = [
    "/image/helpCompanies/aws_logo.png",
    "/image/helpCompanies/indiv_logo.png",
    "/image/helpCompanies/sekolah_logo.png",
    "/image/helpCompanies/imag_34.png",
    "/image/helpCompanies/arjuna_logo.png",
  ];

  return (
    <div className={styles.appTitleContainer}>
      <h5>We've helped 2000+ world's best companies</h5>
      <div className={styles.appImgContainer}>
        {helpCompanies.map((value, index) => {
          return <img key={index} src={value} alt={index} />;
        })}
      </div>
    </div>
  );
}

export default AppInfoTitle;
