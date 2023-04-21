import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { AiOutlineMinusSquare } from 'react-icons/ai'
import Cartstyle from './Cart.module.css'
import useCart from '../hooks/useCart';


function CartItem({product, product: {id, image, title, option, quantity, price},}) {
    const { addOrUpdateItem, removeItem} =  useCart();
    
    const handleMinus = () => {
            if(quantity <2) return;
            addOrUpdateItem.mutate( {...product, quantity: quantity - 1});
        }
        const handlePlus = () => {
            addOrUpdateItem.mutate( {...product, quantity: quantity + 1});
        }
        const handleDelete = () => {
            removeItem.mutate(id);
        }
    return (
        <li className={Cartstyle.li}>
            <img className={Cartstyle.img} src={image} alt={title} />
            <div className={Cartstyle.items}>
                <div className={Cartstyle.total}>
                    <p className={Cartstyle.title}>{title}</p>
                    <p className={Cartstyle.option}>{option}</p>
                    <p className={Cartstyle.price}>{`${price} 원`}</p>
                </div>
                    <div className={Cartstyle.menu}>
                        <AiOutlineMinusSquare className={Cartstyle.shopIcon} onClick={handleMinus}/>
                        <span>{quantity}</span>
                        <AiOutlinePlusSquare className={Cartstyle.shopIcon} onClick={handlePlus}/>
                        <RiDeleteBin6Line className={Cartstyle.shopIcon} onClick={handleDelete}/>
                </div>
            </div>
        </li>
    );
}

export default CartItem