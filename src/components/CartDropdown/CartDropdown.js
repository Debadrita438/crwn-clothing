import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});


const CartDropdown = ({ cartItems }) => (  
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={ cartItem.id } item={ cartItem } />
                ))
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);
 
export default connect(mapStateToProps)(CartDropdown);