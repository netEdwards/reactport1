import s from './InitialDisplay.module.css';
import React from 'react';
import Image from 'next/image';


export default function InitialDisplay() {
    return(
    <div>
        <p className={s.p}>This is a simple weather site. <br/>As you can tell from the title. <br/>You will find Current conditions <br/>only no forecast unless you wanna pay for it..<br/> Search for a city and it will give you the current conditions <br/>You can use zip code from most common countries or airport codes.</p>
        
    </div>
    )

}
