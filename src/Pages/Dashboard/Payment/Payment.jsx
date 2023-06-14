import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";



const Payment = () => {
    const selectClass = useLoaderData();
    console.log(selectClass);
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    return (
        <div>
            <h2> Taka amar nasa thka amar pasa</h2>
            <Elements stripe={stripePromise}>

                <CheckoutForm
                    name={selectClass.name}
                    price={selectClass.price}
                    id={selectClass._id}
                    selectClassId={selectClass.classesId}
                >
                </CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;