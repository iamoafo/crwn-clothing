import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IYqDlDIS6IJOdSMRld2CXlpkl50Hgsi1KqdepB9FJdYtGmEjgq2dpl08TsFdjEuIwz7z0kdkLdfRYgVoE2X2GHe00UcwY0Al2'

const onToken = token =>{
    console.log(token);
    alert('Payment Successful');

}
    return(
    <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd'
    billingAddress
    shippingAddressimage=''
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
)

}

export default StripeCheckoutButton

