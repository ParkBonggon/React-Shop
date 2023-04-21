import React from 'react';
import { BsCart3 } from "react-icons/bs"
import Cartstyle from './Cart.module.css'
import useCart from '../hooks/useCart';

function CartStatus() {
    const {cartQuery: { data: products}} = useCart();

    return (
        <div className={Cartstyle.div}>
            <BsCart3 className={Cartstyle.icon}/>
            {products && <p className={Cartstyle.p}>{products.length}</p>}
        </div>
    );
}

export default CartStatus;