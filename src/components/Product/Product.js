import React from 'react';
import './Product.css';

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
            <button onClick={() => handleAddToCart(product)} className='btn-cart'> <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;