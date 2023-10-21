import { useParams } from "react-router-dom";
import AdditionalProduct from "../components/productDetailsComponents/AdditionalProduct";
import ProductDetailsBanner from "../components/productDetailsComponents/productDetailsBanner";
import ProductDetailsImage from "../components/productDetailsComponents/productDetailsImage";
import ProductDetailsInfo from "../components/productDetailsComponents/productDetailsInfo";
import { useSelector } from "react-redux";
import { useProductDetailsQuery } from "../redux/features/product/productApiSlice";

const ProductDetailsPage = () => {
  const { id } = useParams()
  const { token } = useSelector(state => state.auth)
  const { data } = useProductDetailsQuery({ token, id })
  console.log(data)


  return (
    <div>
      <div>
        <ProductDetailsBanner />
      </div>
      <div>
        <ProductDetailsImage product={data?.data} />
      </div>
      <div>
        <ProductDetailsInfo product={data?.data} />
      </div>
      <div>
        <AdditionalProduct product={data?.data} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
