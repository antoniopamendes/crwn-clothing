import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IVkcfKoBGP7fzP6Pi11lmJlvivJQ6KWvJIx2xeYPm69F8PQYwvYuiSXElN61E5SMiMnSsPOscdI04uj0xHsLDQV00xfd4d8wF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      currency="EUR"
      label="Pay Now"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
