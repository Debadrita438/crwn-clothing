import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleCartHidden } from '../../redux/cart/cartAction';

import './CartDropdown.scss';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


const CartDropdown = ({ cartItems, history, dispatch }) => (  
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={ cartItem.id } item={ cartItem } />
                )) : (
                <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>Go to checkout</CustomButton>
    </div>
);
 
export default withRouter(connect(mapStateToProps)(CartDropdown));