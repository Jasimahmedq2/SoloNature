import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper-pagination.css";
import { useSelector } from "react-redux";
import { useSupplementProductQuery } from "../../redux/features/product/productApiSlice";
import Loading from "../Loading";
import { Link } from "react-router-dom";

const HomeBannerComponent = () => {
  const categoryType = "Integratori alimentari"
  const { token } = useSelector(state => state.auth)
  const { data, isLoading } = useSupplementProductQuery({ token, categoryType })
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="bg-white py-4">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          data?.data.map(product => {
            return (
              <SwiperSlide key={product?._id}>
                {" "}
                <div className="relative z-0">
                  <img
                    className="h-80 w-full"
                    src={product?.image}
                    alt=""
                  />
                  <div className="bg-white shadow p-6 w-2/3 absolute left-0  bottom-0 z-10">
                    <div className="bg-white space-y-4 shadow p-4 absolute left-0 bottom-4 z-10">
                      <h3 className="text-xl font-bold text-black">
                        {product?.title}
                      </h3>
                      <Link to={`/product/${product?._id}`}>
                        <button className="text-black text-xl border border-black w-full p-2">
                          Acquista ora
                        </button>
                      </Link>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  );
};

export default HomeBannerComponent;
