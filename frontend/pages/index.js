import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import NewEntry from "../src/components/NewEntry";
import ApplicationCard from "../src/components/ApplicationCard";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [fetchApplication, setFetchApplication] = useState([]);

  function toggleView() {
    setToggle(!toggle);
  }

  // useEffect(() => {
  //     if (typeof window !== 'undefined') {
  //   const item = localStorage.getItem('data')
  //   console.log(item)
  // }

  // }, []);



  useEffect(() => {
    JSON.parse(localStorage.getItem('data'));
  }, []);

  useEffect(
    () =>
      async function fetchData() {
        const response = await fetch("/api/save");
        const data = await response.json();
        setFetchApplication(data);
        console.log(data);
      },
    []
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Job Tracking Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome !!!</h1>
        {/* {
          toggle ? <NewEntry /> : ''
        } */}
        <h2>Create New</h2>
        <div className={styles.new}>
          <button className={styles.button} onClick={toggleView}>
            Track New Application
          </button>
          <div className={toggle ? styles.visible : styles.hide}>
            <NewEntry />
          </div>
        </div>

        <h2>Saved Applications</h2>
        <div className={styles.entry}>
          {fetchApplication.map((item) => {
            return (

                <ApplicationCard
                  key={item.id}
                  company={item.company}
                  job_title={item.job_title}
                  contact_person={item.contact_person}
                  date={item.date}
                  link={item.link}
                  remark={item.remark}
                  status={item.status}
                />

            );
          })}
        </div>
      </main>
    </div>
  );
}
