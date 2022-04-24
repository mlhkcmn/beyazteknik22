import React from 'react'
import { Container, Grid } from '@mui/material'
import MarketPlaceCard from '../components/common/MarketPlaceCard'
import '../images/arcelik283721.webp';
const market = () => {

    return (
        <>
            <Container maxWidth='100%'>
                <Grid container direction={'row'} maxWidth="100%" paddingBottom={'8px'}>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/arcelik283721.webp')}
                            urunadi="Buzdolabı Motoru"
                            urunfiyat="100₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/arcelik284630.webp')}
                            urunadi="Buzdolabı Kapak Tutacağı"
                            urunfiyat="1050₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/camasir1.webp')}
                            urunadi="Çamaşır Makinesi Kapak Tutacağı"
                            urunfiyat="100₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/camasir1.webp')}
                            urunadi="Çamaşır Makinesi Kapağı"
                            urunfiyat="100₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/firin1.webp')}
                            urunadi="Fırın Kapağı"
                            urunfiyat="100₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/bulasik1.jpg')}
                            urunadi="Bulaşık Makinesi Stop"
                            urunfiyat="1000₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/bulasik1.jpg')}
                            urunadi="Bulaşık Makinesi Sepeti"
                            urunfiyat="100₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/firin1.webp')}
                            urunadi="Fırın Sıcaklık Rolesi"
                            urunfiyat="100₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/klima1.jpg')}
                            urunadi="Klima Plastik Aksam"
                            urunfiyat="100₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/kombi1.jpg')}
                            urunadi="Kombi Kazanı"
                            urunfiyat="100₺"
                        />
                    </Grid>
                    <Grid item xs={10} sm={5} md={4} lg={3} xl={2} padding={'10px'}>
                        <MarketPlaceCard
                            photo={require('../images/kombi1.jpg')}
                            urunadi="Kombi Bar Vanası"
                            urunfiyat="100₺"
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default market
