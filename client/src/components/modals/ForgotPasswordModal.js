import React from 'react'
import { Box, Typography, Modal, Grid, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { RegisterAccount } from '../common/RegisterButtons'
import { SignupInput } from '../common/Inputs'

const style = {
  maxWidth: '450px',
  minHeight: '400px',
  borderRadius: '30px',
  bgcolor: '#FFFFFF',
  textAlign: 'center',
}
const styles = {
  overflowX: 'hidden',
  paddingTop: '7%',
  paddingBottom: '7%',
}

const ForgotPasswordModal = (props) => {
  return (
    <>
      <Modal
        sx={styles}
        open={props.showForgotPasswordModal}
        onClose={props.setShowForgotPasswordModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <center>
            <Box sx={style}>
              <Grid container spacing={0} alignItems="stretch">
                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                  <IconButton>
                    <CloseIcon
                      onClick={() => props.setShowForgotPasswordModal(false)}
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
                      Forgot Password
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
                  <br />
                  <Grid item xs={12}>
                    <RegisterAccount
                      type="submit"
                      text="Send password reset email"
                    />
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </center>
      </Modal>
    </>
  )
}
export default ForgotPasswordModal
