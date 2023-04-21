import React from 'react';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import Cartstyle from './MyCart.module.css'
import Button from './../components/ui/Button';
import useCart from '../hooks/useCart';


const cost = 6000;
function MyCart() {
    const { cartQuery: { isLoading, data:products},} = useCart();

    if(isLoading) return <p>Loading...</p>;

    const hasProducts = products && products.length > 0;
    const totalPrice = products && 
    products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0)
    
    return (
        <section className={Cartstyle.section}>
            <p className={Cartstyle.main}>내 장바구니</p>
            {!hasProducts && <p className={Cartstyle.null}>장바구니에 상품이 없습니다.</p>}
            {hasProducts && <>
                <ul className={Cartstyle.ul}>
                    {products && 
                        products.map((product) => 
                            (<CartItem key={product.id} product={product}  /> 
                        ))}
                </ul>
                <div className={Cartstyle.div}>
                    <PriceCard text="상품 가격" price={totalPrice}/>
                    <PriceCard text="배송 비용" price={cost}/>
                    <span className={Cartstyle.border}></span>
                    <PriceCard text="총 금액" price={totalPrice + cost}/>
                </div>
                <Button text='주문하기'/>
            </>}
        </section>
    );
}

export default MyCart;