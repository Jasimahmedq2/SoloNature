import { useNavigate } from "react-router-dom";

const RegisterTwo = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-8">
      <div className="flex items-center gap-20 mt-6">
        <img
          onClick={() => navigate(-1)}
          className="h-9 w-9"
          src="https://cdn-icons-png.flaticon.com/128/3877/3877262.png"
          alt=""
        />
        <h2 className="font-bold text-black text-[22px] text-center">
          Registrati
        </h2>
      </div>
      <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 mt-8 ">
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
      <div className="flex items-center mt-6 gap-2">
        <input type="checkbox" className="mr-2 w-5 h-5" />
        <p className="text-md">Accetto termini e condizioni</p>
      </div>

      <button className="bg-black text-white font-bold py-4 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px] mt-7">
        Register
      </button>
    </div>
  );
};

export default RegisterTwo;
