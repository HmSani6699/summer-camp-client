import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const [cartError, setCartError] = useState('')

    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCartError(error.message)

        } else {
            setCartError('')
            console.log('[PaymentMethod]', paymentMethod);
        }
    }


    return (
        <>
            <form className="lg:w-[500px]" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-warning mt-6 w-2/3 " type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        {
            cartError&&<p className="text-red-600  mt-4 ">{cartError}</p>
        }
        </>
    );
};

export default CheckoutForm;