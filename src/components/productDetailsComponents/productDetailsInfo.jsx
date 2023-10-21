/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddToCartMutation } from "../../redux/features/product/productApiSlice";

const ProductDetailsInfo = ({ product }) => {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const { token } = useSelector(state => state.auth)

  const [addToCart, { isLoading, isSuccess, isError }]
    = useAddToCartMutation()


  const handleCart = async (productId) => {

    const cartInfo = {
      token,
      productId,
      quantity
    }
    await addToCart(cartInfo)
  }

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(pre => pre - 1)
    } else {
      toast.error("1 is minimum quantity")
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("successfully added the product in cart")
      navigate('/cart')
    }
    if (isError) {
      toast.error("something went wrong")
    }
  }, [isLoading, isError, isSuccess])

  return (
    <div className="px-6 py-6">
      <div>
        <h2 className="text-xl tracking-wide font-semibold text-[#0F172A] text-start">
          {product?.title}
        </h2>

        <div className="flex justify-between items-center py-2">
          <h3 className="text-xl font-bold text-black">€{product?.price}</h3>
          <div className="flex text-sm justify-end">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>

        <div className="flex justify-between items-center space-x-4 py-2">
          <div className="flex justify-around items-center w-1/2 border-2 border-black p-2">
            <AiOutlineMinus onClick={handleMinusQuantity} className="hover:cursor-pointer" />
            <p>{quantity}</p>
            <AiOutlinePlus onClick={() => setQuantity(pre => pre + 1)} className="hover:cursor-pointer" />
          </div>
          <div className="bg-[#ECDFCE] hover:cursor-pointer p-2 w-1/2">
            <button onClick={() => handleCart(product?._id)} className="text-md font-semibold whitespace-nowrap text-[#0F172A]">
              {
                isLoading ? "loading..." : "Aggiungi al carrello"
              }

            </button>
          </div>
        </div>
        <div className="py-2">
          <p className="text-[#000000] text-left leading-relaxed font-semibold">
            {product?.description}
          </p>
        </div>
        <div className="p-3 rounded my-4 bg-[#F1F5F9] flex items-center space-x-4">
          <img
            className="w-8"
            src="https://i.ibb.co/59cWPB8/image-1629.png"
            alt=""
          />
          <p className="text-[#000000]">
            Acquista questo prodotto e ottieni 52 Punti Natura
          </p>
        </div>

        <div className="p-3 rounded my-4 space-y-3 bg-[#F1F5F9]">
          <h3 className="text-xl text-black font-bold">Cos'è</h3>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            L’allergia (alimentare, cutanea, respiratoria, da contatto) è una
            reazione anomala ed eccessiva del sistema immunitario, che riconosce
            come nemiche le sostanze normalmente innocue presenti
            nell’ambiente....
            <Link to="/ingredienti">
              <span className="text-[#A05611] text-xl font-bold hover:cursor-pointer">
                Di più
              </span>
            </Link>
          </p>
        </div>
        <div className="p-3 rounded my-4 space-y-3 bg-[#F1F5F9]">
          <h3 className="text-xl text-black font-bold">Ingredienti </h3>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            Vedi gli ingredienti dei singoli prodotti:
          </p>

          <h3 className="text-xl text-black font-semibold">Talos:</h3>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            L’allergia (alimentare, cutanea, respiratoria, da contatto) è una
            reazione anomala ed eccessiva del sistema immunitario, che riconosce
            come nemiche le sostanze normalmente innocue presenti
            nell’ambiente....
            <Link to="/ingredienti">
              <span className="text-[#A05611] text-xl font-bold hover:cursor-pointer">
                Di più
              </span>
            </Link>
          </p>
          <h3 className="text-xl text-black font-semibold">Epion:</h3>

          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            L’allergia (alimentare, cutanea, respiratoria, da contatto) è una
            reazione anomala ed eccessiva del sistema immunitario, che riconosce
            come nemiche le sostanze normalmente innocue presenti
            nell’ambiente....
            <Link to="/ingredienti">
              <span className="text-[#A05611] text-xl font-bold hover:cursor-pointer">
                Di più
              </span>
            </Link>
          </p>
        </div>

        <div className="p-3 rounded my-4 space-y-3 bg-[#F1F5F9]">
          <h3 className="text-xl text-black font-bold">Modo d'uso</h3>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            Modo d'uso Si consiglia di assumere nella fase acuta 4
            vaporizzazioni, sotto la lingua, 3 o 4 volte al giorno, pari a 1,5 –
            2,0 g al dì.
          </p>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            Per qualsiasi dubbio, domanda o chiarimento puoi contattare il
            nostro medico cliccando qui. Ti risponderà nel più breve tempo
            possibile.
          </p>
        </div>
        <div className="p-3 rounded my-4 space-y-3 bg-[#F1F5F9]">
          <h3 className="text-xl text-black font-bold">Avvertenze</h3>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            L’allergia (alimentare, cutanea, respiratoria, da contatto) è una
            reazione anomala ed eccessiva del nell’ambiente....
            <span className="text-[#A05611] text-xl font-bold hover:cursor-pointer">
              Di più
            </span>
          </p>
        </div>
        <div className="p-3 rounded my-4 space-y-3 bg-[#F1F5F9]">
          <h3 className="text-xl text-black font-bold">Scadenza</h3>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            Best before, see expiration date on the package.
          </p>
        </div>
        <div className="p-3 rounded my-4 space-y-3 bg-[#F1F5F9]">
          <h3 className="text-xl text-black font-bold">FAQ</h3>
          <h3 className="text-md text-black font-semibold">
            FAQ Qual è la posologia di Talos?
          </h3>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            consiglia di assumere 4 vaporizzazioni sotto la lingua, 3 o 4 volte
            al giorno....
          </p>
          <p className="text-[#A05611] text-xl font-bold hover:cursor-pointer">
            Di più
          </p>
        </div>
        <div className="p-3 rounded my-4 space-y-3 bg-[#F1F5F9]">
          <h3 className="text-xl text-black font-bold">Recensioni</h3>
          <h3 className="text-md text-black font-semibold">
            Talos un ottimo rimedio da portare in borsetta
          </h3>
          <div className="flex items-center space-x-3">
            <div className="flex text-sm">
              <AiFillStar className="text-[#FFC947]" />
              <AiFillStar className="text-[#FFC947]" />
              <AiFillStar className="text-[#FFC947]" />
              <AiFillStar className="text-[#FFC947]" />
              <CiStar />
            </div>
            <p className="text-[#000000] text-start leading-relaxed font-semibold">
              23 Maggio 2023
            </p>
          </div>
          <p className="text-[#000000] text-start leading-relaxed font-semibold">
            Piacevole sapore, comodo da portare sempre con se e di facile
            utilizzo in momenti di crisi più acute. Al mattino prendo le
            compresse Epion.
          </p>
          <p className="text-[#A05611] text-xl font-bold hover:cursor-pointer">
            Di più
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
