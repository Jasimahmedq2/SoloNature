/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useApplyPromoCodeMutation } from "../../redux/features/product/productApiSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CartPriceInfo = ({ products }) => {
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const [applyPromoCode, { data: PData, isLoading, isError, error, isSuccess }] = useApplyPromoCodeMutation()

  const onSubmit = async (data) => {
    console.log(data.promoCode)

    const promoInfo = {
      token,
      info: {
        code: data.promoCode,
        totalPrice: products?.totalPrice
      }
    }
    await applyPromoCode(promoInfo)
    console.log(data, promoInfo)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("congress you have get a voucher")
      console.log(PData.data.discountedTotalPrice)
    }
  }, [isLoading, isError, isSuccess])

  return (
    <div>
      <div className="p-3 rounded my-4 space-y-3 bg-[#F8FAFC]">
        <h3 className="text-xl text-black font-bold border-b border-[#CBD5E1] p-3">
          Totale carrello
        </h3>
        <div className="border-b border-[#CBD5E1] space-y-4 py-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xl text-black font-semibold">Subtotale</h3>
            <h3 className="text-xl text-black font-semibold">€{products?.totalPrice}</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl text-black font-semibold">Spedizione</h3>
            <h3 className="text-xl text-right text-black font-semibold">
              {" "}
              costi di spedizione vengono calcolati durante il pagamento.
            </h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl text-black font-semibold">Totale</h3>
          <h3 className="text-xl text-black font-bold">€{products?.totalPrice}</h3>
        </div>
        {
          isSuccess && <>
            <div className="flex justify-between items-center">
              <h3 className="text-xl text-black font-semibold">discountPrice</h3>
              <h3 className="text-xl text-black font-bold">€{PData?.data?.discountedAmount}</h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl text-black font-semibold">discountedTotalPrice</h3>
              <h3 className="text-xl text-black font-bold">€{PData?.data?.discountedTotalPrice}</h3>
            </div>
          </>
        }

        <h3 className="text-xl text-black font-bold py-2">
          Possiedi un buono regalo?
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center space-x-2 bg-base-200 border border-black w-full">
            <input
              {...register("promoCode", { required: "promoCode is required" })}
              aria-invalid={errors.promoCode ? "true" : "false"}
              type="text"
              placeholder="Numero del buono regalo"
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-[#64748B] bg-base-200 p-4 w-full"
            />
            <button type="submit" className="bg-[#ECDFCE] text-md font-bold hover:cursor-pointer p-4">
              {isLoading ? "loading" : "Applica"}
            </button>
          </div>
          {errors.promoCode && <p className="text-red-400 text-sm">{errors.promoCode.message}</p>}
        </form>
        {
          isError && <p className="text-red-400 text-sm">{error.data.errorMessage[0].message}</p>
        }
        <div className="py-4 space-y-3">
          <div className="flex items-baseline space-x-4">
            <p className="">o 3 rate da € 17.27 senza interessi</p>
            <img
              className="max-h-5"
              src="https://i.ibb.co/7K1BQxB/image-1626.png"
              alt=""
            />
          </div>
          <div className="flex items-baseline space-x-4">
            <img
              className="max-h-5"
              src="https://i.ibb.co/J7Wx02r/image-1627.png"
              alt=""
            />
            <p className="">
              Paga in 3 rate da 17,27€ senza interessi TAEG 0%. Scopri di più
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/orderForm")}
        className="bg-[#000000] text-white text-md font-bold hover:cursor-pointer p-4 w-full my-6 rounded"
      >
        Procedi con l'ordine
      </button>
    </div>
  );
};

export default CartPriceInfo;
