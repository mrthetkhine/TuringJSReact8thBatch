import {todosApiSlice} from "@/lib/features/todo/todosApiSlice";

const moviesApi = todosApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllMovies: build.query({
            query: () => '/movies',
        }),
    }),
    overrideExisting: false,
})

export const { useGetAllMoviesQuery } = moviesApi;