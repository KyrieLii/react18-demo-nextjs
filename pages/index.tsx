import type { NextPage } from "next";
import {Button} from '@arco-design/web-react'
import styles from "../styles/Home.module.css";
import '@arco-design/web-react/dist/css/arco.css';
import './i18n';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();
  return <div className={styles.container}>
    <Button type='secondary'>Test Arco</Button>
    <div>{t('Welcome to React')}</div>
  </div>;
};

export default Home;
