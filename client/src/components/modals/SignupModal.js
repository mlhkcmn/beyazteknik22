import React, { useState } from 'react'
import { Box, Typography, Modal, Grid, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {
  RegisterAccount,
  RegisterLinkedin,
  RegisterRadioButton,
  RegisterFacebook,
} from '../common/RegisterButtons'
import { SignupInput } from '../common/Inputs'

const style = {
  maxWidth: '432px',
  minHeight: '710px',
  borderRadius: '30px',
  bgcolor: '#FFFFFF',
  textAlign: 'center',
}
const styles = {
  overflowX: 'hidden',
  paddingTop: '7%',
  paddingBottom: '7%',
}

const SignupModal = (props) => {

  return (
    <>
      <Modal
        sx={styles}
        open={props.showModal}
        onClose={props.setShowModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <center>
            <Box sx={style}>
              <Grid container spacing={0} alignItems="stretch">
                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                  <IconButton>
                    <CloseIcon
                      onClick={() => props.setShowModal(false)}
                      sx={{ color: '#FAA629' }}
                      fontSize="large"
                    />
                  </IconButton>
                </Grid>
                <Box sx={{ padding: 4 }}>
                  <Grid item xs={12}>
                    <Typography
                      id="modal-modal-title"
                      className="signupModalHeader"
                    >
                      Register Individual Account!
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
                      name="email"
                      head="Email address*"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SignupInput
                      name="password"
                      head="Create password*"
                      type="password"
                      placeholder="Password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SignupInput
                      name="confirmPassword"
                      head="Repeat password*"
                      type="password"
                      placeholder="Repeat password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <RegisterRadioButton />
                  </Grid>
                  <Grid item xs={12}>
                    <RegisterAccount type="submit" text="Register Account" />
                  </Grid>
                  <Typography className="signupModalFormMiddleText">
                    Or
                  </Typography>
                  <Grid item xs={12}>
                    <RegisterLinkedin text="Register with LinkedIn" />
                  </Grid>
                  <Grid item xs={12}>
                    <RegisterFacebook text="Register with Facebook" />
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </center>
      </Modal>
    </>
  )
}
export default SignupModal
