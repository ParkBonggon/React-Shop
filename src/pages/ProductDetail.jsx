import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import DetailStyle from './ProductDetail.module.css'
import useCart from '../hooks/useCart';



export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: {id, image, title, description, category, price, options}
    }
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleCLick = (e) => {
    const product = {id, image, title, price, option:selected, quantity: 1}
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.')
        setTimeout(()=> setSuccess(null), 3000);
      }
    });
  };

  return <>
    <p className={DetailStyle.category}>{category}</p>
    <section className={DetailStyle.section}>
      <img className={DetailStyle.img} src={image} alt={title} />
    <div className={DetailStyle.div}>
      <h2 className={DetailStyle.title}>{title}</h2>
          <p className={DetailStyle.price}>{price} 원</p>
            <p className={DetailStyle.description}>{description}</p>
          <div className={DetailStyle.option}>
        <label className={DetailStyle.label} htmlFor='select'>옵션:</label>
      <select className={DetailStyle.select} onChange={handleSelect} value={selected}>
          {options && options.map((option, index) => 
        <option key={index}>{option}</option>)}
      </select>
          </div>
          {success && <p className={DetailStyle.result}>{success}</p>}
          <Button text="장바구니에 추가" onClick={handleCLick}/>
      </div>
      </section>
    </>;
}
