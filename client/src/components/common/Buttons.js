import React from 'react'
import { Typography, Box, Button, FormControl } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const PinkButton = (props) => {
  return (
    <>
      <div>
        <div className="heroButtonStyle">
          <div className="pinkButtonStyle">
            <Button onClick={props.onClick}>
              <Typography className="heroButtonText">{props.text}</Typography>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export const PaginationButtonNext = (props) => {
  return (
    <>
      <Button
        style={{
          marginTop: '20px',
          minWidth: '41px',
          height: '41px',
          borderRadius: '20.5px',
          color: 'white',
          backgroundColor: 'orange',
          boxShadow: '0px 10px 24px rgba(0,0,0,0.19)',
        }}
      >
        <ArrowForwardIcon />
      </Button>
    </>
  )
}

export const PaginationButtonPrev = (props) => {
  return (
    <>
      <Button
        style={{
          minWidth: '41px',
          height: '41px',
          borderRadius: '20.5px',
          color: 'black',
          backgroundColor: 'white',
          boxShadow: '0px 10px 24px rgba(0,0,0,0.19)',
        }}
        className="carouselButton"
      >
        <ArrowBackIcon />
      </Button>
    </>
  )
}

export const CreateProfileLeftButton = (props) => {
  return (
    <>
      <FormControl className="CreateProfileUseCamera" sx={{ float: 'right' }}>
        <Button className="CreateProfileUseCameraButton">
          <span className="CreateProfileUseCameraButtonText">
            {props.buttontext}
          </span>
        </Button>
      </FormControl>
    </>
  )
}

export const CreateProfileRightButton = (props) => {
  return (
    <>
      <FormControl className="CreateProfileUpluadPhoto">
        <Button className="CreateProfileUpluadPhotoButton">
          <span className="CreateProfileUploadButtonText">
            {props.buttontext}
          </span>
        </Button>
      </FormControl>
    </>
  )
}

export const ForgotPassword = (props) => {
  return (
    <>
      <Typography>
        <Button {...props}>
          <u className="ForgotPasswordText">{props.text}</u>
        </Button>
      </Typography>
    </>
  )
}
