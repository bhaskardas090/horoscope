import React from 'react'
import logo from '../img/logo.svg';
import styles from './navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="horoscope logo" className={styles.logoImg}/>
      </Link>
    </div>
  )
}

export default Navbar