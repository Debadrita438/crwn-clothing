import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './CartItem.styles';

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return ( 
        <CartItemContainer>
            <CartItemImage src={ imageUrl } alt="item" />
            <ItemDetailsContainer>
                <span className="name">{ name }</span>
                <span className="price">{ quantity } X ₹{ price }</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}
 
export default React.memo(CartItem);