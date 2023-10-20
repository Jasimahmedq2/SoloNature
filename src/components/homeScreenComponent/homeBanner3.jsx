import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper-pagination.css";
import { useSelector } from "react-redux";
import { useSupplementProductQuery } from "../../redux/features/product/productApiSlice";
import Loading from "../Loading";

const HomeBanner3 = () => {
  const { token } = useSelector(state => state.auth)
  const { data, isLoading } = useSupplementProductQuery(token)
  if (isLoading) {
    return <Loading />
  }
  console.log(data)
  return (
    <div className="pb-12">
      <h2 className="text-xl font-bold text-black">
        Cosmesi da formulazioni sapienti
      </h2>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={2}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          data?.data?.map(product => {
            return (<SwiperSlide key={product?._id}>
              <div className="flex space-x-2">
                <div className="pt-2 relative space-x-2">
                  <div>
                    <span className="hover:cursor-pointer flex justify-end">
                      <AiOutlineHeart className="text-2xl" />
                    </span>

                    <img
                      className="w-36 h-36"
                      src={product?.image}
                      alt=""
                    />
                    <h2 className="flex items-center absolute right-2 z-10 bottom-20 space-x-2 mt-[-6px] w-16 shadow-lg">
                      <AiFillStar />
                      <span>4.5/5</span>
                    </h2>

                    <div className="text-center">
                      <h3 className="text-md font-bold">{product?.name}</h3>
                      <h4 className="text-md">{product?.title}</h4>
                      <p className="text-md">€ {product?.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>)
          })
        }


      </Swiper>
    </div>
  );
};

export default HomeBanner3;
