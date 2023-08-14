import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="max-w-sm w-full bg-white rounded">
        <div className="mb-4 border-gray-200">
          <img
            src="https://i.ibb.co/6WGqmz4/forget.jpg"
            alt="Background Image"
            className="w-full h-auto"
          />
        </div>
        <form>
          <div className="grid justify-items-center">
            <div className="mb-4 mt-6 relative">
              <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
                <input
                  type="text"
                  placeholder="Ripeti password"
                  className="focus:outline-0 placeholder:text-[18px] font-sans placeholder:text-black bg-base-200 w-full"
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
            <div className="mb-4 mt-4 relative">
              <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
                <input
                  type="text"
                  placeholder="Password"
                  className="focus:outline-0 placeholder:text-[18px] font-sans placeholder:text-black bg-base-200 w-full"
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

          <div className=" flex justify-center mt-4 space-x-4">
            <Link to="/">
              <button className="bg-black text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]">
                Salva
              </button>
            </Link>
          </div>
        </form>
        <div className="mx-auto h-[5px] w-40 bg-black mt-8 rounded "></div>
      </div>
    </div>
  );
};

export default Register;
