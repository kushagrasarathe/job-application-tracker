import React from "react";
import styles from "../css/App.module.css";

export default function NewEntry() {
  return (
    <div className={styles.track_new}>
      <label htmlFor="">Company Name</label>
      <input type="text" />
      <label htmlFor="">Position Applied For</label>
      <input type="text" />
      <label htmlFor="">Contact Person</label>
      <input type="text" />
      <label htmlFor="">Date Applied</label>
      <input type="text" />

      <label htmlFor="">Remark</label>
      <input type="text" />
      <label htmlFor="">Job Post Link</label>
      <input type="text" />
      <label htmlFor="">Status</label>
      <select>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
        <option value="pending">Pending</option>
      </select>
      <label htmlFor="">Next Meeting</label>
      <input type="text" />

      <button>Save</button>
    </div>
  );
}
