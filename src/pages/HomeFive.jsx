import { useNavigate } from "react-router-dom";

const HomeFive = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center">
        <img src="https://i.ibb.co/N3DQzBq/five.jpg" alt="" />
      </div>
      <div>
        <h1 className="text-center font-sans text-3xl mt-6">
          Benvenuti suv <br /> Solo Natura
        </h1>
      </div>
      <div className="">
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => navigate("/homeScreen")}
            className="bg-[#ecdfce] text-black font-medium py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]"
          >
            Vai al catalogo
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white border-2  text-black font-medium py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]"
          >
            Accedi
          </button>
        </div>
        <div className=" flex justify-center mt-6 space-x-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-black text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeFive;
