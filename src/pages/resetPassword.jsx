import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useResetPasswordMutation } from "../redux/features/auth/authApiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams()
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const [resetPassword, { isLoading, isSuccess, isError }] = useResetPasswordMutation()


  const onSubmit = async (data) => {
    if (data.password !== data.confirm_password) {
      toast.error('password & confirm password must have to same')
    } else {
      const resetInfo = {
        resetToken: token,
        password: data.password
      }
      resetPassword(resetInfo)
      reset()
    }

  }

  useEffect(() => {
    if (isSuccess && !isLoading) {
      navigate('/login')
      toast.success("your password have changed")
    }
    if (isError && !isLoading) {
      toast.error('something went wrong')
    }
  }, [isLoading])

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="max-w-sm w-full bg-white rounded">
        <div className="mb-4 relative border-gray-200">
          <img
            src="https://i.ibb.co/xsQ4hg0/pic.png"
            alt="Background Image"
            className="w-full h-auto"
          />
          <div className="absolute flex items-center space-x-6 top-8  left-4">
            <IoIosArrowBack
              onClick={handleNavigate}
              className="text-3xl hover:cursor-pointer"
            />
            <h3 className="text-md font-semibold">Nuova Password</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid justify-items-center">
            <div className="mb-4 mt-4 relative">
              <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
                <input
                  type="text"
                  {...register("password", { required: { value: true, message: "password is required" } })}
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
              {errors.password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
            </div>
            <div className="mb-4 mt-6 relative">
              <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
                <input
                  type="text"
                  {...register("confirm_password", { required: { value: true, message: "confirm password is required" } })}
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
              {errors.confirm_password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.confirm_password.message}</p>}
            </div>
          </div>

          <div className=" flex justify-center mt-4 space-x-4">

            <button type="submit" className="bg-black text-white font-bold py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]">
              Salva
            </button>

          </div>
        </form>
        <div className="mx-auto h-[5px] w-40 bg-black mt-8 rounded "></div>
      </div>
    </div>
  );
};

export default ResetPassword;
