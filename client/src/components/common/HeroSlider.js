import React from 'react'
import beyazesya from '../../images/bg.png'
import { Container, Card, Button, CardActions, CardContent, Grid, Typography } from '@mui/material'
import '../../styles/components/heroslider.css'

const HeroSlider = () => {
    return (
        <>
            <Container maxWidth="none" sx={{ bgcolor: '#40B072' }}>
                <Grid container spacing={1} direction="row" justifyContent="space-evenly" alignItems="center">
                    <Grid item>
                        <Grid container spacing={8} direction="column" justifyContent="space-between" alignItems="stretch">
                            <Grid item>
                                <Typography className='text' variant='h4'>
                                    Beyaz Teknik Tamir ve Parça Tedariği
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Card className='card1'>
                                    <CardContent>
                                        <Typography sx={{ fontFamily: 'Mulish', fontSize: '19px', textAlign: 'center' }}>
                                            Sizde bizimle çalışmak ister misiniz ?
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button className='button'>
                                            <Typography className='buttontext'>Hemen Basvur!</Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography>
                            <img className="footerbg" alt='...' src={beyazesya} />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default HeroSlider