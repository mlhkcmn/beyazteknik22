import React from 'react'
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  FormControl,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@mui/material'
import {
  CreateProfileLeftButton,
  CreateProfileRightButton,
} from '../common/Buttons'
import {
  CreateProfileInput,
  CreateProfileInputAbout,
  CreateProfileInputBio,
} from '../common/Inputs'
import CloseIcon from '@mui/icons-material/Close'

const style = {
  width: { xs: '97%', sm: '85%', md: '59.5%' },
  borderRadius: '20px',
  bgcolor: '#FFFFFF',
  p: 4,
  textAlign: 'left'
}
const styles = {
  overflowX: 'hidden',
  paddingTop: '1%',
  paddingBottom: '1%',
}

const CreateProfileModal = (props) => {
  return (
    <>
      <Modal
        sx={styles}
        open={props.showCreateProfileModal}
        onClose={props.setShowCreateProfileModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <center>
          <Box sx={style}>
            <Grid container spacing={4} alignItems="stretch">
              <Grid item xs={12}>
                <Grid item xs={12}>
                  <span className="CreateProfileModalHeader">
                    Create Profile
                  </span>
                  <span className="CreateProfileModalHeaderClose">
                    <IconButton
                      onClick={() => props.setShowCreateProfileModal(false)}
                      sx={{ marginTop: '-15px' }}
                    >
                      <CloseIcon sx={{ color: '#767676' }} fontSize="large" />
                    </IconButton>
                  </span>
                </Grid>
                <hr />
              </Grid>
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <CreateProfileLeftButton buttontext="Use Camera" />
                  </Grid>
                  <Grid item xs={6}>
                    <CreateProfileRightButton buttontext="Upload Photo" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CreateProfileInput header="First Name *" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CreateProfileInput header="Sur Name *" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CreateProfileInput header="Country / Region *" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CreateProfileInput header="Locations within this area" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CreateProfileInput header="Professional Title" />
              </Grid>
              <Grid item xs={12}>
                <CreateProfileInputBio header="Short Bio*" />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={3} sm={2} md={1} sx={{ marginTop: '7px' }}>
                    <Box className='marketPlaceBioExperience'>
                      <Typography className='marketPlaceExperienceTitle' sx={{ padding: '5px', textAlign:'center' }}>
                        Lorem Ipsum
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3} sm={2} md={1} sx={{ marginTop: '7px' }}>
                    <Box className='marketPlaceBioExperience'>
                      <Typography className='marketPlaceExperienceTitle' sx={{ padding: '5px', textAlign:'center' }}>
                        Lorem Ipsum
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Button className="CreateProfileAddIndustry">
                      Add Industry Interests
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CreateProfileInputAbout header="All About You" />
              </Grid>
              <Grid item xs={12}>
                <div className="CreateProfileContactText">
                  Do you want other Scale Up Stream Users to be able to Contact
                  you via your profile?
                </div>
                <FormControl className="ProfileModalRadio">
                  <FormControlLabel control={<Checkbox />} label="Yes" />
                  <FormControlLabel control={<Checkbox />} label="No" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="ProfileSaveButton"
                  sx={{ float: { xs: 'none', sm: 'right' } }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '23.44px',
                      fontFamily: 'Roboto',
                      fontWeight: 'bold',
                    }}
                  >
                    Save
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </center>
      </Modal>
    </>
  )
}
export default CreateProfileModal
