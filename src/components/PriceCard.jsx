import React from 'react';
import CartStyle from './Cart.module.css'

function PriceCard({text, price}) {
    return (
        <div className={CartStyle.productCard}>
            <p>{text}</p>
            <p className={CartStyle.border}>{`${price} 원`}</p>
        </div>
    );
}

export default PriceCard