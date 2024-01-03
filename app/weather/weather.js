import { Fira_Sans } from "next/font/google"
import styles from "./weather.module.css"
import WeatherIcons from "../imageimports"
import React from "react"


const fira_sans = Fira_Sans({ 
    subsets: ['latin'], 
    weight: ['400']
  })



const Weather = ({data}) => {
    console.log(data)

    const weatherIcons = new WeatherIcons();

    var condition = "";
    var icon;

    if (data.current.condition.text === "Sunny") {
        condition = "Sunny";
        icon = weatherIcons.sunnyicon;
    }

    return (
        <main className={`${styles.main}`}>
            <div className={styles.header}>Current Temp: <br/> {data.current.temp_f}°F</div>
            <div className={styles.info}>
             <div className={styles.grid}>
                 <div className={styles.location}>
                    <p>Location: <br/> {data.location.name}, {data.location.region}</p>
                    <p>Time: {data.location.localtime}</p>
                 </div>
                 <div className={styles.condition}>
                    <p>{data.current.condition.text}</p>
                    <p>UV : {data.current.uv} </p>
                    <p>Visibility : <br/>{data.current.vis_miles} milesAtla<br/> {data.current.vis_km} kilometers</p>
                 </div>
             </div>
            </div>
        </main>
    )
}

export default Weather