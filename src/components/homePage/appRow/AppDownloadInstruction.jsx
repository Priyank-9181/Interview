import React from "react";
import styles from "../../../styles/homePage/appRow.module.css";

function AppDownloadInstruction() {
  return (
    <div className={styles.downloadContainer}>
      <div className={styles.downloadAppLogoContainer}>
        <img src="/image/appImage/app.png" alt="app" />
      </div>
      <div className={styles.downloadAppInfoContainer}>
        <h1>
          Download <mark>Orbit Jobs</mark> app and find your dream job
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa
          corrupti perspiciatis, rem ipsa, doloribus architecto quo pariatur
          magni.
        </p>
        <div>
          <img src="/image/appImage/app-store.png" alt="app-store" />
          <img src="/image/appImage/playstore.png" alt="playstore" />
        </div>
      </div>
    </div>
  );
}

export default AppDownloadInstruction;
