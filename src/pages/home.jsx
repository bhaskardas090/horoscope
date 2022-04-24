import {useEffect, useState, useMemo} from 'react';
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
import styles from './home.module.css';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom'
const axios = require("axios");

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("gemini")
  const [loading, setLoading] = useState(false)
  
  const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: {sign: sign, day: 'today'},
      headers: {
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'de9e63ce4cmshcb1237b75a732eap197588jsn7d2dc5322ad8'
      }
    };

  const handleSubmit = () => {
    setLoading(true);
    const getdata = async() => {
      const {data} = await axios.request(options);
      // setResult(data);

      if(data){
        sessionStorage.setItem('result', JSON.stringify({...data, sign}));
        setLoading(false)
        navigate('/result', { replace: true })
      }
      sessionStorage.setItem('loading', JSON.stringify(loading));
    }
    getdata();
  }

  return (
    <div className={styles.home}>
      <div className={styles.inputs}> 
        <div className="p-input-icon-left">
            <i className="pi pi-user" />
            <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Bhaskar Das" className={styles.input}/>
        </div>
        <div className="p-input-icon-left">
            <i className="pi pi-google" />
            <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" className={styles.input}/>
        </div>
      </div>
      <h1 className={styles.zodiacsHeader}>Choose Your Zodiac Sign</h1>
      <div className={styles.zodiacsContainer} onClick={(e) => setSign(e.target.alt)}>
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
      <button className={styles.submit} onClick={handleSubmit}>Show My Horoscope</button>
    </div>
  )
}

export default Home