import React from 'react';
import ProductCard from './ProductCard';
import ProductsStyle from './Products.module.css'
import useProducts from '../hooks/useProducts';

export default function Products() {

    const {productsQuery: {isLoading, error, data: products}} =useProducts();
    return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <ul className={ProductsStyle.ul}>
        {products && products.map(product => 
        <ProductCard key={product.id} product={product}/>)}
    </ul>
    </>
    );
}