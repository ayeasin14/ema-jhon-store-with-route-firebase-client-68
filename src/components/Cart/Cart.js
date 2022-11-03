import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart, children } = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }
    const tax = parseFloat((total * .1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: $ {total} </p>
            <p>Total Shipping Charge: $ {shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: $ {grandTotal} </h4>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            {children}

        </div>
    );
};

export default Cart;