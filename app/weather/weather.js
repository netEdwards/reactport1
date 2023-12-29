import styles from "./weather.module.css"
import React from "react"


const Weather = ({data}) => {
    console.log(data)
    return (
        <div className={styles.gridContainer}>
            <div className={styles.grid}>
                <div className={styles.gridItem}>
                    <h2>
                        {data.location.name},<br/> {data.location.region}
                    </h2>
                </div>
                <div className={styles.gridItem}>
                    <h2>
                        {data.current.temp_f}°F
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Weather