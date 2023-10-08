import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApiSlice";
import { useEffect } from "react";
import { isLoggedIn } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { register, formState: { errors }, handleSubmit } = useForm();



  const [loginUser, { data: loginData, isSuccess, isLoading, error, isError }] = useLoginUserMutation()

  console.log({ error })

  const onSubmit = data => {
    loginUser(data)
  }

  useEffect(() => {
    if (isSuccess && !isLoading) {
      navigate("/homeScreen")
      dispatch(isLoggedIn(loginData?.data))
      toast("successfully logged in")
    }
    if (isError && !isLoading) {
      toast.error('something went wrong, please check your email and password again. and make sure your email address is verified')
    }
  }, [isLoading])

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid justify-items-center">
            <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: { value: true, message: "email is required" } })}
                className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
              />
              {errors.email?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>
            <div className="mb-4 mt-6 relative">
              <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: { value: true, message: "password is required" } })}
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
            {errors.password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>

          <div className="mb-4 text-end pr-8">
            <Link to='/forgetpassword' className="text-blue-500 text-sm hover:underline">
              Password dimenticata?
            </Link>
          </div>

          <div className=" flex justify-center mt-6 space-x-4">
            <button
              type="submit"
              className="bg-[#d4c4b0] text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center px-8 space-x-2">
          <div className="h-[2px] w-32 bg-black col-start-1 col-end-2 mt-10"></div>

          <div className="flex items-center justify-center col-start-2 col-end-3">
            <h3 className="mt-7">oppure</h3>
          </div>

          <div className="h-[2px] w-32 bg-black col-start-3 col-end-4 mt-10"></div>
        </div>

        <div className=" flex justify-center mt-6 space-x-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-black text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]"
          >
            Register
          </button>
        </div>
        <div className="mx-auto h-[5px] w-40 bg-black mt-8 rounded "></div>
      </div>
    </div>
  );
};

export default Login;
