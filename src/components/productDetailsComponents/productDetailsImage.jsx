/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "../homeScreenComponent/swiper-pagination.css";

const ProductDetailsImage = ({ product }) => {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex justify-center ">
            <img
              className="max-w-11/12"
              src={product?.image}
              alt="product"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductDetailsImage;
