import { Card, CardMedia, Container, Divider, Grid, Typography } from '@mui/material'
import Slider from 'react-slick'
import '../../styles/components/marka.css'
import boschlogo from '../../images/boschlogo.png'
import bekologo from '../../images/bekologo.png'
import arceliklogo from '../../images/arceliklogo.png'
import vestellogo from '../../images/vestellogo.png'
import profilologo from '../../images/profilologo.png'
import siemenslogo from '../../images/siemenslogo.png'
import grundiglogo from '../../images/grundiglogo.png'
import aristonlogo from '../../images/aristonlogo.gif'
import regallogo from '../../images/regallogo.png'
import altuslogo from '../../images/altuslogo.png'



const Marka = () => {

    const markasetting = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 9,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 200,
        pauseOnHover: true ,
        responsive :[
        {
            breakpoint:1650,
            settings: {slidesToShow: 7}
        },
        {
            breakpoint:1250,
            settings: {slidesToShow: 5}
        },
        {
            breakpoint:950,
            settings: {slidesToShow: 4}
        },
        {
            breakpoint:800,
            settings: {slidesToShow: 3}
        },
        {
            breakpoint:630,
            settings: {slidesToShow: 2}
        },
        {
            breakpoint:450,
            settings: {slidesToShow: 1}
        },
        ]
    };

    return (
        <>
            <Container maxWidth="none">
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item>
                        <Typography className='markatext'>Markalarımız</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Divider className='divider' />
                        <br />
                    </Grid>
                </Grid>
                <div>
                    <Slider {...markasetting} >
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={arceliklogo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={bekologo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={boschlogo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={vestellogo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={profilologo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={siemenslogo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={grundiglogo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={aristonlogo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={regallogo}
                                />
                            </Card>
                        </div>
                        <div>
                            <Card className='childcard'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    src={altuslogo}
                                />
                            </Card>
                        </div>
                    </Slider>
                </div>
            </Container>
        </>
    )
}

export default Marka