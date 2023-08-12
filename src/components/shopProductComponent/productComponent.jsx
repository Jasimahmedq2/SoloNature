import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ProductComponent = () => {
  return (
    <div>
      {/* the data will be displayed dynamically, when will be integrate api  */}
      <div className="grid grid-cols-2">
        <div className="p-4 border border-gray-300">
          <div>
            <div className="flex justify-between">
              <h2 className="px-2 rounded bg-[#FED2AA] w-12">new</h2>
              <span className="hover:cursor-pointer">
                <AiOutlineHeart className="text-2xl" />
              </span>
            </div>
            <img
              className="w-36 h-36"
              src="https://i.ibb.co/S3SDxBc/14031092-20912948-480.png"
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
              <h3 className="text-md font-bold">Energia</h3>
              <h4 className="text-md">VITAL B</h4>
              <p className="text-md">€ 28.70</p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-300">
          <div>
            <div className="flex justify-between">
              <h2 className="px-2 rounded bg-[#FFB6B6] w-12">-10%</h2>
              <span className="hover:cursor-pointer">
                <AiOutlineHeart className="text-2xl" />
              </span>
            </div>
            <img
              className="w-36 h-36"
              src="https://i.ibb.co/k4LJMbs/14015212-20332088-480-jpg.png"
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
              <h3 className="text-md font-bold">Benessere mentale</h3>
              <h4 className="text-md">BIOFENIX</h4>
              <p className="text-md">€ 23.40 € 16.40</p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-300">
          <div>
            <div className="flex justify-between">
              <h2 className="px-2 rounded bg-[#FED2AA] w-12">new</h2>
              <span className="hover:cursor-pointer">
                <AiOutlineHeart className="text-2xl" />
              </span>
            </div>
            <img
              className="w-36 h-36"
              src="https://i.ibb.co/S3SDxBc/14031092-20912948-480.png"
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
              <h3 className="text-md font-bold">Energia</h3>
              <h4 className="text-md">VITAL B</h4>
              <p className="text-md">€ 28.70</p>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-300">
          <div>
            <div className="flex justify-between">
              <h2 className="px-2 rounded bg-[#FFB6B6] w-12">-10%</h2>
              <span className="hover:cursor-pointer">
                <AiOutlineHeart className="text-2xl" />
              </span>
            </div>
            <img
              className="w-36 h-36"
              src="https://i.ibb.co/k4LJMbs/14015212-20332088-480-jpg.png"
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
              <h3 className="text-md font-bold">Benessere mentale</h3>
              <h4 className="text-md">BIOFENIX</h4>
              <p className="text-md">€ 23.40 € 16.40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
