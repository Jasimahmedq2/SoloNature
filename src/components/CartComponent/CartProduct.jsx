import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartProduct = () => {
  return (
    <div>
      <div className="flex space-x-6 items-center py-2">
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
      </div>
      <div className="flex space-x-6 items-center py-2">
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
      </div>
    </div>
  );
};

export default CartProduct;
