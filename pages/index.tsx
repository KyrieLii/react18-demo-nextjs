import type { NextPage } from "next";
import { useTransition } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  useTransition();
  return <div className={styles.container}></div>;
};

export default Home;
