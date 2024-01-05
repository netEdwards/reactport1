import React from 'react';
import spin from '/public/spinner.gif'
import Image from 'next/image';
import s from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={s.sc}>
            <Image className={s.spinner} src={spin} alt='loading ...' width={200} height={200}/>
        </div>
    );
};

export default Spinner;
