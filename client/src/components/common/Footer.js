import React from "react";
import "../../styles/components/Footer.css";
import {
    Container,
    Grid,
    Typography,
    Divider
} from "@mui/material";
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import {
    createTheme,
    ThemeProvider
} from "@mui/system/";

const theme = createTheme({
    overrides: {
        MuiDivider: {
            text: {
            },
        },
    },
});

const Footer = () => {
    return (
        <Container className="footerBody">
            <Grid container direction={'row'} alignItems={'center'}>
                <Grid lg="7" >
                    <Grid container direction={'row'}>
                        <Grid lg="2"></Grid>
                        <Grid lg="8">
                            <Typography className="footerCopyRight">
                                © 2022.  BeyazTeknik Ltd.Şti. | Tüm Hakları Saklıdır. |
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid lg="5">
                    <Grid container direction={'row'}>
                        <Grid>
                            <KitchenOutlinedIcon />
                        </Grid>
                        <Grid lg="">
                            <Typography className="footerConcat">
                                İletişim Bilgilerimiz
                            </Typography>
                        </Grid>
                    </Grid>
                    <ThemeProvider theme={theme}>
                        <Divider className="footerDivider" />
                    </ThemeProvider>
                    <Grid container direction={'row'}>
                        <Grid>
                            <NotListedLocationOutlinedIcon sx={{
                                marginRight: '2px'
                            }} />
                        </Grid>
                        <Grid lg="">
                            <Typography className="footerLocation">
                                Akademi, Yeni İstanbul Cd. No:235/1, 42250 Selçuklu/Konya
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction={'row'}>
                        <Grid>
                            <ContactPhoneOutlinedIcon />
                        </Grid>
                        <Grid lg="3">
                            <Typography className="footerText">+90 507 790 35 50</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction={'row'}>
                        <Grid>
                            <ContactMailOutlinedIcon />
                        </Grid>
                        <Grid lg="3">
                            <Typography className="footerText">info@beyazteknik.com</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;