import React, { useEffect, useState } from "react";
import styles from "./result.module.css";
import {
  getColor,
  getCompatibility,
  getDateInfo,
  getHoroscopeDescription,
  getLuckyNumber,
  getMood,
} from "../utils";
const Result = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [result, setResult] = useState(
    JSON.parse(sessionStorage.getItem("result"))
  );

  return result === "error" ? (
    <div className={styles.loading}>
      <div className={styles.result}>
        <div className={styles.resutlContainer}>
          <h1 className={styles.zodiacType}>{user.sign}</h1>
          <p className={styles.todayDate}>{getDateInfo(user.date)}</p>
          <div className={styles.description}>{getHoroscopeDescription()}</div>
          <div className={styles.details}>
            <div className={styles.compatibility}>
              Compatibility: {getCompatibility()}
            </div>
            <div className={styles.mood}>Mood: {getMood()}</div>
            <div className={styles.color}>Color: {getColor()}</div>
            <div className={styles.luckyNumber}>
              Lucky Number: {getLuckyNumber()}
            </div>
          </div>
          <p style={{ fontSize: "1.3rem" }}>Fallback</p>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.result}>
      <div className={styles.resutlContainer}>
        <h1 className={styles.zodiacType}>{result.sign}</h1>
        {/* <p className={styles.dateRange}>{result.date_range}</p> */}
        <p className={styles.todayDate}>{result.currentDate}</p>
        <div className={styles.description}>{result.description}</div>
        <div className={styles.details}>
          <div className={styles.compatibility}>
            Compatibility: {result.compatibility}
          </div>
          <div className={styles.mood}>Mood: {result.mood}</div>
          <div className={styles.color}>Color: {result.color}</div>
          <div className={styles.luckyNumber}>
            Lucky Number: {result.luckyNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
