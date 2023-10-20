import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper-pagination.css";
import { Link } from "react-router-dom";
import { useSupplementProductQuery } from "../../redux/features/product/productApiSlice";
import { useSelector } from "react-redux";
import Loading from "../Loading";
const HomeBanner2 = () => {
  const { token } = useSelector(state => state.auth)
  const { data, isLoading } = useSupplementProductQuery(token)
  if (isLoading) {
    return <Loading />
  }
  console.log(data)
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
        slidesPerView={2}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          data?.data.map(product => {
            return (<SwiperSlide key={product?._id}>
              <div className="flex pt-3 space-x-4">
                <div className="pt-2  space-x-2">
                  <Link to="/product/1">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="px-2 rounded bg-[#FED2AA] w-12">new</h2>
                        <span className="hover:cursor-pointer">
                          <AiOutlineHeart className="text-2xl" />
                        </span>
                      </div>
                      <img
                        className="w-36 h-36"
                        src={product?.image}
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
                        <h3 className="text-md font-bold">{product?.name}</h3>
                        <h4 className="text-md">{product?.title}</h4>
                        <p className="text-md">€ {product?.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>


              </div>
            </SwiperSlide>)
          })
        }
      </Swiper>
    </div>
  );
};

export default HomeBanner2;
