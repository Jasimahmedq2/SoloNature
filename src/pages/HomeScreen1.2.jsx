import { useState } from "react";
import HomeBanner2 from "../components/homeScreenComponent/HomeBanner2";
import BannerCategory from "../components/homeScreenComponent/bannerCatagory";
import HomeBannerComponent from "../components/homeScreenComponent/homeBanner1";
import HomeBanner3 from "../components/homeScreenComponent/homeBanner3";
import BottomNavbar from "../components/menu";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeScreenPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="px-4 py-4 relative">
      <div className="flex justify-between items-center">
        <img
          className="w-16"
          src="https://i.ibb.co/LkmD31Q/cropped-logo-solo-natura-upscaled-1.png"
          alt=""
        />
        <Link to="/cart">
          <MdOutlineLocalGroceryStore className="text-2xl" />
        </Link>
      </div>

      {/* banner components */}
      <div className="">
        {/* banner component 1*/}
        <div>
          <HomeBannerComponent />
        </div>

        {/* banner component 2*/}
        <div className="py-4">
          <HomeBanner2 />
        </div>
        {/* banner component 3*/}
        <div className="py-4">
          <BannerCategory />
        </div>
        <div className="py-4">
          <HomeBanner3 />
        </div>
      </div>

      {/* bottom navbar */}
      <div>
        <BottomNavbar />
      </div>
      {showPopup && (
        <div className="fixed left-0 right-0 bottom-0 z-50">
          <div className="bg-white space-y-4 text-center p-8 rounded shadow-lg">
            <img
              className="w-50 mx-auto"
              src="https://i.ibb.co/QM28sdG/Subtract.png"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-4">Ordine inviato!</h2>
            <p>Grazie per aver acquistato da Solo Natura</p>

            <div className="py-2">
              <button
                onClick={togglePopup}
                className="bg-[#000000] text-white text-md font-bold hover:cursor-pointer p-4 w-full rounded"
              >
                Il tuo ordine
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreenPage;
