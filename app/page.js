import Image from 'next/image'
import styles from './page.module.css'
import WeatherIcons from './imageimports';



export default function Home() {

  const wICons = new WeatherIcons();

  return (
    <main className={styles.main}>
      <div className={styles.boxcontainer}>

        <div className={styles.box}>
          <h1>Simple Weather</h1>
        </div>
        <div className={styles.iconholder}>
          <Image src={wICons.cloudyicon} width={100} height={100} alt='cloudy icon'/>
          <Image src={wICons.sunnyicon} width={50} height={50} alt='cloudy icon'/>
          <Image src={wICons.hazeicon} width={50} height={50} alt='cloudy icon'/>
          <Image src={wICons.snowicon} width={50} height={50} alt='cloudy icon'/>
          <Image src={wICons.cloudyicon} width={50} height={50} alt='cloudy icon'/>

        </div>

      </div>
    </main>
  )
}
