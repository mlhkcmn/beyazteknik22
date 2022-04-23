import React, { useState } from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material';
import { RegisterAccount } from '../components/common/RegisterButtons'
import { register } from '../axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        password: "",
        email: "",
        phoneNumber: ""
    })
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
                            <form onSubmit={(e) => {
                                e.preventDefault()

                                register(formData)
                                    .then((res) => {
                                        navigate('/signin');
                                    })
                                    .catch((err) => {
                                        console.log(err)
                                    })
                            }}>
                                <Grid item xs={12}>
                                    <span className='signupModalInputHead'>Full Name*</span>
                                    <TextField
                                        className='signupModalInput'
                                        type="fullname"
                                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                                        placeholder="Full Name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <span className='signupModalInputHead'>Email Adress*</span>
                                    <TextField
                                        className='signupModalInput'
                                        type="email"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="E-mail"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <span className='signupModalInputHead'>Password*</span>
                                    <TextField
                                        className='signupModalInput'
                                        type="password"
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        placeholder="Parola"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <span className='signupModalInputHead'>Phone Number*</span>
                                    <TextField
                                        className='signupModalInput'
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        placeholder="Telefon Numarası"
                                    />
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                    <RegisterAccount type="submit" text="Kayıt Ol" />
                                </Grid>
                            </form>
                        </Box>
                    </Grid>
                </Box>
            </center>
        </>
    )
}

export default Register