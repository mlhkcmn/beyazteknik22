import React from 'react';
import {
    Grid,
    Typography,
    Divider
} from '@mui/material';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import {
    createTheme,
    ThemeProvider
} from "@mui/system/";
import '../styles/pages/Contact.css';
import Footer from '../components/common/Footer';

const theme = createTheme({
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    color: '#cfc64d',
                    width:'20%',
                    marginBottom:'20px',
                    marginTop:'0px'
                },
            },
        },
    },
});

const contact = () => {
    return (
        <>
            <Grid container direction="row">
                <Grid item md="12" textAlign={'center'}>
                    <Typography className='ConcatHeader'>
                        İLETİŞİM ADRESLERİMİZ
                    </Typography>
                    <center>
                    <ThemeProvider theme={theme}>
                        <Divider />
                    </ThemeProvider>
                    </center>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid className='ConcatText'>
                            <ContactMailOutlinedIcon />
                        </Grid>
                        <Grid lg="1.6">
                            <Typography className='ConcatText' marginBottom={'5px'}>info@beyazteknik.com</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Grid className='ConcatText'>
                            <ContactPhoneOutlinedIcon />
                        </Grid>
                        <Grid lg="1.6">
                            <Typography className='ConcatPhone'>+90 507 790 35 50</Typography>
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent="center">
                        <Grid className='ConcatText'>
                            <NotListedLocationOutlinedIcon />
                        </Grid>
                        <Grid lg="">
                            <Typography className='ConcatText'>
                                Akademi, Yeni İstanbul Cd. No:235/1, 42250 Selçuklu/Konya
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} textAlign={'center'}>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1KW-ll48H9n_Xq_Ixs06P-HJRzWtqeLuH&ehbc=2E312F" width="70%" height="526px" />
                </Grid>
            </Grid>
            <br/>
            <Footer/>
        </>
    )
}

export default contact