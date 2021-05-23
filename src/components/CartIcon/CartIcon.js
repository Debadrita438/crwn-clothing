import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';

import './CartIcon.scss';

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{ itemCount }</span>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);