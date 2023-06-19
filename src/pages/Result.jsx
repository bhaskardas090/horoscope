import React, {useState} from 'react'
import styles from './result.module.css';
const Result = () => {
  const [result, setResult] = useState(JSON.parse(sessionStorage.getItem('result')));

  return (
    result.length ? (
      <h1 className={styles.loading}>Nothing to show :(</h1>
    ):(
      <div className={styles.result}>
      <div className={styles.resutlContainer}>
        <h1 className={styles.zodiacType}>{result.sign}</h1>
        {/* <p className={styles.dateRange}>{result.date_range}</p> */}
        <p className={styles.todayDate}>{result.currentDate}</p>
        <div className={styles.description}>{result.description}</div>
        <div className={styles.details}>
          <div className={styles.compatibility}>Compatibility: {result.compatibility}</div>
          <div className={styles.mood}>Mood: {result.mood}</div>
          <div className={styles.color}>Color: {result.color}</div>
          <div className={styles.luckyNumber}>Lucky Number: {result.luckyNumber}</div>
        </div>
        {/* <div className={styles.buttons}>
          <button className={styles.yesterday}>Yesterday</button>
          <button className={styles.tomorrow}>Tomorrow</button>
        </div> */}
      </div>
    </div>
    )
    
  )
}

export default Result