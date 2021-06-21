import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

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
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(respone => {
            alert('Payment is Successful! Enjoy :)');
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err));
            alert('Sorry, there is an issue with you payment. Please make sure you used the provided credit card.');
        });
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