import { IoIosArrowBack } from "react-icons/io";
import { HiHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ProductDetailsBanner = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center">
        <IoIosArrowBack
          onClick={handleNavigate}
          className="text-3xl hover:cursor-pointer"
        />
        <div className="flex items-center space-x-3">
          <HiHeart className="text-3xl text-[#EB6383]" />
          <div className="relative">
            <HiOutlineShoppingCart className="text-3xl" />
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-white bg-red-500 text-center">
              1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsBanner;
