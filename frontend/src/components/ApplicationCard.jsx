import React from "react";
import styles from "../css/App.module.css";

export default function ApplicationCard(props) {
  return (
    <>
      <div className={styles.card}>
        <p>{props.company}</p>
        <p>{props.job_title}</p>
        <p>{props.contact_person}</p>
        <p>{props.date}</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href={props.link}>
            <u>{props.link}</u>
          </a>
        </p>
        <p>{props.remark}</p>
        <p>{props.status}</p>
        <button className={styles.button}>Archive</button>
      </div>
    </>
  );
}
