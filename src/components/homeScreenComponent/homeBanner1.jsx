import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper-pagination.css";

const HomeBannerComponent = () => {
  return (
    <div className="bg-white py-4">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
          <div className="relative z-0">
            <img
              className="h-80 w-full"
              src="https://i.ibb.co/ccbB11D/bd1e5cf3a4b0470378e2d5.png"
              alt=""
            />
            <div className="bg-white shadow p-6 w-2/3 absolute left-0  bottom-0 z-10">
              <div className="bg-white space-y-4 shadow p-4 absolute left-0 bottom-4 z-10">
                <h3 className="text-xl font-bold text-black">
                  Migliora la qualità del sonno
                </h3>
                <button className="text-black text-xl border border-black w-full p-2">
                  Acquista ora
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative z-0">
            <img
              className="h-80 w-full"
              src="https://i.ibb.co/ccbB11D/bd1e5cf3a4b0470378e2d5.png"
              alt=""
            />
            <div className="bg-white shadow p-6 w-2/3 absolute left-0  bottom-0 z-10">
              <div className="bg-white space-y-4 shadow p-4 absolute left-0 bottom-4 z-10">
                <h3 className="text-xl font-bold text-black">
                  Migliora la qualità del sonno
                </h3>
                <button className="text-black text-xl border border-black w-full p-2">
                  Acquista ora
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBannerComponent;
