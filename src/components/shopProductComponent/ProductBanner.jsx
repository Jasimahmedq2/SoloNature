import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ProductBanner = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <IoIosArrowBack
          onClick={handleNavigate}
          className="text-3xl hover:cursor-pointer"
        />
        <div className="text-center">
          <h2 className="text-xl font-bold ">Integratori alimentari</h2>
          <p className="text-md font-semibold">12 articoli</p>
        </div>
        <div className="relative">
          <HiOutlineShoppingCart className="text-3xl" />
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-white bg-red-500 text-center">
            1
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
