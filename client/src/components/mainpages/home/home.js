import React from 'react'
import Marka from '../../common/Marka';
import HeroSlider from '../../common/HeroSlider'
import Hizmetler from '../../common/Hizmetler';
import Footer from '../../common/Footer';

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
            <Footer />
        </>
    )
}

export default Home;