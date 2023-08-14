import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="max-w-sm w-full bg-white rounded relative">
        <div className="mb-4 border-gray-200">
          <img
            src="https://i.ibb.co/4NVMBPr/homesix.jpg"
            alt="Background Image"
            className="w-full h-auto"
          />
          <div className="absolute flex items-center space-x-6 top-8  left-4">
            <IoIosArrowBack
              onClick={handleNavigate}
              className="text-3xl hover:cursor-pointer"
            />
            <h3 className="text-md font-semibold">Accedi</h3>
          </div>
        </div>
        <form>
          <div className="grid justify-items-center">
            <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
              <input
                type="text"
                placeholder="Email"
                className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
              />
                      
            </div>
            <div className="mb-4 mt-6 relative">
              <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
                <input
                  type="text"
                  placeholder="Password"
                  className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
                />
                <span>
                  {" "}
                  <img
                    className="h-6 w-6"
                    src="https://cdn-icons-png.flaticon.com/128/9428/9428781.png"
                    alt=""
                  />
                </span>
                        
              </div>
            </div>
          </div>

          <div className="mb-4 text-end pr-8">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Password dimenticata?
            </a>
          </div>

          <div className=" flex justify-center mt-6 space-x-4">
            <button
              onClick={() => navigate("/logintwo")}
              className="bg-[#d4c4b0] text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]"
            >
              Login
            </button>
          </div>

          <div className="flex justify-between items-center px-8 space-x-2">
            <div className="h-[2px] w-32 bg-black col-start-1 col-end-2 mt-10"></div>

            <div className="flex items-center justify-center col-start-2 col-end-3">
              <h3 className="mt-7">oppure</h3>
            </div>

            <div className="h-[2px] w-32 bg-black col-start-3 col-end-4 mt-10"></div>
          </div>

          <div className=" flex justify-center mt-6 space-x-4">
            <button
              onClick={() => navigate("/registertwo")}
              className="bg-black text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mx-auto h-[5px] w-40 bg-black mt-8 rounded "></div>
      </div>
    </div>
  );
};

export default Login;
