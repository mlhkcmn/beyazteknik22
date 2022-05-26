import React, { useState, useContext } from 'react'
import { Button, Typography, Modal, Box, IconButton, Grid, Card, CardContent, Input } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'

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

function Tasks() {
    const state = useContext(GlobalState)
    const [tasks] = state.tasksAPI.tasks

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [content, setContent] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.tasksAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createTask = async e => {
        e.preventDefault()
        try {
            if (onEdit) {
                const res = await axios.put(`/api/task/${id}`, { name: name, title: title, description: description, content: content }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg)
            } else {
                const res = await axios.post('/api/task', { name: name, title: title, description: description, content: content }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setName('')
            setTitle('')
            setDesc('')
            setContent('')
            setCallback(!callback)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editTask = async (id, name, title, description, content) => {
        setID(id)
        setName(name)
        setTitle(title)
        setDesc(description)
        setContent(content)
        setOnEdit(true)
    }

    const deleteTask = async _id => {
        try {
            const res = await axios.delete(`/api/task/${_id}`, {
                headers: { Authorization: token }
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button onClick={handleOpen}>
                <Typography>
                    Yeni Rapor Ekle
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
                                <Typography sx={{ textAlign: 'center', fontSize: '20px', fontFamily: 'Mulish' }}>
                                    Rapor Ekle
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className='TaskCard'>
                                    <Grid container direction='row' sx={{ fontSize: '18px', fontFamily: 'Mulish' }}>
                                        <form onSubmit={createTask}>
                                            <Grid item xs={12}>
                                                <label htmlFor="name">Name</label>
                                                <br />
                                                <Input className='TaskCardInput' type="text" name="name" id="name" required onChange={e => setName(e.target.value)} value={name} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <label htmlFor="title">Title</label>
                                                <br />
                                                <Input className='TaskCardInput' type="text" name="title" id="title" required onChange={e => setTitle(e.target.value)} value={title} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <label htmlFor="description">Description</label>
                                                <br />
                                                <Input className='TaskCardInputMulti' rows={3} multiline type="text" name="description" id="description" required onChange={e => setDesc(e.target.value)} value={description} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <label htmlFor="content">Content</label>
                                                <br />
                                                <Input className='TaskCardInputMulti' rows={2} multiline type="text" name="content" id="content" required onChange={e => setContent(e.target.value)} value={content} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <label htmlFor="submit">Submit</label>
                                                <br />
                                                <Button className='TaskCardButton' type='submit'>
                                                    Onayla
                                                </Button>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </center>
            </Modal>
            {
                tasks.map(task => (
                    <Card sx={{ minWidth: '270px', textAlign: 'center', border: '1px solid red' }}>
                        <CardContent>
                            <div key={task._id}>
                                <Typography variant="h5" color="text.primary" gutterBottom>
                                    {task.name}
                                </Typography>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {task.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} >
                                    {task.description}
                                </Typography>
                                <Typography color="text.secondary">
                                    {task.content}
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}

export default Tasks
