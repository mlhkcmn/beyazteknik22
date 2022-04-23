import React from 'react'
import Marka from '../components/common/Marka';
import HeroSlider from '../components/common/HeroSlider'
import Hizmetler from '../components/common/Hizmetler';
import Footer from '../components/common/Footer';

const Home = ({user}) => {
    return (
        <>
            <HeroSlider />
            <br />
            <Hizmetler />
            <br />
            <Marka />
            <br />
            <Footer/>
        </>
    )
}

export default Home;