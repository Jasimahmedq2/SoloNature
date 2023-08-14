import { createBrowserRouter } from "react-router-dom";
import WelcomePage1 from "../pages/welcome1";
import Walkthrough1 from "../pages/Walkthrough1";
import Walkthrough2 from "../pages/Walkthrough2";
import Walkthrough3 from "../pages/Walkthrough3";
import HomeScreenPage from "../pages/HomeScreen1.2";
import ShopeScreenSearch from "../pages/shopScreen1.2";
import ShopProduct from "../pages/shopeProduct";
import ProductDetailsPage from "../pages/productDetailsPage";
import SecondSearch from "../pages/secondSearch";
import IngredientiPage from "../pages/IngredientiPage";
import CartPage from "../pages/CartPage";
import OrderFormPage from "../pages/orderFormPage";
import OrderPaymentPage from "../pages/orderPaymentPage";
import FavoritePage from "../pages/FavoritePage";
import AddedFavorite from "../pages/addedFavorite";
import HomeFive from "../pages/HomeFive";
import Login from "../pages/Login";
import LoginTwo from "../pages/LoginTwo";
import ForgetPassword from "../pages/ForgetPassword";
import Register from "../pages/Register";
import ProfileOne from "../pages/ProfileOne";
import ProfileTwo from "../pages/ProfileTwo";
import ProfileThird from "../pages/ProfileThird";
import ProfileSix from "../pages/ProfileSix";
import ProfileFour from "../pages/ProfileFour";
import ProfileFive from "../pages/ProfileFive";
import RegisterTwo from "../pages/registerTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage1 />,
  },
  {
    path: "/Walkthrough1",
    element: <Walkthrough1 />,
  },
  {
    path: "/Walkthrough2",
    element: <Walkthrough2 />,
  },
  {
    path: "/Walkthrough3",
    element: <Walkthrough3 />,
  },
  {
    path: "/homeScreen",
    element: <HomeScreenPage />,
  },
  {
    path: "/shopScreen",
    element: <ShopeScreenSearch />,
  },
  {
    path: "/shopProduct/:category",
    element: <ShopProduct />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/search2",
    element: <SecondSearch />,
  },
  {
    path: "/ingredienti",
    element: <IngredientiPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/orderForm",
    element: <OrderFormPage />,
  },
  {
    path: "/orderPayment",
    element: <OrderPaymentPage />,
  },
  {
    path: "/favorite",
    element: <FavoritePage />,
  },
  {
    path: "/favorite2",
    element: <AddedFavorite />,
  },
  {
    path: "/homefive",
    element: <HomeFive />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logintwo",
    element: <LoginTwo />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/registertwo",
    element: <RegisterTwo />,
  },
  {
    path: "/profileone",
    element: <ProfileOne />,
  },
  {
    path: "/profiletwo",
    element: <ProfileTwo />,
  },
  {
    path: "/profilethird",
    element: <ProfileThird />,
  },
  {
    path: "/profilefour",
    element: <ProfileFour />,
  },
  {
    path: "/profilefive",
    element: <ProfileFive />,
  },
  {
    path: "/profilesix",
    element: <ProfileSix />,
  },
]);

export default router;
