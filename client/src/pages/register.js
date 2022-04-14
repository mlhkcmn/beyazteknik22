import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { SignupInput } from '../components/common/Inputs'
import { RegisterAccount } from '../components/common/RegisterButtons'

const register = () => {
    return (
        <>
            <center>
                <Box className='registerCard'>
                    <Grid container spacing={0} alignItems="stretch">
                        <Box sx={{ padding: 4, paddingTop: '60px' }}>
                            <Grid item xs={12}>
                                <Typography className="signupModalHeader">
                                    Kayıt Ol
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className="signupModalDesc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor in.
                                </Typography>
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <SignupInput
                                    head="Email address*"
                                    type="email"
                                    placeholder="Enter email address"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SignupInput
                                    head="Create password*"
                                    type="password"
                                    placeholder="Password"
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <RegisterAccount type="submit" text="Kayıt Ol" />
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </center>
        </>
    )
}

export default register