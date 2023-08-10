import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper-pagination.css";

const HomeBanner3 = () => {
  return (
    <div className="pb-12">
      <h2 className="text-xl font-bold text-black">
        Cosmesi da formulazioni sapienti
      </h2>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex space-x-2">
            <div className="pt-2 relative w-1/2 space-x-2">
              <div>
                <span className="hover:cursor-pointer flex justify-end">
                  <AiOutlineHeart className="text-2xl" />
                </span>

                <img
                  className="w-36 h-36"
                  src="https://i.ibb.co/jyD9kKj/14031092-20912948-480-1.png"
                  alt=""
                />
                <h2 className="flex items-center absolute right-2 z-10 bottom-20 space-x-2 mt-[-6px] w-16 shadow-lg">
                  <AiFillStar />
                  <span>4.5/5</span>
                </h2>

                <div className="text-center">
                  <h3 className="text-md font-bold">Body Care</h3>
                  <h4 className="text-md">Dreanasal</h4>
                  <p className="text-md">€ 28.70</p>
                </div>
              </div>
            </div>
            <div className="pt-2 relative w-1/2 space-x-2">
              <div>
                <span className="hover:cursor-pointer flex justify-end">
                  <AiOutlineHeart className="text-2xl" />
                </span>

                <img
                  className="w-36 h-36"
                  src="https://i.ibb.co/jyD9kKj/14031092-20912948-480-1.png"
                  alt=""
                />
                <h2 className="flex items-center absolute right-2 z-10 bottom-20 space-x-2 mt-[-6px] w-16 shadow-lg">
                  <AiFillStar />
                  <span>4.5/5</span>
                </h2>

                <div className="text-center">
                  <h3 className="text-md font-bold">Body Care</h3>
                  <h4 className="text-md">Mantieni</h4>
                  <p className="text-md">€ 23.40 € 16.40</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex space-x-2">
            <div className="pt-2 relative w-1/2 space-x-2">
              <div>
                <span className="hover:cursor-pointer flex justify-end">
                  <AiOutlineHeart className="text-2xl" />
                </span>

                <img
                  className="w-36 h-36"
                  src="https://i.ibb.co/jyD9kKj/14031092-20912948-480-1.png"
                  alt=""
                />
                <h2 className="flex items-center absolute right-2 z-10 bottom-20 space-x-2 mt-[-6px] w-16 shadow-lg">
                  <AiFillStar />
                  <span>4.5/5</span>
                </h2>

                <div className="text-center">
                  <h3 className="text-md font-bold">Body Care</h3>
                  <h4 className="text-md">Dreanasal</h4>
                  <p className="text-md">€ 28.70</p>
                </div>
              </div>
            </div>
            <div className="pt-2 relative w-1/2 space-x-2">
              <div>
                <span className="hover:cursor-pointer flex justify-end">
                  <AiOutlineHeart className="text-2xl" />
                </span>

                <img
                  className="w-36 h-36"
                  src="https://i.ibb.co/jyD9kKj/14031092-20912948-480-1.png"
                  alt=""
                />
                <h2 className="flex items-center absolute right-2 z-10 bottom-20 space-x-2 mt-[-6px] w-16 shadow-lg">
                  <AiFillStar />
                  <span>4.5/5</span>
                </h2>

                <div className="text-center">
                  <h3 className="text-md font-bold">Body Care</h3>
                  <h4 className="text-md">Mantieni</h4>
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

export default HomeBanner3;
