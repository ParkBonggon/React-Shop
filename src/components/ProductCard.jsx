import React from 'react';
import Productstyle from './Products.module.css'
import { useNavigate } from 'react-router-dom';

function ProductCard({product,
    product: {id, image, title, category, price}}) {
    const navigate = useNavigate();
    return (
        <li onClick={()=> {navigate(`/products/${id}`, {state: {product}});
            }} className={Productstyle.li}>
            <img className={Productstyle.img} src={image} alt={title}/>
            <div className={Productstyle.div}>
                <h3 className={Productstyle.title}>{title}</h3>
            </div>
                <p className={Productstyle.p}>{`${price} 원`}</p>
            <p className={Productstyle.p}>{category}</p>
        </li>
    );
}

export default ProductCard;