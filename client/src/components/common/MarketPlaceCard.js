import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea, Grid, Button } from '@mui/material'
import "../../styles/components/MarketPlaceCard.css";

const MarketPlaceCard = (props) => {
    return (
        <>
            <Card className='MarketPlaceCard' sx={{ maxWidth: 270 }}>
                <CardActionArea>
                    <center>
                        <br />
                        <CardMedia className='marketCardMedia'
                            component="img"
                            image={props.photo} />
                    </center>
                    <CardContent>
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={8}>
                                <Typography sx={{ fontFamily: 'mulish', fontSize: '15px', height:'48px',width:'90%',paddingTop:'5px',color:'#60a8be'}}>
                                    {props.urunadi}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontFamily: 'mulish', fontSize: '25px',textAlign:'center',color:'#60a8be'}}>
                                    {props.urunfiyat}
                                </Typography>
                            </Grid>
                            <Grid sx={12} width='100%' textAlign={'center'} paddingTop="15px">
                                <Button className="sellButton">
                                    <Typography>
                                        Sepete Ekle
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <br />
                </CardActionArea>
            </Card>
        </>
    )
}

export default MarketPlaceCard;

