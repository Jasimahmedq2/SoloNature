import { HiOutlineShoppingCart } from "react-icons/hi";
import BottomNavbar from "../components/menu";
import { AiOutlineHeart } from "react-icons/ai";

const FavoritePage = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="w-50 mx-auto text-center">
          <h2 className="text-xl font-bold ">Preferiti</h2>
          <p className="text-md font-semibold">0 prodotti</p>
        </div>
        <div className="relative">
          <HiOutlineShoppingCart className="text-3xl" />
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-white bg-red-500 text-center">
            1
          </span>
        </div>
      </div>

      <div className="text-center py-12 space-y-6">
        <div>
          <h2 className="text-xl font-bold ">Non hai prodotti preferiti</h2>
          <p className="text-md font-semibold">
            Trova qualcosa di speciale per te!
          </p>
        </div>
        <button className="bg-[#ECDFCE] text-md font-bold hover:cursor-pointer px-6 py-2 rounded">
          Vai allo shop
        </button>
      </div>

      <div className="py-16">
        <h2 className="text-xl flex justify-center font-bold ">
          Potrebbe interessarti..
        </h2>
        <div className="flex pt-3 space-x-4">
          <div className="pt-2 w-1/2 space-x-2">
            <div>
              <div className="flex justify-between">
                <h2 className="px-2 rounded bg-[#FED2AA] w-12">new</h2>
                <span className="hover:cursor-pointer">
                  <AiOutlineHeart className="text-2xl" />
                </span>
              </div>
              <img
                className="w-36 h-36"
                src="https://i.ibb.co/S3SDxBc/14031092-20912948-480.png"
                alt=""
              />
              <div className="text-center">
                <h3 className="text-md font-bold">Energia</h3>
                <h4 className="text-md">VITAL B</h4>
                <p className="text-md">€ 28.70</p>
              </div>
            </div>
          </div>
          <div className="pt-2 w-1/2">
            <div>
              <div className="flex justify-between">
                <h2 className="px-2 rounded bg-[#FFB6B6] w-12">-10%</h2>
                <span className="hover:cursor-pointer">
                  <AiOutlineHeart className="text-2xl" />
                </span>
              </div>
              <img
                className="w-36 h-36"
                src="https://i.ibb.co/k4LJMbs/14015212-20332088-480-jpg.png"
                alt=""
              />
              <div className="text-center">
                <h3 className="text-md font-bold">Benessere mentale</h3>
                <h4 className="text-md">BIOFENIX</h4>
                <p className="text-md">€ 23.40 € 16.40</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default FavoritePage;
