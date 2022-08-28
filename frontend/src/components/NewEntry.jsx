import React, { useState } from "react";
import styles from "../css/App.module.css";

export default function NewEntry() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [contact, setContact] = useState("");
  const [remark, setRemark] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  async function saveData() {
    const response = await fetch("/api/save", {
      method: "POST",
      body: JSON.stringify({
        company,
        position,
        contact,
        remark,
        link,
        date,
        status
      }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data)
  }

  return (
    <>
      {/* <div className={styles.container}> */}
      <div className={styles.track_new}>
        <label htmlFor="">Company Name</label>
        <input
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          value={company}
          className={styles.input}
          type="text"
        />

        <label htmlFor="">Position Applied For</label>
        <input
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          value={position}
          className={styles.input}
          type="text"
        />

        <label htmlFor="">Contact Person</label>
        <input
          onChange={(e) => {
            setContact(e.target.value);
          }}
          value={contact}
          className={styles.input}
          type="text"
        />

        <label htmlFor="">Remark</label>
        <input
          onChange={(e) => {
            setRemark(e.target.value);
          }}
          value={remark}
          className={styles.input}
          type="text"
        />

        <label htmlFor="">Job Post Link</label>
        <input
          onChange={(e) => {
            setLink(e.target.value);
          }}
          value={link}
          className={styles.input}
          type="text"
        />

        <label htmlFor="">Date Applied</label>
        <input
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
          className={styles.input}
          type="date"
        />

        <label htmlFor="">Status</label>
        <select
          defaultValue="pending"
          onChange={(e) => setStatus(e.target.value)}
          className={styles.input}
        >
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
          <option value="pending">Pending</option>
        </select>
        <button className={styles.button} onClick={saveData}>
          Save
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
