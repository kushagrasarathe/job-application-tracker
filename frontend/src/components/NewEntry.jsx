import React from 'react'
import styles from '../css/App.module.css'

export default function NewEntry() {
  return (
    <div className={styles.track_new}>
        <label htmlFor="">Company Name</label>
        <input type="text" />
        <label htmlFor="">Contact Person</label>
        <input type="text" />
        <label htmlFor="">Date Applied</label>
        <input type="text" />
        <label htmlFor="">Job Title</label>
        <input type="text" />
        <label htmlFor="">Job Post Link</label>
        <input type="text" />
        <label htmlFor="">Status</label>
         Pending<input type="checkbox"/>
        <label htmlFor="">Next</label>
        <input type="text"/>
        
        <button>Add</button>
        <button>Archive</button>
    </div>
  )
}
