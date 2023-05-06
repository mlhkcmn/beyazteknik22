import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from './logonavbar.png'
import { Button, Typography } from '@mui/material'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.clear()

        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Ürün Ekle</Link></li>
                <li><Link to="/category">Kategoriler</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history">Profilim</Link></li>
                <li><Link className='LogOutButton' to="/" onClick={logoutUser}>Çıkış Yap</Link></li>
            </>
        )
    }

    const styleMenu = {
        left: menu ? 0 : "-100%",
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo" style={{ width: '170px' }} />
                </Link>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/about">İlanlar</Link></li>
                <li><Link to="/contact">Projeler</Link></li>
                {isLogged ?
                    <li><Link to="/tasks">İlan Ekle</Link></li>
                    :
                    null
                }

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Giriş Yap ✥ Kayıt Ol</Link></li>
                }
                <div>
                    <li onClick={() => setMenu(!menu)}>
                        <img src={Close} alt="" width="30" className="menu" />
                    </li>
                </div>

            </ul>

        </header>
    )
}

export default Header
