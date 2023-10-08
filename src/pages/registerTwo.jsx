import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const RegisterTwo = () => {
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const [registerUser, { isLoading, isSuccess, isError, error }] =
    useRegisterUserMutation();

  console.log({ error })




  const onSubmit = async (data) => {
    if (data.password !== data.confirm_password) {
      toast.error("password and confirm password must have to same")
    } else {
      const info = {
        password: data?.password,
        email: data?.email
      }
      await registerUser(info)
      reset()
    }


  }
  useEffect(() => {

    if (isSuccess) {
      navigate('/login')
      toast("check email to verify your email")
    }
    if (isError) {
      toast.error(error.data.errorMessage[0].message)
    }
  }, [isLoading])

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 mt-8 ">
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: { value: true, message: "email is required" } })}
            className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
          />

        </div>
        {errors.email?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        <div className="mb-4 mt-6 relative">
          <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
            <input
              type="text"
              placeholder="Password"
              {...register("password", { required: { value: true, message: "password is required" } })}
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
        {errors.password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
        <div className="mb-4 mt-6 relative">
          <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
            <input
              type="text"
              placeholder="Ripeti password"
              {...register("confirm_password", { required: { value: true, message: "confirm password is required" } })}
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

        {errors.confirm_password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.confirm_password.message}</p>}
        <div className="flex items-center mt-6 gap-2">
          <input type="checkbox" className="mr-2 w-5 h-5" />
          <p className="text-md">Accetto termini e condizioni</p>
        </div>

        <button type="submit" className="bg-black text-white font-bold py-4 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px] mt-7">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterTwo;
