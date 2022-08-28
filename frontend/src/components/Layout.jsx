import React from "react";
import styles from "../../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <h2>Job Application Tracker</h2>
        </div>
        {/* <div>
            <ul className={styles.navlink}>
                <li>Home</li>
                <li>Account</li>
            </ul>
        </div> */}
      </nav>
      {children}
      <footer className={styles.footer}>
        <span>Built by </span>
        <a
          href="https://twitter.com/kushagrasarathe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>
            <u>@kushagrasarathe</u>
          </b>
        </a>
      </footer>
    </>
  );
}
