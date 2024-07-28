import {Movie, moviesApiSlice} from "@/lib/features/movies/movieApi";

export interface Review
{
    "_id":string;
    "movie":string;
    "rating":number;
    "review":string;
}
const reviewApi = moviesApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllReviewsByMovieId: build.query<Review[],string>({
            query: (movieId:string) => `/reviews/movie/${movieId}`,
            transformResponse: (reviews: any[], meta, arg) => {
                return reviews.map(review=> {
                    review.movie = review.movie._id;
                    return review;
                });
            },
            providesTags:()=>['Reviews']
        }),
        //Pessimistic
        addReview:build.mutation<Review,any>({
            query: (review:any) => ({
                url: `/reviews`,
                method: 'POST',
                body:review,
            }),
            //invalidatesTags:["Todos"]

            async onQueryStarted(review:any, { dispatch, queryFulfilled }) {
                console.log('onQueryStarted review ',review);

                try {
                    const {data:savedReview} = await queryFulfilled
                    console.log('Saved savedReview ',savedReview);
                    const patchResult = dispatch(
                        reviewApi.util.updateQueryData('getAllReviewsByMovieId', review.movie, (draft) => {
                            console.log('Draft ',draft);
                            draft.push(savedReview);
                            return draft;
                        }),
                    );
                } catch {
                    //patchResult.undo();
                }
            }
        }),
        updateReview:build.mutation<Review,Review>({
            query: (review:Review) => ({
                url: `/reviews/${review._id}`,
                method: 'PUT',
                body:review,

            }),
            async onQueryStarted(review:Review, { dispatch, queryFulfilled }) {
                console.log('onQueryStarted update Review ',review);
                const patchResult = dispatch(
                    reviewApi.util.updateQueryData('getAllReviewsByMovieId', review.movie, (draft) => {
                        console.log('Draft ',draft);
                        draft = draft.map(rev=>rev._id == review._id? review: rev);
                        return draft;
                    }),
                );
                console.log('Patch done');
                try {

                    const {data:updatedReview} = await queryFulfilled
                    console.log('Update updatedReview  response',updatedReview);

                } catch {
                    patchResult.undo();
                }
            }

        }),
        deleteReview:build.mutation<Review, Review>({
            query: (review:Review) => ({
                url: `/reviews/${review._id}`,
                method: 'DELETE',

            }),

            //Optimistic

            async onQueryStarted(review:Review , { dispatch, queryFulfilled }) {
                console.log('Review to delete ',review);
                const patchResult = dispatch(
                    reviewApi.util.updateQueryData('getAllReviewsByMovieId', review.movie, (draft) => {
                        //console.log('Draft ',draft);
                        draft = draft.filter(rev=>rev._id != review._id);
                        //console.log('Draft ',draft);
                        return draft;
                    }),
                );
                try {
                    const {data:deletedReview} = await queryFulfilled
                    console.log('Deleted review ',deletedReview);
                } catch {
                    patchResult.undo();
                }
            }
        }),
    }),
    overrideExisting: false,
})
export const { useGetAllReviewsByMovieIdQuery,useAddReviewMutation,useUpdateReviewMutation,useDeleteReviewMutation} = reviewApi;