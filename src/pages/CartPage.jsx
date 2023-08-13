import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartComponent/CartProduct";
import CartPriceInfo from "../components/CartComponent/cartPriceInfo";

const CartPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="px-6 py-4">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <IoIosArrowBack
            onClick={handleNavigate}
            className="text-3xl hover:cursor-pointer"
          />
          <div className="text-center">
            <h2 className="text-xl font-bold ">Carrello</h2>
          </div>
          <div className="relative">
            <HiOutlineShoppingCart className="text-3xl" />
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-white bg-red-500 text-center">
              1
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-base-200 p-4  border border-black w-full">
          <input
            type="text"
            placeholder="Codice promozionale"
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 w-full"
          />
        </div>
        <button className="bg-[#ECDFCE] text-md font-bold hover:cursor-pointer p-4 w-full my-2 rounded">
          Applica codice promozionale
        </button>
      </div>
      <div>
        <CartProduct />
      </div>
      <div>
        <CartPriceInfo />
      </div>
    </div>
  );
};

export default CartPage;
