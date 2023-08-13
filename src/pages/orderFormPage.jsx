import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import OrderFormComponent from "../components/orderForm/OrderFormComponent";

const OrderFormPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="px-6 py-4">
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
      <div>
        <OrderFormComponent />
      </div>
    </div>
  );
};

export default OrderFormPage;
