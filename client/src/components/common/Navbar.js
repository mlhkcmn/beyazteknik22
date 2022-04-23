import React, { useEffect } from "react";
import { Typography, Grid, Link, Button, IconButton, Menu, MenuItem, Divider } from '@mui/material';
import "../../styles/components/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function Navbar({user, setUser}) {
    useEffect(() => {
        if(localStorage.getItem('user') && !user) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, [user]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
                container direction={'row'} className="navbarContainer">
                <Grid xs="1.5">
                    <img className='navbarLogo' alt='...'
                        src={require('../../images/AboutPageGıf.png')} />
                </Grid>
                <Grid alignItems={'center'} container sm="9" md="8.5">                 {/* 10.8 */}
                    <Grid item sm="2" md="1.6" />
                    <Grid item sm="2.5" md="2.3">
                        <Link sx={{ textDecoration: 'none' }} href={'/'}>
                            <Button className="navbarButton" variant="text">
                                <Typography className="navbarButton" variant="navbar">Ana Sayfa</Typography>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item sm="2.5" md="2.3">
                        <Link sx={{ textDecoration: 'none' }} href={'/about'}>
                            <Button className="navbarButton" variant="text">
                                <Typography className="navbarButton" variant="navbar">Hakkımızda</Typography>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item sm="2.5" md="2.3">
                        <Link sx={{ textDecoration: 'none' }} href={'/market'}>
                            <Button className="navbarButton" variant="text">
                                <Typography className="navbarButton" variant="navbar">Mağaza</Typography>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item sm="2.5" md="2.3">
                        <Link sx={{ textDecoration: 'none' }} href={'/contact'}>
                            <Button className="navbarButton" variant="text">
                                <Typography className="navbarButton" variant="navbar">İletişim</Typography>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container alignItems={'center'}sm="1.5" md="2" direction={'row'} >
                    <Grid container justifyContent={'space-around'}>
                    {
                        user ? 
                        <IconButton onClick={(e) => {
                            localStorage.removeItem("user");
                            setUser(null);
                        }} href='/signin' aria-label="add to favorites"  >
                            <LoginIcon sx={{ color: '#fff', }} fontSize='large' />
                            <div className='iconButton'>
                                Çıkış Yap
                            </div>
                        </IconButton>
                        :
                        <IconButton href='/signin' aria-label="add to favorites"  >
                            <LoginIcon sx={{ color: '#fff', }} fontSize='large' />
                            <div className='iconButton'>
                                Giriş Yap
                            </div>
                        </IconButton>
                    }
                    {
                        user ?
                        null
                        :
                        <IconButton href='/signup' aria-label="add to favorites" >
                            <HowToRegIcon sx={{ color: '#fff', }} fontSize='large' />
                            <div className='iconButton'>
                                Kayıt Ol
                            </div>
                        </IconButton>
                    }
                    </Grid>
                </Grid>
            </Grid>

            {/* Mobile Menu */}
            <Grid sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' } }}
                container direction={'row'} className="navbarContainer">
                <Grid xs="1.5">
                    <img className='navbarLogo' alt='...'
                        src={require('../../images/AboutPageGıf.png')} />
                </Grid>
                <Grid container xs="10.5" alignItems={'center'}>
                    <Grid item xs="12">
                        <IconButton
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleOpen}
                            sx={{ float: 'right' }}>
                            <MenuIcon sx={{color:'#fff'}} fontSize="large" />
                        </IconButton>
                        <Menu
                            id="demo-positioned-menu"
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'sub',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'sub',
                                horizontal: 'right',
                            }}>
                            <MenuItem>
                                <Link className="menuItemLink" href={'/'}>
                                    <Typography className="menuItemText">Home</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className="menuItemLink" href={'/about'}>
                                    <Typography className="menuItemText">Hakkımızda</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className="menuItemLink" href={'/market'}>
                                    <Typography className="menuItemText">Mağaza</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className="menuItemLink" href={'/contact'}>
                                    <Typography className="menuItemText">İletişim</Typography>
                                </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <Link className="menuItemLink" href={'/signin'}>
                                    <Typography className="menuItemText">Giriş Yap</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className="menuItemLink" href={'/signup'}>
                                    <Typography className="menuItemText">Kayıt Ol</Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
