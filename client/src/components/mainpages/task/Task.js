import React from 'react'
import TaskProduct from './TaskProduct'
import TaskModal from './TaskModal'
import { Grid } from '@mui/material'

const task = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={3} marginLeft={2}>
                    <TaskProduct />
                </Grid>
            </Grid>
        </>
    )
}

export default task