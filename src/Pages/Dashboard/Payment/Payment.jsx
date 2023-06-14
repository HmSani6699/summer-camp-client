import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Component/SectioneTitle/SectionTitle";



const Payment = () => {
    const selectClass = useLoaderData();
    console.log(selectClass);
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    return (
        <div>
            <SectionTitle></SectionTitle>
            <h2 className="text-3xl mb-10 text-center font-bold"> <span className="text-amber-400">Payment </span>cart</h2>
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