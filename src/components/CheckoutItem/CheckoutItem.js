import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cartAction';

import { 
    CheckoutItemContainer, 
    ImageContainer, 
    TextContainer, 
    QuantityStyles, 
    RemoveButtonStyles 
} from './CheckoutItem.styles';

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return ( 
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={ imageUrl } alt="item" />
            </ImageContainer>
            <TextContainer>{ name }</TextContainer>
            <QuantityStyles>
                <div onClick = {() => removeItem(cartItem)}>&#10094;</div>
                <span>{ quantity }</span>
                <div onClick = {() => addItem(cartItem)}>&#10095;</div>
            </QuantityStyles>
            <TextContainer>{ price }</TextContainer>
            <RemoveButtonStyles onClick = {() => clearItem(cartItem)}>&#10008;</RemoveButtonStyles>
        </CheckoutItemContainer>
    );
}
 
export default connect(null, mapDispatchToProps)(CheckoutItem);