import React, { useState } from 'react'
import { Box, Typography, Grid, TextField } from '@mui/material'
import { RegisterAccount } from '../components/common/RegisterButtons'
import { useNavigate } from "react-router-dom"
import { ForgotPassword } from '../components/common/Buttons'
import { login } from '../axios'

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
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
                            <form onSubmit={(e) => {
                                e.preventDefault()

                                login(formData)
                                    .then((res) => {
                                        localStorage.setItem('user', JSON.stringify(res.data.user))
                                        setUser(res.data.user);
                                        navigate('/');
                                    })
                                    .catch((err) => {
                                        console.log(err.response.data.message)
                                    })
                            }}>
                                <Grid item xs={12}>
                                <span className='signupModalInputHead'>Email Adress*</span>
                                    <TextField
                                        className='signupModalInput'
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        type="email"
                                        placeholder="Enter email address"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <span className='signupModalInputHead'>Password*</span>
                                    <TextField
                                        className='signupModalInput'
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                            </form>
                        </Box>
                    </Grid>
                </Box>
            </center>
        </>
    )
}

export default Login