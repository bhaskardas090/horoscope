import {useState} from 'react';
import {zodiacImages} from '../data';
import styles from './home.module.css';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom'
const axios = require("axios");

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("")
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState()
  
  const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: {sign: sign, day: 'today'},
      headers: {
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'de9e63ce4cmshcb1237b75a732eap197588jsn7d2dc5322ad8'
      }
    };


  const handleZodiac = (e,id) => {
    setSign(e.target.alt)
    setSelected(id)
  }

  const handleSubmit = () => {
    setLoading(true);
    // GETTING DATA 
    const getdata = async() => {
      const {data} = await axios.request(options);
      if(data){
        sessionStorage.setItem('result', JSON.stringify({...data, sign}));
        setLoading(false)
      }
    // REDIRECTING & SAVING USER DATA
      navigate('/result', { replace: true })
      sessionStorage.setItem('user', JSON.stringify({name, email}));
    }
    getdata();
  }

  return (
    <div className={styles.home}>
      <div className={styles.inputs}>
        <div className="p-input-icon-left">
          <i className="pi pi-user" />
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Bhaskar Das"
            className={styles.input}
          />
        </div>
        <div className="p-input-icon-left">
          <i className="pi pi-google" />
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className={styles.input}
          />
        </div>
      </div>
      <h1 className={styles.zodiacsHeader}>Choose Your Zodiac Sign</h1>
      <div className={styles.zodiacsContainer}>
        {zodiacImages.map((zodiac) => (
          <img
            onClick={(e) => handleZodiac(e, zodiac.id)}
            key={zodiac.id}
            src={zodiac.path}
            alt={zodiac.alt}
            className={
              selected === zodiac.id
                ? `${styles.zodiac} ${styles.selected}`
                : `${styles.zodiac}`
            }
          />
        ))}
      </div>
      <button className={styles.submit} onClick={handleSubmit}>
        {loading ? 'Loading...' : 'Show My Horoscope'}
      </button>
    </div>
  );
}

export default Home