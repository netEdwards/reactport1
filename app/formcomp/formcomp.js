'use client'

import React from "react";
import { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs"
import styles from "./formcomp.module.css"
import Weather from "../weather/weather";
import Spinner from "../Spinner";
import InitialDisplay from "../intialdisplay/InitialDisplay";


export default function SearchForm(){

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&q=${city}&aqi=no`

  const fetchWeather = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(isSubmitted)
    try{
      const response = await axios.get(url)
      setWeather(response.data)
      setIsSubmitted(true)
    }catch (error) {
      console.error(error)
      setError(true)
    }
    finally{
      setCity('')
      setLoading(false)
    }
    
    setCity('')
    setLoading(false)
  }

  if(loading) {
    return <Spinner/>
  } else if(error) {
    return(
      <div className={styles.errorText}>
        Error, check your search. Maybe a typo?
        <button className= {styles.rButt} onClick={() => window.location.reload()}>
          <span className={styles.reload}>⟳</span>
        </button>
      </div>
    )
  }
  else{
    return(
        <div className={styles.formContainer}>
          <div>
            <form onSubmit={fetchWeather} className={styles.formy}>
                <div className={styles.second}>
                    <input type="text" placeholder="Enter a city" onChange={(e) => setCity(e.target.value)} className={styles.inp}/>
                    <button onClick={fetchWeather} className={styles.butt}>
                    <BsSearch size={18} className={styles.icon}/>
                    </button>
                </div>
            </form>
          </div>
          {isSubmitted === false ? <InitialDisplay/> : weather.current && <Weather data={weather}/>}
          
        </div>
        
        
    )
  }

}