import React, { useState } from 'react'
import { Box, Typography, Modal, Grid, IconButton, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {
  RegisterAccount,
  RegisterLinkedin,
  RegisterFacebook,
} from '../common/RegisterButtons'
import { SignupInput } from '../common/Inputs'
import { ForgotPassword } from '../common/Buttons'

const style = {
  maxWidth: '375px',
  minHeight: '610px',
  borderRadius: '30px',
  bgcolor: '#FFFFFF',
  textAlign: 'center',
}
const styles = {
  overflowX: 'hidden',
  paddingTop: '7%',
  paddingBottom: '7%',
}

const LoginModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Button onClick={handleOpen}>Open modallll</Button>
      <Modal sx={styles} open={open} onClose={handleClose}>
          <center>
            <Box sx={style}>
              <Grid container spacing={0} alignItems="stretch">
                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                  <IconButton>
                    <CloseIcon
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
                      Login!
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
                      head="Email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SignupInput
                      name="password"
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
                    <RegisterAccount text="Log In" type="submit" />
                  </Grid>
                  <Typography className="signupModalFormMiddleText">
                    Or
                  </Typography>
                  <Grid item xs={12}>
                    <RegisterLinkedin text="Login with LinkedIn" />
                  </Grid>
                  <Grid item xs={12}>
                    <RegisterFacebook text="Login with Facebook" />
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </center>
      </Modal>
    </>
  )
}

export default LoginModal
