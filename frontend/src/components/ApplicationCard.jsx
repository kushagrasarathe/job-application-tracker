import React from "react";
import styles from "../css/App.module.css";

export default function ApplicationCard(props) {
  return (
    <>
      <div className={styles.card}>
        {/* <div> */}
        <label htmlFor=""> Company Name</label>
        <h2>{props.company}</h2>
        <label htmlFor=""> Position</label>
        <h3>{props.job_title}</h3>
        {/* </div> */}
        <label htmlFor=""> Person in Contact</label>
        <h3>{props.contact_person}</h3>
        <label htmlFor="">Date Applied On</label>
        <h4>{props.date}</h4>
        <label htmlFor="">Job Post Link</label>
        <h4>
          <a target="_blank" rel="noopener noreferrer" href={props.link}>
            <u>{props.link}</u>
          </a>
        </h4>
        <label htmlFor="">Remark</label>
        <h4>{props.remark}</h4>
        <label htmlFor="">Status</label>
        <h4>{props.status}</h4>
        <button>Archive</button>
      </div>
    </>
  );
}
