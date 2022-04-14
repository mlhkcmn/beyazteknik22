import { useState, useEffect } from 'react';
import { Typography, Grid, Link, Button, IconButton, Stack } from '@mui/material';
import "../../styles/components/Navbar.css";
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import SignUpModal from '../modals/SignupModal';
import LoginModal from '../modals/LoginModal';

export default function Navbar() {

  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Grid container direction={'row'} className="navbarContainer">
        <Grid xs="1">
          <img className='navbarLogo' alt='...'
            src={require('../../images/AboutPageGıf.png')} />
        </Grid>
        <Grid xs="0.5" />
        <Grid container xs="8">
          <Grid item paddingTop={2.7} paddingRight={1.35}>
            <Link sx={{ textDecoration: 'none' }} href={'/'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Ana Sayfa</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item paddingTop={2.7} paddingRight={1.35}>
            <Link sx={{ textDecoration: 'none' }} href={'/about'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Hakkımızda</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item paddingTop={2.7} paddingRight={1.35}>
            <Link sx={{ textDecoration: 'none' }} href={'/market'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Mağaza</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item paddingTop={2.7} paddingRight={1.35}>
            <Link sx={{ textDecoration: 'none' }} href={'/contact'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">İletişim</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid xs="2.4" textAlign={'center'} paddingTop={2.7}>
          <Stack direction={'row'} justifyContent={'space-around'}>
            <IconButton href='/login' aria-label="add to favorites" sx={{ float: 'right' }} >
              <ApartmentRoundedIcon sx={{ color: '#000000', }} fontSize='medium' />
              <div className='iconButton'>
                Login
              </div>
            </IconButton>
            <IconButton href='/register' aria-label="add to favorites" sx={{ float: 'right' }} >
              <AddBusinessOutlinedIcon sx={{ color: '#000000', }} fontSize='medium' />
              <div className='iconButton'>
                Register
              </div>
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
