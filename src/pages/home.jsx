import React from 'react'
import Zodiacs from '../component/Zodiacs';
import styles from './home.module.css';
const Home = () => {
  return (
    <div className={styles.styles}>
      <Zodiacs/>
    </div>
  )
}

export default Home