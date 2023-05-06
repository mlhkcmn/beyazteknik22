import React from 'react';
import { Store, Home, Chair, SelectAll } from '@mui/icons-material';
import { CardActionArea, Grid, Typography, Stack } from "@mui/material";
import Product from '../../public/images/product1.jpeg'

const FlatItem = ({ slug }) => {
    return (
        <>
            <CardActionArea href={`/flat/${slug}`}>
                <Grid item xs={4} direction="row" textAlign="center" sx={{ bgcolor: 'khaki' }}>
                    <img className="FlatItemImage" src={Product} alt="flat" />
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between" spacing={3} padding={1} sx={{ bgcolor: 'white' }}>
                            <Typography fontWeight="600" color="#364465" fontSize="18px" textAlign="left">Bursa Gemlikde Deniz Manzaralı Daire</Typography>
                            <Typography fontWeight="bold" color="#364465" fontSize="25px">3.500.000₺</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
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
                        </Stack>
                        <div className="item-icon d-flex alig-items-center justify-content-between">

                        </div>
                    </Grid>
                </Grid>
            </CardActionArea>
        </>
    )
}

export default FlatItem