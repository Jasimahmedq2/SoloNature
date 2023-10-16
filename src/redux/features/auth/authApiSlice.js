import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/auth/logIn`,
        method: "POST",
        body: data,
      }),
    }),

    registerUser: builder.mutation({
      query(data) {
        return {
          url: "/auth/registration",
          method: "POST",
          body: data,
        };
      },
    }),
    verifyEmail: builder.mutation({
      query(token) {
        return {
          url: `/auth/verify/${token}`,
          method: "POST",
          body: token,
        };
      },
    }),
    resetRequest: builder.mutation({
      query(data) {
        return {
          url: `/auth/reset-password-request`,
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation({
      query(data) {
        return {
          url: `/auth/set-new-password`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useResetRequestMutation,
  useResetPasswordMutation,
} = authApi;
