import React from 'react';
import styles from './zodiacs.module.css';
import aries from '../img/aries.png';
import aquarius from '../img/aquarius.png';
import cancer from '../img/cancer.png';
import capricorn from '../img/capricorn.png';
import leo from '../img/leo.png';
import scorpio from '../img/scorpio.png';
import libra from '../img/libra.png';
import pisces from '../img/pisces.png';
import sagittarius from '../img/sagittarius.png';
import gemini from '../img/gemini.png';
import taurus from '../img/taurus.png';
import virgo from '../img/virgo.png';
const Zodiacs = () => {
  return (
    <div className={styles.zodiacs}>
      <h1 className={styles.zodiacsHeader}>Choose Your Zodiac Sign</h1>
      <div className={styles.zodiacsContainer}>
        <img src={aries} alt="aries" className={styles.zodiac}/>
        <img src={aquarius} alt="aquarius" className={styles.zodiac}/>
        <img src={cancer} alt="cancer" className={styles.zodiac}/>
        <img src={capricorn} alt="capricorn" className={styles.zodiac}/>
        <img src={leo} alt="leo" className={styles.zodiac}/>
        <img src={scorpio} alt="scorpio" className={styles.zodiac}/>
        <img src={libra} alt="libra" className={styles.zodiac}/>
        <img src={pisces} alt="pisces" className={styles.zodiac}/>
        <img src={sagittarius} alt="sagittarius" className={styles.zodiac}/>
        <img src={gemini} alt="gemini" className={styles.zodiac}/>
        <img src={taurus} alt="taurus" className={styles.zodiac}/>
        <img src={virgo} alt="virgo" className={styles.zodiac}/>
      </div>
    </div>
  )
}

export default Zodiacs