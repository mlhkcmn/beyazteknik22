import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import FacebookIcon from '@mui/icons-material/Facebook'
import {
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
  Modal,
  Box,
} from '@mui/material'

export const RegisterAccount = (props) => {
  return (
    <>
      <FormControl className="signupModalRegisterForm">
        <Button className="registerAccount" {...props}>
          <Typography
            sx={{
              color: '#FFFFFF',
              textTransform: 'capitalize',
              fontFamily: 'Mulish',
              fontWeight: 'bold',
            }}
          >
            {props.text}
          </Typography>
        </Button>
      </FormControl>
    </>
  )
}

export const RegisterLinkedin = (props) => {
  return (
    <>
      <FormControl className="signupModalLinkedinForm">
        <Button className="registerLinkedin">
          <LinkedIn
            sx={{
              width: '27px',
              height: '27px',
              marginRight: '1.2rem',
              color: '#0077B7',
            }}
          />
          <Typography
            sx={{
              color: '#000000',
              textTransform: 'capitalize',
              fontFamily: 'Mulish',
              fontWeight: '600',
            }}
          >
            {props.text}
          </Typography>
        </Button>
      </FormControl>
    </>
  )
}

export const RegisterFacebook = (props) => {
  return (
    <>
      <FormControl className="signupModalLinkedinForm">
        <Button className="registerLinkedin">
          <FacebookIcon
            sx={{
              width: '27px',
              height: '27px',
              marginRight: '1.2rem',
              color: '#0077B7',
            }}
          />
          <Typography
            sx={{
              color: '#000000',
              textTransform: 'capitalize',
              fontFamily: 'Mulish',
              fontWeight: '600',
            }}
          >
            {props.text}
          </Typography>
        </Button>
      </FormControl>
    </>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
export const RegisterRadioButton = (props) => {

  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <FormControl className="signupModalRadio">
            <FormControlLabel control={<Checkbox defaultChecked />} label="" />
          </FormControl>
        </Grid>
        <Grid item xs={11} textAlign="left">
          <Typography>
            <Button
              sx={{
                fontSize: '13px',
                lineHeight: '19px',
                color: '#696f79',
                marginTop: '6px',
              }}
            >
              I agree to terms & conditions
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
