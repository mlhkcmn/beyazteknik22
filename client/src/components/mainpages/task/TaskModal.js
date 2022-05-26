import React from 'react'
import { Button, Typography, Modal, Box, IconButton, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import TaskCard from './TaskCard';

const style = {
    maxWidth: '360px',
    minHeight: '583px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};
const styles = {
    paddingTop: '2%',
    overflowX: 'hidden',
    paddingBottom: '2%'
};

const TaskModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button onClick={handleOpen} className='submissionTableViewButton'>
                <Typography className='submissionTableViewButtonText' >
                    Görüntüle
                </Typography>
            </Button>
            <Modal open={open} onClose={handleClose} sx={styles} className='blogmodal'>
                <center>
                    <Box sx={{ ...style, }}>
                        <IconButton onClick={() => handleClose()} sx={{ float: 'right' }}>
                            <CloseIcon sx={{ color: '#FFD358' }} fontSize="medium" />
                        </IconButton>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography sx={{ textAlign: 'center',fontSize:'20px',fontFamily:'Mulish' }}>
                                    Rapor Ekle
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TaskCard />
                            </Grid>
                        </Grid>
                    </Box>
                </center>
            </Modal>
        </>
    )
}

export default TaskModal