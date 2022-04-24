import React, {useState} from 'react'
import styles from './result.module.css';
const Result = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(JSON.parse(sessionStorage.getItem('result')));

  return (
    loading ? (
      <h1 className={styles.loading}>Loading...</h1>
    ):(
      <div className={styles.result}>
      <div className={styles.resutlContainer}>
        <h1 className={styles.zodiacType}>{result.sign}</h1>
        <p className={styles.dateRange}>{result.date_range}</p>
        <p className={styles.todayDate}>{result.current_date}</p>
        <div className={styles.description}>{result.description}</div>
        <div className={styles.details}>
          <div className={styles.compatibility}>Compatibility: {result.compatibility}</div>
          <div className={styles.mood}>Mood: {result.mood}</div>
          <div className={styles.color}>Color: {result.color}</div>
          <div className={styles.luckyNumber}>Lucky Number: {result.lucky_number}</div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.yesterday}>Yesterday</button>
          <button className={styles.tomorrow}>Tomorrow</button>
        </div>
      </div>
    </div>
    )
    
  )
}

export default Result