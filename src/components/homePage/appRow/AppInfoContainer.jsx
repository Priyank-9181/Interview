import React from "react";
import AppInfoTitle from "./AppInfoTitle";
import styles from "../../../styles/homePage/appRow.module.css";
import AppDownloadInstruction from "./AppDownloadInstruction";

function AppInfoContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.titleOuterContainer}>
        <AppInfoTitle />
      </div>

      <AppDownloadInstruction />
    </div>
  );
}

export default AppInfoContainer;
