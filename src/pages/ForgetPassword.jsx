import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useResetRequestMutation } from "../redux/features/auth/authApiSlice";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [resetRequest, { isLoading, isSuccess, isError }] = useResetRequestMutation()

  const { register, formState: { errors }, handleSubmit } = useForm();


  const onSubmit = (data) => {
    resetRequest(data)

  }



  useEffect(() => {
    if (isSuccess && !isLoading) {

      toast.success("please check your email to set your password")
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
          <div className="grid justify-items-center mt-12 gap-6">
            <h1 className="text-black font-bold text-[26px] ">
              Password dimenticata?
            </h1>
            <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-80 py-4 ">
              <input
                type="text"
                {...register("email", { required: { value: true, message: "you have to provide your email" } })}
                placeholder="Inserisci la tua email"
                className="focus:outline-0 placeholder:text-[20px] text-center font-md placeholder:text-black bg-base-200 w-full"
              />
              {errors.email?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>
          </div>

          <div className=" flex justify-center mt-6 space-x-4">
            <button
              className="bg-black text-white py-4 px-2 focus:outline-none focus:shadow-outline w-80 font-sans text-[20px]"
              type="submit"
            >
              Reimposta password
            </button>
          </div>
        </form>
        <div className="mx-auto h-[5px] w-40 bg-black mt-8 rounded "></div>
      </div>
    </div>
  );
};

export default ForgetPassword;
