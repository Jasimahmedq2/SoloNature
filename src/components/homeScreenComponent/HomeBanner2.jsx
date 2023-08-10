import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper-pagination.css";
const HomeBanner2 = () => {
  return (
    <div className="bg-white py-4">
      <div className="flex justify-between items-center ">
        <h3 className="text-[#000000] text-md w-1/2 font-bold">
          Scopri i nostri integratori
        </h3>
        <div className="flex items-center space-x-2">
          <p className="text-sm ">Vedi tutti</p>
          <LiaGreaterThanSolid />
        </div>
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
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
                <div className="flex text-sm justify-end">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
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
                <div className="flex text-sm justify-end">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className="text-center">
                  <h3 className="text-md font-bold">Benessere mentale</h3>
                  <h4 className="text-md">BIOFENIX</h4>
                  <p className="text-md">€ 23.40 € 16.40</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
                <div className="flex text-sm justify-end">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
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
                <div className="flex text-sm justify-end">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className="text-center">
                  <h3 className="text-md font-bold">Benessere mentale</h3>
                  <h4 className="text-md">BIOFENIX</h4>
                  <p className="text-md">€ 23.40 € 16.40</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner2;
