import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckout from 'react-stripe-checkout';

import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartItems } from '../../redux/cart/cartSelector';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartItems: selectCartItems
});

const StripeButton = ({ currentUser, cartItems, price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IvyEISEAIBYAnjMP9VzjXHQMqXFL5Kxv1Q60BYbaWMqJS8GK1nrJMTZusszZfvyQNJnLdgfeTsKfIA3xtP6B3F800KE1006TP';
    const onToken = token => {
        console.log(token);
        alert('Payment is Successful!');
    } 

    return ( 
        (currentUser && cartItems.length)
         ? <StripeCheckout
            name='CRWN Clothing Ltd.'
            label = 'Pay Now'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹${ price }`}  
            amount={ priceForStripe }
            currency='INR'
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }   
        />
        : null
    );
}
 
export default connect(mapStateToProps)(StripeButton);