import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'
import "../../styles/components/MarketPlaceCard.css";

const MarketPlaceCard = (props) => {
    return (
        <>
            <Card className='MarketPlaceCard' sx={{ maxWidth: 270 }}>
                <CardActionArea>
                    <center>
                        <br/>
                        <CardMedia
                            sx={{ width: '170px',height:'200px'}}
                            component="img"
                            image={props.photo} />
                    </center>
                    <CardContent>
                        <Typography sx={{ fontFamily: 'mulish', fontSize: '23px', textAlign: 'center' }}>
                            {props.urunadi}
                        </Typography>
                    </CardContent>
                    <br />
                </CardActionArea>
            </Card>
        </>
    )
}

export default MarketPlaceCard;