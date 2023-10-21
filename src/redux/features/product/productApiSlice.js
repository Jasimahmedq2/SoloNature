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
      query: ({ token, categoryType }) => ({
        url: `/product/supplements`,
        params: { categoryType },
        headers: {
          Authorization: `${token}`,
        },
      }),
      providesTags: ["category"],
    }),
    productDetails: builder.query({
      query: ({ token, id }) => ({
        url: `/product/${id}`,
        headers: {
          Authorization: `${token}`,
        },
      }),
      providesTags: ["product"],
    }),
    getCartProduct: builder.query({
      query: (token) => ({
        url: `/cart/get-cart`,
        headers: {
          Authorization: `${token}`,
        },
      }),
      providesTags: ["product"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: `/cart/add-to-cart`,
        method: "POST",
        headers: {
          Authorization: `${data?.token}`,
        },
        body: {
          product: data?.productId,
          quantity: data?.quantity,
        },
      }),

      invalidatesTags: ["product"],
    }),
    removeQuantity: builder.mutation({
      query: (data) => ({
        url: `/cart/remove-quantity`,
        method: "POST",
        headers: {
          Authorization: `${data?.token}`,
        },
        body: {
          productId: data.productId,
        },
      }),

      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useAddProductMutation,
  useGetCategoryQuery,
  useSupplementProductQuery,
  useProductDetailsQuery,
  useAddToCartMutation,
  useGetCartProductQuery,
  useRemoveQuantityMutation,
} = productApi;
