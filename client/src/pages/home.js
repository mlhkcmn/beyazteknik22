import React from 'react'
import Marka from '../components/common/Marka';
import HeroSlider from '../components/common/HeroSlider'
import Hizmetler from '../components/common/Hizmetler';

const Home = () => {
    return (
        <>
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