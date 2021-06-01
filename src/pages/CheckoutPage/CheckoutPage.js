import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';
// import StripeCheckoutButton from '../../components/StripeButton/StripeCheckoutButton';

import './CheckoutPage.scss';


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
           <div className="checkout-header">
               <div className="header-block">
                   <span>Product</span>
               </div>
               <div className="header-block">
                   <span>Description</span>
               </div>
               <div className="header-block">
                   <span>Quantity</span>
               </div>
               <div className="header-block">
                   <span>Price</span>
               </div>
               <div className="header-block">
                   <span>Remove</span>
               </div>
           </div>
           {
               cartItems.map(cartItem => 
                    <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
                )
           }
           <div className="total">TOTAL: ₹{ total }</div>
           <div className='test-warning'>
               *Please use the following test credit card for the payments*
               <br />
               Card No. - 4242 4242 4242 4242 (Visa Card)
               <br />
               Exp Date - 09/24 CVV - 123
           </div>
           <StripeButton price={ total } />
           {/* <StripeCheckoutButton price={ total } /> */}
        </div>
    );
}
 
export default connect(mapStateToProps)(CheckoutPage);