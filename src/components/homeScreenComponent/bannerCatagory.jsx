import { useGetCategoryQuery } from "../../redux/features/product/productApiSlice";

const BannerCategory = () => {
  const { data: NData } = useGetCategoryQuery(undefined)
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-black text-start">
        Acquisti per categorie
      </h2>
      <div className="flex items-center justify-between">

        {
          NData?.data.slice(0, 4).map(category => {
            return (<div key={category?._id} >
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={category?.image}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md">{category?.name}</h3>
            </div>)
          })
        }
      </div>
    </div>
  );
};

export default BannerCategory;
