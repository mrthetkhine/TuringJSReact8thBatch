import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Todo} from "@/lib/features/todo/todoSlice";

export const todosApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    reducerPath: "todosApi",
    // Tag types are used for caching and invalidation.
    tagTypes: ["Todos"],
    endpoints: (build) => ({
        // Supply generics for the return type (in this case `QuotesApiResponse`)
        // and the expected query argument. If there is no argument, use `void`
        // for the argument type instead.
        getAllTodos: build.query<Todo[]>({
            query: () => `/todos`,
            // `providesTags` determines which 'tag' is attached to the
            // cached data returned by the query.

        }),
        getTodoById:build.query<Todo,string>({
            query: (id: string) => ({url: `todos/${id}`}),
            transformResponse: (response: Todo, meta, arg) => {
                console.log('Response ', response);
                return response;
            },

        })
    }),
});


export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todosApiSlice;
