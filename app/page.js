import Image from 'next/image'
import Head from 'next/head';
import styles from './page.module.css'
// import WeatherIcons from './imageimports';
import SearchForm from './formcomp/formcomp';
import Weather from './weather/weather';



// I NEED TO FIGURE OUT A WAY TO USE {USE STATE} WITHOUT MAKING PAGE.JS CLIENT SIDED


export default function Home() {

  // const wICons = new WeatherIcons();

  
  return (
    <main className={styles.main}>
      <div className={styles.boxcontainer}>
        <div className={styles.box}>
          <div>
            <h1>Simple Weather</h1>
          </div>
          <SearchForm/>
        </div>
      </div>
    </main>
  )
}
