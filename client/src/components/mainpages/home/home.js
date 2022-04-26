import React from 'react'
import Marka from '../../common/Marka';
import HeroSlider from '../../common/HeroSlider'
import Hizmetler from '../../common/Hizmetler';

const Home = ({user}) => {
    return (
        <>
            <br />
            <HeroSlider />
            <br />
            <Hizmetler />
            <br />
            <Marka />
            <br />
        </>
    )
}

export default Home;