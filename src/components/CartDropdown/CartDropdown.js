import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelector';

import './CartDropdown.scss';

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
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