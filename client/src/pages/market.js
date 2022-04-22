import React from 'react'
import { Grid } from '@mui/material'
import MarketPlaceCard from '../components/common/MarketPlaceCard'

const market = () => {

    return (
        <>
            <Grid container maxWidth="100%">
                <Grid item xs={2.5} sx={{bgcolor:'red'}}>
                    asklfjmaslşkf
                </Grid>
                <Grid item xs={9} sx={{bgcolor:'blue'}}>
                    asklfjmaslşkf
                </Grid>
                <Grid item xs={0.5}/>
            </Grid>
            <MarketPlaceCard
                urunadi="selamlar"
            />
        </>
    )
}

export default market