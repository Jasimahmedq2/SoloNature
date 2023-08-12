import { useState } from "react";
import ProductBanner from "../components/shopProductComponent/ProductBanner";
import { BsFilterLeft } from "react-icons/bs";
import BottomNavbar from "../components/menu";
import ProductComponent from "../components/shopProductComponent/productComponent";

const ShopProduct = () => {
  const [active, setActive] = useState("Allergie");
  return (
    <div className="bg-white shadow min-h-screen">
      <div className="px-4">
        <ProductBanner />
      </div>

      {/* filtering */}
      <div className="flex justify-between space-x-4 py-4 px-4">
        <div className="flex justify-center items-center space-x-3 border border-black p-2 hover:cursor-pointer">
          <BsFilterLeft />
          <p className="text-sm">Filtra</p>
        </div>
        <div
          onClick={() => setActive("Allergie")}
          className={`flex hover:cursor-pointer justify-center items-center border border-black p-2 ${
            active === "Allergie" && "bg-black text-white"
          }`}
        >
          <p className="text-sm ">Allergie</p>
        </div>
        <div
          onClick={() => setActive("Benessere")}
          className={`flex hover:cursor-pointer justify-center items-center  border border-black p-2 ${
            active === "Benessere" && "bg-black text-white"
          }`}
        >
          <p className="text-sm w-36 whitespace-nowrap">gastrointestinale</p>
        </div>
      </div>

      <div>
        <ProductComponent />
      </div>

      <div className="py-6">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default ShopProduct;
