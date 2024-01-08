import Image from 'next/image'
import Head from 'next/head';
import styles from './page.module.css'
// import WeatherIcons from './imageimports';
import SearchForm from './formcomp/formcomp';
import Weather from './weather/weather';
import swlogo from '/public/media/swlogo.png';



// I NEED TO FIGURE OUT A WAY TO USE {USE STATE} WITHOUT MAKING PAGE.JS CLIENT SIDED


export default function Home() {

  // const wICons = new WeatherIcons();

  
  return (
    <main className={styles.main}>
      <Image
        className={styles.bg}
        src="https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Simple Weather Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.boxcontainer}>
        <div className={styles.box}>
          <div className={styles.hold}>
            <Image className={styles.imglogo} src={swlogo} width={75} height={75} alt='displays logo "sW" '/>
            {/* <h1>Simple Weather</h1> */}
          </div>
          <SearchForm/>
        </div>
      </div>
    </main>
  )
}
