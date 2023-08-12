import { CiSearch, CiSquareRemove } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SecondSearch = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="px-6 py-4">
      <div className="flex items-center">
        <IoIosArrowBack
          onClick={handleNavigate}
          className="text-3xl hover:cursor-pointer"
        />

        <h2 className="w-50 mx-auto text-xl font-bold ">Cerca</h2>
      </div>
      <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-full my-6">
        <span>
          {" "}
          <CiSearch className="text-xl" />
        </span>
        <input
          type="text"
          placeholder="search"
          className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
        />
        <span>
          <CiSquareRemove className="text-xl hover:cursor-pointer" />
        </span>
      </div>

      {/* // product */}
      <div className="flex border-b border-[#CBD5E1] space-x-6 items-center p-2">
        <img
          className="w-16 "
          src="https://i.ibb.co/k4LJMbs/14015212-20332088-480-jpg.png"
          alt=""
        />
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-black">Biofenix</h2>
          <p className="text-md font-semibold">$49.90</p>
        </div>
      </div>
      <div className="py-2">
        <h2 className="text-xl font-bold text-[#A05611]">Cerca Bio</h2>
      </div>
    </div>
  );
};

export default SecondSearch;
