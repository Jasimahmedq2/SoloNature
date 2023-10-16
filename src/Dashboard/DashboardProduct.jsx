import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAddProductMutation, useGetCategoryQuery } from "../redux/features/product/productApiSlice";
import { useSelector } from "react-redux";

const DashboardProduct = () => {
  const { data: NData } = useGetCategoryQuery(undefined)
  console.log(NData?.data)
  const { register, formState: { errors }, reset, handleSubmit } = useForm();
  const { token } = useSelector(state => state.auth)
  const [addProduct, { isLoading, isSuccess, isError, error }] = useAddProductMutation()

  const privateUrl = "44c26384eae4023f6064cf342eee9294";

  const onSubmit = (data) => {
    console.log(data)
    const img = data?.image[0];
    const formData = new FormData();
    formData.append("image", img);

    fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("image url", result.data.url);

        const product = {
          info: {
            ...data,
            image: result.data.url,
          },
          token: token
        };
        console.log(product)
        addProduct(product)
        reset()

      });
  }

  useEffect(() => {
    if (isSuccess && !isLoading) {
      toast.success('successfully created a product')
    }
    if (isError) {
      toast.error(error?.data?.errorMessage[0]?.message)
    }
  }, [isLoading, isError, isSuccess])
  return (
    <div>
      <div>
        <div className='w-96 p-7'>
          <h2 className="text-4xl font-bold">Upload Product</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input
                  {...register("name", { required: { value: true, message: "name is required" } })}
                  type="text" className="block w-full py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500" />
              </div>
              {errors.name?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">title</label>
              <div className="mt-2">
                <input
                  {...register("title", { required: { value: true, message: "title is required" } })}
                  type="text" className="block w-full py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500" />
              </div>
              {errors.title?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
            </div>


            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">description</label>
              <div className="mt-2">
                <textarea
                  {...register("description", { required: { value: true, message: "description is required" } })}
                  rows="3" className="block w-full rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"></textarea>
              </div>
              {errors.description?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}

            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">price</label>
              <div className="mt-2">
                <input
                  {...register("price", { required: { value: true, message: "price is required" } })}
                  type="number" className="block w-full py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500" />
              </div>
              {errors.price?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">Product Category</label>
              <div className="mt-2">
                <select
                  {...register("category", { required: { value: true, message: "category is required" } })}
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  {
                    NData?.data.map(category => (<option key={category?._id} value={category?._id}>{category.name}</option>))
                  }

                </select>
              </div>
              {errors.category?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.category.message}</p>}
            </div>


            <div className='mt-4'>
              <label className="label"> <span className="label-text">Product Photo</span></label>
              <div className='mt-3'>
                <label className="sr-only">Choose file</label>
                <input
                  {...register("image", { required: { value: true, message: "image is required" } })}
                  type="file" className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
    file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"/>
              </div>
              {errors.image?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.image.message}</p>}
            </div>

            <input className='btn cursor-pointer bg-indigo-600 py-2 px-4 rounded-md text-white w-full mt-4' value="Add Product" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;