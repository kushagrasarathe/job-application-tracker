import React from 'react'
import styles from '../css/App.module.css'

export default function NewEntry() {
  return (
    <div className={styles.track_new}>
        <label htmlFor="">Company Name</label>
        <input type="text" />
        <label htmlFor="">Job Title</label>
        <input type="text" />
        <label htmlFor="">Date Applied</label>
        <button>Add</button>
    </div>
  )
}
