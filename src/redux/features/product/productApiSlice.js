import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: `/category/create-category`,
        method: "POST",
        headers: {
          Authorization: `${data.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["category"],
    }),
    getCategory: builder.query({
      query: () => ({
        url: `/category/get-category`,
      }),
      providesTags: ["category"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/product/create-product`,
        method: "POST",
        headers: {
          Authorization: `${data.token}`,
        },
        body: data.info,
      }),
    }),
    supplementProduct: builder.query({
      query: (token) => ({
        url: `/product/supplements`,
        headers: {
          Authorization: `${token}`,
        },
      }),
      providesTags: ["category"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useAddProductMutation,
  useGetCategoryQuery,
  useSupplementProductQuery,
} = productApi;
