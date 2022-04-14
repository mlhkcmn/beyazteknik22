import React from 'react'
import { Grid, Typography, Divider, Card, Container } from '@mui/material'
import '../../styles/components/hizmetler.css'
import camasir from '../../images/camasir.png'
import buzdolabi from '../../images/buzdolabi.png'
import kombi from '../../images/kombi.png'
import klima from '../../images/klima.png'
import bulasik from '../../images/bulasik.png'
import firin from '../../images/firin.png'

const Hizmetler = () => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item>
                    <Typography className='hizmetlertext'>Hizmetlerimiz</Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item>
                    <Divider className='divider' />
                    <br />
                </Grid>
            </Grid>
            <Container maxWidth='xl'>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={4}>
                        <Card className='hzmtcard'>
                            <br />
                            <Typography>
                                <img src={camasir} />
                            </Typography>
                            <br />
                            <Typography className='text1' >
                                Çamaşır Makinesi Tamiri
                            </Typography>
                            <br />
                            <Typography className='text2'>
                                Çamaşır makinesi tamiri fiyatları en çok karşılaşılan arızalar
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className='hzmtcard'>
                            <br />
                            <Typography>
                                <img src={buzdolabi} />
                            </Typography>
                            <br />
                            <Typography className='text1' >
                                Buzdolabı Tamiri
                            </Typography>
                            <br />
                            <Typography className='text2'>
                                Buzdolabı tamiri fiyatları; buzdolabı tamirinde en çok karşılaşılan arızalar
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className='hzmtcard'>
                            <br />
                            <Typography>
                                <img src={kombi} />
                            </Typography>
                            <br />
                            <Typography className='text1' >
                                Kombi Tamiri
                            </Typography>
                            <br />
                            <Typography className='text2'>
                                Kombo tamiri fiyatları; kombi tamirinde en çok karşılaşılan arızalar
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <br />
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={4}>
                        <Card className='hzmtcard'>
                            <br />
                            <Typography>
                                <img src={klima} />
                            </Typography>
                            <br />
                            <Typography className='text1' >
                                Klima Tamiri
                            </Typography>
                            <br />
                            <Typography className='text2'>
                                Klima tamiri fiyatları; klima bakımı, tamirinde en çok karşılaşılan arızalar
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className='hzmtcard'>
                            <br />
                            <Typography>
                                <img src={bulasik} />
                            </Typography>
                            <br />
                            <Typography className='text1' >
                                Bulaşık Makinesi Tamiri
                            </Typography>
                            <br />
                            <Typography className='text2'>
                                Bulaşık makinesi tamiri fiyatları; Bulaşık makinesi tamirinde en çok karşılaşılan arızalar
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className='hzmtcard'>
                            <br />
                            <Typography>
                                <img src={firin} />
                            </Typography>
                            <br />
                            <Typography className='text1' >
                                Fırın Tamiri
                            </Typography>
                            <br />
                            <Typography className='text2'>
                                Fırın tamiri fiyatları; fırın tamirinde en çok karşılaşılan arızalar
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Hizmetler