import React from "react";
import styles from "../../../styles/homePage/footer.module.css";

function FooterRights() {
  return (
    <div className={styles.footerRightsContainer}>
      <div>
        <hr />
        <p>
          &copy; 2024 <mark>Orbit Jobs</mark> All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default FooterRights;
