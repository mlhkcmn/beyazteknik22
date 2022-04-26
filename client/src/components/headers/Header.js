import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Ürün Ekle</Link></li>
                <li><Link to="/category">Kategoriler</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Çıkış Yap</Link></li>
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
                <h1>
                    <Link className='headerbaslik' to="/">{isAdmin ? 'Admin' : 'Beyaz Teknik'}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/about">Hakkımızda</Link></li>
                <li><Link to="/shop">{isAdmin ? 'Ürünler' : 'Mağaza'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Giriş Yap ✥ Kayıt Ol</Link></li>
                }

               

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header
