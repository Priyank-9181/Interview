import React from "react";
import styles from "../../../styles/homePage/footer.module.css";

function Footer() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div>
          <img src="/image/logo.png" alt="logo" />
          <p>
            Follow Us On
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </p>
        </div>

        <div>
          <p>Contact With Us:</p>
          <p>
            <i className="fa-regular fa-envelope"></i>
            info@gmail.com
          </p>
          <p>
            <i className="fa-brands fa-whatsapp"></i>
            +91 00000-00000
          </p>
        </div>

        <div>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Blogs</li>
            <li>For Jobseekers</li>
            <li>For Employers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
