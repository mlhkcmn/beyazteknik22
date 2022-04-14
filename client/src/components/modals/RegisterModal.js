import React from 'react';
import { Box, Grid, IconButton, Modal, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import { SignupInput } from '../common/Inputs'
import {
    RegisterAccount,
    RegisterLinkedin,
    RegisterRadioButton,
    RegisterFacebook,
} from '../common/RegisterButtons'

const style = {
    maxWidth: '432px',
    minHeight: '710px',
    borderRadius: '30px',
    bgcolor: '#FFFFFF',
    textAlign: 'center',
    position: 'absolute',
    top: '15%',
    left: '40%',
}
const styles = {
    overflowX: 'hidden',
    paddingTop: '7%',
    paddingBottom: '7%',
}

export default function RegisterModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <center>
                <Modal sx={styles} open={open} onClose={handleClose}>
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
                                        className="signupModalHeader">
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
                                        head="Email address*"
                                        type="email"
                                        placeholder="Enter email address"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <SignupInput
                                        head="Create password*"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <SignupInput
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
                            </Box>
                        </Grid>
                    </Box>
                </Modal>
            </center>
        </>
    );
}