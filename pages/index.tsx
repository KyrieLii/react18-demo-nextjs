import type { NextPage } from "next";
import { useTransition } from "react";
import {Button} from '@arco-design/web-react'
import styles from "../styles/Home.module.css";
import '@arco-design/web-react/dist/css/arco.css';

const Home: NextPage = () => {
  useTransition();
  return <div className={styles.container}>
    <Button type='secondary'>Test Arco</Button>
  </div>;
};

export default Home;
