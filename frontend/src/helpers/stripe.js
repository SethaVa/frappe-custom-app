import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      import.meta.env.VITE_STATION_SERVER_DOMAIN || ""
    );
  }
  return stripePromise;
};

export default getStripe;
