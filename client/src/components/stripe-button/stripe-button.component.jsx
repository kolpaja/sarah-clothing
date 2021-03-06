import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IxiZIBGLepUiP9XSTBKBBPuIgaGc7l6IqeSxHJzpchZ9n17rBrwgGClMbLVByOCofv3IQuN4UiZroYMVGm6HT9V00b0Fxdjta";

  const onToken = (token) => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment Successfully");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was a problem with the payment. Please make sure you use the correct provided credid card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Sarah's Clothing"
      billingAddress
      shippingAddress
      image="https://image.flaticon.com/icons/png/512/123/123029.png"
      description={`Your Total is $ ${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
