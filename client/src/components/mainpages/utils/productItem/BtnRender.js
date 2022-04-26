import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_delete" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Sil
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        Düzenle
                    </Link>
                </>
                : <>
                    <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        Satın Al
                    </Link>
                    <Link id="btn_view" to={`/detail/${product._id}`}>
                        İncele
                    </Link>
                </>
            }
                
        </div>
    )
}

export default BtnRender
