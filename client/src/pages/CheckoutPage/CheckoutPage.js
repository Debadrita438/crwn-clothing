import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

import { 
    CheckoutHeaderBlockContainer, 
    CheckoutHeaderContainer, 
    CheckoutPageContainer, 
    CheckoutTotal, 
    CheckoutWarning 
} from './CheckoutPage.styles';


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export const CheckoutPage = ({ cartItems, total }) => {
    return (
        <CheckoutPageContainer>
           <CheckoutHeaderContainer>
               <CheckoutHeaderBlockContainer>
                   <span>Product</span>
               </CheckoutHeaderBlockContainer>
               <CheckoutHeaderBlockContainer>
                   <span>Description</span>
               </CheckoutHeaderBlockContainer>
               <CheckoutHeaderBlockContainer>
                   <span>Quantity</span>
               </CheckoutHeaderBlockContainer>
               <CheckoutHeaderBlockContainer>
                   <span>Price</span>
               </CheckoutHeaderBlockContainer>
               <CheckoutHeaderBlockContainer>
                   <span>Remove</span>
               </CheckoutHeaderBlockContainer>
           </CheckoutHeaderContainer>
           {
               cartItems.map(cartItem => 
                    <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
                )
           }
           <CheckoutTotal>TOTAL: ₹{ total }</CheckoutTotal>
           <CheckoutWarning>
               *Please use the following test credit card for the payments*
               <br />
               Card No. - 4242 4242 4242 4242 (Visa Card)
               <br />
               Exp Date - 09/24 CVV - 123
           </CheckoutWarning>
           <StripeButton price={ total } />
        </CheckoutPageContainer>
    );
}
 
export default connect(mapStateToProps)(CheckoutPage);