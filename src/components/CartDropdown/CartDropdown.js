import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => (  
    <div className='cart-dropdown'>
        <div className="cart-items" />
        <CustomButton>Go to checkout</CustomButton>
    </div>
);
 
export default CartDropdown;