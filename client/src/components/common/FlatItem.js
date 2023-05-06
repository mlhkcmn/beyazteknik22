import React from 'react';
import { Store, Home, Chair, SelectAll } from '@mui/icons-material';
import { CardActionArea, Grid, Typography, Stack } from "@mui/material";
import Product from '../../public/images/product1.jpeg'

const FlatItem = ({ slug }) => {
    return (
        <>
            <CardActionArea href={`/flat/${slug}`}>
                <Grid item xs={6} direction="row" textAlign="center" sx={{ bgcolor: 'khaki' }}>
                    <img className="FlatItemImage" src={Product} alt="flat" />
                    <Grid item xs={12}>
                        <Stack item xs={12} sx={{ bgcolor: 'white' }} pb={3}>
                            <Typography className="item-title">Bursa Gemlikde Deniz Manzaralı Daire</Typography>
                            <Typography className="item-price">3.500.000₺</Typography>
                        </Stack>
                        <div className="item-icon d-flex alig-items-center justify-content-between">
                            <div>
                                <Home fontSize="medium" /><span>Daire</span>
                            </div>
                            <div>
                                <Chair fontSize="medium" /><span> 3+1 </span>
                            </div>
                            <div>
                                <SelectAll fontSize="medium" /><span> 120m2 </span>
                            </div>
                            <div>
                                <Store fontSize="medium" /><span> Altın Emlak </span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </CardActionArea>
        </>
    )
}

export default FlatItem