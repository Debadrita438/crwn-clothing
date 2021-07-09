import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';

import { CartIconContainer, ItemCountStyles, ShoppingIcon } from './CartIcon.styles';

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={ toggleCartHidden }>
        <ShoppingIcon />
        <ItemCountStyles>{ itemCount }</ItemCountStyles>
    </CartIconContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);