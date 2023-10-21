/* eslint-disable react/prop-types */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useAddToCartMutation, useRemoveQuantityMutation } from "../../redux/features/product/productApiSlice";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpiner";

const CartProduct = ({ products }) => {
  const [quantity] = useState(1)
  const { token } = useSelector(state => state.auth)
  const [removeQuantity, { isLoading }] = useRemoveQuantityMutation()

  const [addToCart, { isLoading: AIsLoading }]
    = useAddToCartMutation()


  const handleCart = async (productId) => {

    const cartInfo = {
      token,
      productId,
      quantity
    }
    await addToCart(cartInfo)
  }

  const handleMinusQuantity = async (productId) => {
    const quantityInfo = {
      token,
      productId
    }
    await removeQuantity(quantityInfo)
  }


  return (
    <div>
      {AIsLoading && <LoadingSpinner />}
      {isLoading && <LoadingSpinner />}
      {
        products?.cart?.products.map(cartProduct => {
          return (
            <div key={cartProduct?.product?._id} className="flex space-x-6 items-center py-2">
              <img
                className="w-28"
                src={cartProduct?.product?.image}
                alt=""
              />
              <div className="space-y-3">
                <div>
                  <h2 className="text-xl font-bold text-black">{cartProduct?.product?.name}</h2>
                  <p className="text-[#000000] font-semibold text-sm">{cartProduct?.product?.title}</p>
                </div>

                <div className="flex justify-around items-center border-2 border-black px-2 w-32 my-1">
                  <AiOutlineMinus onClick={() => handleMinusQuantity(cartProduct?.product?._id)} className="hover:cursor-pointer" />

                  <p>{cartProduct?.quantity}</p>
                  <AiOutlinePlus onClick={() => handleCart(cartProduct?.product?._id)} className="hover:cursor-pointer" />
                </div>
                <p className="text-md font-semibold">{cartProduct?.product?.price}$</p>
              </div>
            </div>
          )
        })
      }

      {/* <div className="flex space-x-6 items-center py-2">
        <img
          className=""
          src="https://i.ibb.co/k4LJMbs/14015212-20332088-480-jpg.png"
          alt=""
        />
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-bold text-black">Energia</h2>
            <p className="text-[#000000] font-semibold text-sm">Vital B</p>
          </div>

          <div className="flex justify-around items-center border-2 border-black px-2 w-32 my-1">
            <AiOutlineMinus className="hover:cursor-pointer" />
            <p>1</p>
            <AiOutlinePlus className="hover:cursor-pointer" />
          </div>
          <p className="text-md font-semibold">270$</p>
        </div>
      </div> */}
    </div>
  );
};

export default CartProduct;
