import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://poadeox0h5.execute-api.eu-west-1.amazonaws.com/dev/',
});

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Todo', 'TodoUpdate', 'TodoDelete', 'TodoPost'],
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => `todo`,
      providesTags: ['Todo'],
    }),
    getTodoById: build.query({
      query: (todoId: string) => {
        return {
          url: `todo/${todoId}`,
        };
      },
      providesTags: ['Todo'],
    }),
    postUpdateTodo: build.mutation({
      query(body) {
        return {
          url: `todo`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: build.mutation({
      query(todoId: string) {
        return {
          url: `todo/${todoId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useDeleteTodoMutation,
  useGetTodoByIdQuery,
  useGetTodosQuery,
  usePostUpdateTodoMutation,
} = api;
