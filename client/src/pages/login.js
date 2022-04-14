import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { RegisterAccount } from '../components/common/RegisterButtons'
import { SignupInput } from '../components/common/Inputs'
import { ForgotPassword } from '../components/common/Buttons'

const login = () => {
    return (
        <>
            <center>
                <Box className='loginCard'>
                    <Grid container spacing={0} alignItems="stretch">
                        <Box sx={{ padding: 4, paddingTop: '60px' }}>
                            <Grid item xs={12}>
                                <Typography className="signupModalHeader">
                                    Giriş Yap
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
                                    head="Email"
                                    type="email"
                                    placeholder="Enter email address"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SignupInput
                                    head="Password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ float: 'right' }}>
                                <ForgotPassword
                                    text="Forgot password?"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RegisterAccount text="Giriş Yap" type="submit" />
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </center>
        </>
    )
}

export default login