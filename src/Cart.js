import React from 'react';
import CartItem from './CartItem';

const Cart = props => {
    const { 
        products,
        inc,
        decr,
        del
    } = props;
    console.log(props);
    return (
    <div className="cart">
        {products.map((product) => {
        return (
            <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={inc}
            onDecreaseQuantity={decr}
            onDeleteProduct={del}
            />
        )
        })}
    </div>
    );
}

export default Cart;