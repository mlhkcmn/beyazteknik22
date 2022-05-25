import { Button, Card, Grid, Input } from '@mui/material'
import React, { useState, useContext, useEffect } from 'react'

const TaskCard = () => {
    // const handleChangeInput = e => {
    //     const { name, value } = e.target
    //     setTask({ ...task, [name]: value })
    // }
    return (
        <>
            <Card className='TaskCard'>
                <Grid container direction='row'>
                    <Grid item xs={12} sx={{ fontSize: '18px' }}>
                        <label htmlFor="name">Name</label>
                        <br />
                        <Input className='TaskCardInput' type="text" name="name" id="name" />
                    </Grid>
                    <Grid item xs={12} sx={{ fontSize: '18px' }}>
                        <label htmlFor="title">Title</label>
                        <br />
                        <Input className='TaskCardInput' type="text" name="title" id="title" />
                    </Grid>
                    <Grid item xs={12} sx={{ fontSize: '18px' }}>
                        <label htmlFor="description">Description</label>
                        <br />
                        <Input className='TaskCardInputMulti' rows={3} multiline type="text" name="description" id="description" />
                    </Grid>
                    <Grid item xs={12} sx={{ fontSize: '18px' }}>
                        <label htmlFor="content">Content</label>
                        <br />
                        <Input className='TaskCardInputMulti' rows={2} multiline type="text" name="content" id="content" />
                    </Grid>
                    <Grid item xs={12} sx={{ fontSize: '18px' }}>
                        <label htmlFor="submit">Submit</label>
                        <br />
                        <Button className='TaskCardButton' type='submit'>
                            Onayla
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default TaskCard