import React from "react";
import { Link } from "react-router-dom"
import { Home, Chair, SelectAll, Store } from '@mui/icons-material';

const BestFlatItem = ({ flatState, flatMoney }) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                    <div className={`best-estate-state ${flatState === "Kiralık" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    <h4><Link to="/">İlan Başlığı</Link></h4>
                    <span><Link to="/">İlan Açıklaması</Link></span>
                </div>
                <div className="best-estate-features2">
                    <div>
                        <Store fontSize="medium" /><span> Günal Emlak </span>
                    </div>
                </div>
                <div className="best-estate-features">
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div className="best-estate-row">
                            <Home fontSize="small" /><span>Daire</span>
                        </div>
                        <div className="best-estate-row">
                            <Chair fontSize="small" /><span> 3+1 </span>
                        </div>
                        <div className="best-estate-row">
                            <SelectAll fontSize="small" /><span> 120m2 </span>
                        </div>
                    </div>
                    <h5 className="best-estate-price">{flatMoney}</h5>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem