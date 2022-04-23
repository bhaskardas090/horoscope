import React from 'react'
import logo from '../img/logo.svg';
import styles from './navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="horoscope logo" className={styles.logoImg}/>
    </div>
  )
}

export default Navbar