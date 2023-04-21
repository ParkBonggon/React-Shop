import React, { useState } from 'react';
import Button from './../components/ui/Button';
import { uploadImage } from '../api/uploader';
import NewProductStyle from './NewProduct.module.css'
import useProducts from './../hooks/useProducts';


export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();


  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if( name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({...product, [name]:value}));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
    .then(url => {
      addProduct.mutate({product, url}, {onSuccess: () => {
        setSuccess('제품이 정상적으로 추가되었습니다')
          setTimeout(() => {
          setSuccess(null);
        }, 3000);
      }})})
    .finally(() => setIsUploading(false))
  };
  return (
    <section className={NewProductStyle.section}>
      <h2 className={NewProductStyle.h2}>새로운 제품 등록</h2>
      {success && <p className={NewProductStyle.success}>{success}</p>}
      {file && <img className={NewProductStyle.img} src={URL.createObjectURL(file)} alt='local file'/>}
      <form className={NewProductStyle.form} onSubmit={handleSubmit}>
        <input 
          type='file' 
          accept='image/*' 
          name='file' 
          required 
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='제품 명'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='제품 설명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='옵션(, 를 사용해 구분)'
          required
          onChange={handleChange}
        />
        <Button text={isUploading ? '업로드 중..' : '제품 등록'}
        disabled={isUploading}
        />
      </form>
    </section>
    )
}
