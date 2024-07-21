import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Todo} from "@/lib/features/todo/todoSlice";


console.log('BACKEND URL ',process.env.NEXT_PUBLIC_BACKEND_URL);
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log('BACKEND URL ',BACKEND_URL);
export const todosApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
    reducerPath: "todosApi",
    // Tag types are used for caching and invalidation.
    tagTypes: ["Todos"],
    endpoints: (build) => ({
        // Supply generics for the return type (in this case `QuotesApiResponse`)
        // and the expected query argument. If there is no argument, use `void`
        // for the argument type instead.
        getAllTodos: build.query<Todo[],any>({
            query: () => `/todos`,
            //providesTags:()=>['Todos']
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ _id }) => ({ type: 'Todos' as const, id:_id })), 'Todos']
                    : ['Todos'],
            // `providesTags` determines which 'tag' is attached to the
            // cached data returned by the query.

        }),
        getTodoById:build.query<Todo,string>({
            query: (id: string) => ({url: `todos/${id}`}),
            transformResponse: (response: Todo, meta, arg) => {
                console.log('Response ', response);
                return response;
            },

        }),
        //Pessimistic
        addTodo:build.mutation<Todo,Partial<Todo>>({
            query: (todo:Partial<Todo>) => ({
                url: `/todos`,
                method: 'POST',
                body:todo,
            }),
            //invalidatesTags:["Todos"]

            async onQueryStarted(todo:Todo, { dispatch, queryFulfilled }) {
                console.log('onQueryStarted Todo ',todo);

                try {
                    const {data:savedTodo} = await queryFulfilled
                    console.log('Saved savedTodo ',savedTodo);
                    const patchResult = dispatch(
                        todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
                            console.log('Draft ',draft);
                            draft.push(savedTodo);
                            return draft;
                        }),
                    );
                } catch {
                    //patchResult.undo();
                }
            }
        }),
        updateTodo:build.mutation<Todo,Todo>({
            query: (todo:Todo) => ({
                url: `/todos/${todo._id}`,
                method: 'PUT',
                body:todo,

            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Todos', id: arg._id }],
            //invalidatesTags:["Todos"]
        }),
        //optimistic
        deleteTodo:build.mutation<Todo,string>({
            query: (id:string) => ({
                url: `/todos/${id}`,
                method: 'DELETE',

            }),
            //invalidatesTags:["Todos"]

            async onQueryStarted(todoId:string, { dispatch, queryFulfilled }) {
                console.log('onQueryStarted delete Todo ',todoId);
                const patchResult = dispatch(
                    todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
                        console.log('Draft ',draft);
                        draft = draft.filter(td=>td._id != todoId);
                        return draft;
                    }),
                );
                console.log('Patch done');
                try {

                    const {data:deletedTodo} = await queryFulfilled
                    console.log('Update delete todo response',deletedTodo);

                } catch {
                    patchResult.undo();
                }
            }
        }),
    }),
});


export const { useGetAllTodosQuery, useGetTodoByIdQuery, useAddTodoMutation, useDeleteTodoMutation ,useUpdateTodoMutation} = todosApiSlice;
