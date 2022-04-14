import * as React from 'react';
import {
    Box,
    Grid,
    Button,
    FormControl,
    Container,
    OutlinedInput
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="xxl">
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Grid container direction="row" textAlign={'center'}>
                            <Grid lg="11" width={'100%'}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Giriş
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction={'column'} width='400px'>
                            <Grid md="12">
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        type={props.type}
                                        placeholder={props.placeholder}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </div>
        </Container>
    );
}
