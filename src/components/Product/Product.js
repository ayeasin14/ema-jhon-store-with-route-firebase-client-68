import React from 'react';
import './Product.css';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <p>It has {ratings} Ratings</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
                <ShoppingCartIcon className='shopping-cart'></ShoppingCartIcon>
            </button>
        </div>
    );
};

export default Product;