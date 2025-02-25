import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/home/home.jsx";
import PersistProvider from "./store/providers/persist-provider";
import { store } from "./store/store";

// import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "./assets/scss/style.scss";
import "./i18n.js";

import "react-loading-skeleton/dist/skeleton.css";

const BASENAME = import.meta.env.MODE === "production" ? "/evcar" : "/";

const Collection = lazy(() => import("./pages/collection/Collection.jsx"));
const Compare = lazy(() => import("./pages/other/Compare.jsx"));
const Contact = lazy(() => import("./pages/other/Contact.jsx"));
const Wishlist = lazy(() => import("./pages/other/Wishlist.jsx"));
const Product = lazy(() => import("./pages/shop-product/Product.jsx"));
const About = lazy(() => import("./pages/other/About.jsx"));
const NotFound = lazy(() => import("./pages/other/NotFound.jsx"));
const Station = lazy(() => import("./pages/station/Station.jsx"));
const Checkout = lazy(() => import("./pages/other/Checkout.jsx"));
const Cart = lazy(() => import("./pages/other/Cart.jsx"));
const Login = lazy(() => import("./pages/user/Login.jsx"));
const MyAccount = lazy(() => import("./pages/user/Account.jsx"));
const Register = lazy(() => import("./pages/user/Register.jsx"));
const Accessory = lazy(() => import("./pages/accessory/Accessory.jsx"));

const router = createBrowserRouter([
  {
    path: `${BASENAME}`,
    element: <App />,
    children: [
      {
        path: `${BASENAME}`,
        element: <Home />,
      },
      {
        path: `${BASENAME}product/:id`,
        element: <Product />,
      },
      {
        path: `${BASENAME}collection`,
        element: <Collection />,
      },
      {
        path: `${BASENAME}wishlist`,
        element: <Wishlist />,
      },
      {
        path: `${BASENAME}contact`,
        element: <Contact />,
      },
      {
        path: `${BASENAME}compare`,
        element: <Compare />,
      },
      {
        path: `${BASENAME}about`,
        element: <About />,
      },
      {
        path: `${BASENAME}not-found`,
        element: <NotFound />,
      },
      {
        path: `${BASENAME}station`,
        element: <Station />,
      },
      {
        path: `${BASENAME}checkout`,
        element: <Checkout />,
      },
      {
        path: `${BASENAME}cart`,
        element: <Cart />,
      },
      {
        path: `${BASENAME}login`,
        element: <Login />,
      },
      {
        path: `${BASENAME}my-account`,
        element: <MyAccount />,
      },
      {
        path: `${BASENAME}register`,
        element: <Register />,
      },
      {
        path: `${BASENAME}accessory`,
        element: <Accessory />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistProvider>
        <RouterProvider router={router} />
      </PersistProvider>
    </Provider>
  </StrictMode>
);
