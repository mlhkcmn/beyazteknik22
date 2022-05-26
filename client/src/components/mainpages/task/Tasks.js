import React, {useState, useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'

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

    const createTask = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                const res = await axios.put(`/api/task/${id}`, {name: name , title: title , description: description , content: content},  {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }else{
                const res = await axios.post('/api/task', {name: name , title: title , description: description , content: content}, {
                    headers: {Authorization: token}
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

    const editTask = async (id, name, title, description, content) =>{
        setID(id)
        setName(name)
        setTitle(title)
        setDesc(description)
        setContent(content)
        setOnEdit(true)
    }

    const deleteTask = async _id =>{
        try {
            const res = await axios.delete(`/api/task/${_id}`, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="categories">
            <form onSubmit={createTask}>
                <label htmlFor="task">Kategori Ekle</label>
                <input type="text" name="name" id='name' required value={name}
                onChange={e => setName(e.target.value)} />
                <input type="text" name="title" id='title' required value={title}
                onChange={e => setTitle(e.target.value)} />
                <input type="text" name="description" id='description' required value={description}
                onChange={e => setDesc(e.target.value)} />
                <input type="text" name="content" id='content' required value={content}
                onChange={e => setContent(e.target.value)} />
                

                <button type="submit">{onEdit? "Güncelle" : "Oluştur"}</button>
            </form>

            <div className="col">
                {
                    tasks.map(task => (
                        <div className="row" key={task._id}>
                            <p>{task.name}</p>
                            <p>{task.title}</p>
                            <p>{task.description}</p>
                            <p>{task.content}</p>
                            <div>
                                <button onClick={() => editTask(task._id, task.name, task.title, task.description, task.content)}>Güncelle</button>
                                <button onClick={() => deleteTask(task._id)}>Sil</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tasks
