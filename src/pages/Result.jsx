import React from 'react'
import styles from './result.module.css';
const Result = () => {
  return (
    <div className={styles.result}>
      <div className={styles.resutlContainer}>
        <h1 className={styles.zodiacType}>Sagittarius</h1>
        <p className={styles.dateRange}>Oct 23 - Nov 22</p>
        <p className={styles.todayDate}>April 23, 2022</p>
        <div className={styles.description}>
          It's not like you're famous for self-control to start with -- but now? Well, at this moment in time, you'll be less willing to try. Needless to say, this is a potentially startling situation, especially for those around you.
        </div>
        <div className={styles.details}>
          <div className={styles.compatibility}>Compatibility: Cancer</div>
          <div className={styles.mood}>Mood: Cautious</div>
          <div className={styles.color}>Color: Spring Green</div>
          <div className={styles.luckyNumber}>Lucky Number: 48</div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.yesterday}>Yesterday</button>
          <button className={styles.tomorrow}>Tomorrow</button>
        </div>
      </div>
    </div>
  )
}

export default Result