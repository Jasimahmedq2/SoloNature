import AdditionalProduct from "../components/productDetailsComponents/AdditionalProduct";
import ProductDetailsBanner from "../components/productDetailsComponents/productDetailsBanner";
import ProductDetailsImage from "../components/productDetailsComponents/productDetailsImage";
import ProductDetailsInfo from "../components/productDetailsComponents/productDetailsInfo";

const ProductDetailsPage = () => {
  return (
    <div>
      <div>
        <ProductDetailsBanner />
      </div>
      <div>
        <ProductDetailsImage />
      </div>
      <div>
        <ProductDetailsInfo />
      </div>
      <div>
        <AdditionalProduct />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
