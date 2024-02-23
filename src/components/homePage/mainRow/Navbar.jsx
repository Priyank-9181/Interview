import React from "react";
import styles from "../../../styles/homePage/mainRow.module.css";


function Navbar() {
  return (
    <div className={styles.mainContainer}>
      {/* logo */}
      <div className={styles.logoContainer}>
        <img src="/image/logo.png" alt="01" />
      </div>

      {/* nav link */}
      <div className={styles.navLinkContainer}>
        <ul>
          <li>Home</li>
          <li>My Jobs</li>
          <li>
            <i className="fa-regular fa-bell"></i>
          </li>
          <li>
            <i className="fa-regular fa-user"></i>
          </li>
          <li>|</li>
          <li>
            For Employer<i className="fa-solid fa-angle-right"></i>
          </li>
          <li>
            <select name="language" id="">
              <option value="">EN</option>
              <option value="">HN</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
