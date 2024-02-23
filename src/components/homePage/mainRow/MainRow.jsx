import React from "react";
import styles from "../../../styles/homePage/mainRow.module.css";
import Navbar from "./Navbar";
import MainInfo from "./MainInfo";

function MainRow() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainInfo />
    </div>
  );
}

export default MainRow;
