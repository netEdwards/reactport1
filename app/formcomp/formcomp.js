'use client'

import React from "react";
import { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs"
import styles from "./formcomp.module.css"

export default function SearchForm(){

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&q=${city}&aqi=no`

  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      console.log(response.data)
    })
    setCity('')
    setLoading(false)
    console.log(city)
  }

    return(
        <div className={styles.formContainer}>
            <form onSubmit={fetchWeather} className={styles.formy}>
                <div className={styles.second}>
                    <input type="text" placeholder="What city!?!?!?" onChange={(e) => setCity(e.target.value)} className={styles.inp}/>
                    <button onClick={fetchWeather} className={styles.butt}>
                    <BsSearch size={15} className={styles.icon}/>
                    </button>
                </div>
            </form>
        </div>
    )

}