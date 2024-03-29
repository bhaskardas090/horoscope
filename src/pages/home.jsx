import { useState } from "react";
import { zodiacImages } from "../data";
import styles from "./home.module.css";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
const axios = require("axios");

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState();

  const days = ["today", "yesterday", "tomorrow"];
  const options = {
    method: "GET",
    url: "https://horostory.p.rapidapi.com/horoscope",
    params: {
      sign: sign,
      date: day,
    },
    headers: {
      "X-RapidAPI-Key": "de9e63ce4cmshcb1237b75a732eap197588jsn7d2dc5322ad8",
      "X-RapidAPI-Host": "horostory.p.rapidapi.com",
    },
  };

  const onDayChange = (e) => {
    setDay(e.target.value);
    console.log(e.target.value);
  };
  const handleZodiac = (e, id) => {
    setSign(e.target.alt);
    setSelected(id);
  };

  const handleSubmit = () => {
    // SIMPLE FORM VALIDATION
    if (name.length === 0) {
      alert("Enter your Name");
      return;
    }
    if (email.length === 0) {
      alert("Enter a valid Email");
      return;
    }
    if (sign.length === 0) {
      alert("Select a Zodiac Sign");
      return;
    }
    if (day.length === 0) {
      alert("Select the day");
      return;
    }
    setLoading(true);
    // SETING USER STATE DATA
    const newUser = { ...user };
    newUser.name = name;
    newUser.email = email;
    newUser.sign = sign;
    newUser.date = day;
    setUser(newUser);
    // FETCHING DATA FRO API
    const getdata = async () => {
      try {
        const { data } = await axios.request(options);
        if (data) {
          sessionStorage.setItem("result", JSON.stringify({ ...data, sign }));
          setLoading(false);
        }
      } catch (error) {
        if (error) {
          console.log(error.message);
          sessionStorage.setItem("result", JSON.stringify("error"));
          setLoading(false);
        }
      }

      // REDIRECTING USR & SAVING USER DATA IN STORAGE
      navigate("/result", { replace: true });
      sessionStorage.setItem("user", JSON.stringify(newUser));
    };
    getdata();
  };

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
        <Dropdown
          value={day}
          onChange={onDayChange}
          options={days}
          placeholder="Select Day"
        />
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
        {loading ? "Loading..." : "Show My Horoscope"}
      </button>
    </div>
  );
};

export default Home;
