import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const StripeCheckoutButton = ({ price }) => {
    // const priceForStripe = price * 100;
    const publishableKey = loadStripe('pk_test_51IvyEISEAIBYAnjMP9VzjXHQMqXFL5Kxv1Q60BYbaWMqJS8GK1nrJMTZusszZfvyQNJnLdgfeTsKfIA3xtP6B3F800KE1006TP');
    // const onToken = token => {
    //     console.log(token);
    //     alert('Payment is Successful!');
    // }    
    return ( 
        <Elements stripeKey={ publishableKey }>

        </Elements>
    );
}
    
export default StripeCheckoutButton;