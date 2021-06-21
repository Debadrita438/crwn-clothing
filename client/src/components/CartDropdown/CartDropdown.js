import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { toggleCartHidden } from '../../redux/cart/cartAction';

import { CartDropdownContainer, CartDropdownButton, CartDropdownButtonDisabled, CartItemsStyles, EmptyMessageStyles } from './CartDropdown.styles';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser
});


const CartDropdown = ({ cartItems, currentUser, history, dispatch }) => (  
    <CartDropdownContainer>
        <CartItemsStyles>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={ cartItem.id } item={ cartItem } />
                )) : (
                <EmptyMessageStyles>Your cart is empty</EmptyMessageStyles>
                )
            }
        </CartItemsStyles>
        {
            currentUser 
            ? <CartDropdownButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>Go to checkout</CartDropdownButton>
            : <CartDropdownButtonDisabled>Go to checkout</CartDropdownButtonDisabled>
        }
    </CartDropdownContainer>
);
 
export default withRouter(connect(mapStateToProps)(CartDropdown));