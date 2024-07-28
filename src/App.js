import logo from './logo.svg';
import styles from './App.module.scss'
import React from 'react'
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Rabbis from "./components/Rabbis/Rabbis";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
      <div className={styles.wrapper}>
          <Header/>
        <div className={styles.content}>
            <AboutUs/>
            <Rabbis/>
            <Questions/>
            <Schedule/>
        </div>
          <Footer/>
      </div>
  );
}

export default App;
