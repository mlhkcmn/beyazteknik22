import React from 'react';
import {
    Grid,
    Box,
    Divider,
    Typography,
} from '@mui/material';
import '../styles/pages/About.css';
import Footer from '../components/common/Footer';

const about = () => {
    return (
        <>
            <Grid container direction={'row'}>
                <Grid container columnSpacing={3}>
                    <Grid item xs={12} md={6}>
                        <Box paddingTop={6} textAlign={'center'}>
                            <img style={{
                                maxWidth: '100%',
                            }}
                                alt='...'
                                src={require('../images/AboutPageImg.png')}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography paddingTop={8} variant='h1' className='aboutHeader'>
                            Hakkımızda
                        </Typography>
                        <Typography paddingTop={1.3} className='aboutHeaderText'>
                            Beyaz Teknik 5 arkadaşın girişimleriyle kurulan bir firmadır. Bir çok dünya devi ve Türkiye içinde elektrikli ev aletlerini üreten firmaların liderleri ile çalışmaktadır.
                            Bu firmaların yetkili servislerinin franchising'liğini yapan bir kuruluştur. <br /> <br />
                            Bizim buradaki amacımız beyaz eşya tamircilerini birer firma ve en kısa yolu tercih ederek geliştirmektir.
                            Sistemimizden bahsedecek olur isek firmaların yedek parçalarını fabrika fiyatından teknik servislere ulaştırıp onları birer yetkili servis yapmaktır. <br /> <br />
                            Hem yedek parçaya kısa yoldan ulaşırken hem de kendilerine kurulan sistemlerinden tamirat ve müşteri takibi yapabilmekteler.
                            Bu sayede kısa sürede, müşteriyi ve teknik servisi mutlu edebilmekte.
                        </Typography>
                        <br />
                        <Divider />
                        <Typography paddingTop={4} variant='h1' className='aboutHeader'>
                            Vizyonumuz
                        </Typography>
                        <Typography paddingTop={2.3} className='aboutHeaderText'>
                            Ortaklarımızın güveni ve memnuniyeti ile bugünlere geldik. Gelecekte de aynı hassasiyetle fark yaratan, çizgi üstü, kaliteli ve dayanıklı çözüm yolları üretmeye devam edeceğiz. Kaliteyi tüm Dünya’ya ulaştırmak ve müşterilerimize kazandırmak için SİZİNLEYİZ.
                        </Typography>
                        <br />
                        <Divider />
                        <Typography paddingTop={4} variant='h1' className='aboutHeader'>
                            Misyonumuz
                        </Typography>
                        <Typography paddingTop={2.3} className='aboutHeaderText'>
                            Özverili ve çözüm odaklı bir çalışma anlayışıyla müşterilerinin ve iş ortaklarının sorunlarına çözümler sunmaktır.
                        </Typography>
                        <br/>
                        <br/>
                        <br/>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </>
    );
}

export default about;