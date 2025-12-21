import {httpClient as shellHttpClient} from './httpClient';

export const hostApiServices = shellHttpClient().injectEndpoints({
  endpoints: (builder: any) => ({

    /** Get Student List */
    getStudentList: builder.query({
      query: (data: any) => ({
        url: `/users`,
        method: 'GET',
        params: {...data},
      }),
    }),

      getPostList: builder.query({
      query: ( ) => ({
        url: `/posts`,
        method: 'GET',
      }),
    }),


   /** Post New Student */
    postNewStudent: builder.mutation({
      query: (data: any) => {
        return {
          url: `/student-Details/post`,
          method: 'POST',
          data,
          // headers: {Authorization: `Bearer ${data?.token}`},
        };
      },
    }),
   
  }),
});

export const {
  useLazyGetStudentListQuery,
  usePostNewStudentMutation,
  useLazyGetPostListQuery
} = hostApiServices;
