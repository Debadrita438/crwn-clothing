import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartAction';

import { connect } from 'react-redux';

import './CartIcon.scss';

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">0</span>
    </div>
);

export default connect(null, mapDispatchToProps)(CartIcon);