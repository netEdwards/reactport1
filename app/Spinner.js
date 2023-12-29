import React from 'react';
import spin from '/public/spinner.gif'
import Image from 'next/image';

const Spinner = () => {
    return (
        <>
            <Image src={spin} alt='loading ...' width={200} height={200}/>
        </>
    );
};

export default Spinner;
