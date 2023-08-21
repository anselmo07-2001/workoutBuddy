import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const workoutsApi = createApi({
    reducerPath: "workouts",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api"
    }),
    endpoints(builder) {
        return {
            fetchWorkouts: builder.query({
                providesTags: [{type: "workout"}],
                query: () => {
                    return {
                        url: "/workouts",
                        method: "GET",
                    }
                }
            }),
            addWorkouts: builder.mutation({
                invalidatesTags: [{type: "workout"}],
                query: (workout) => {
                    return {
                        url: "/workouts",
                        method: "POST",
                        body: workout
                    }
                }
            }),
            deleteWorkouts: builder.mutation({
                invalidatesTags: [{type: "workout"}],
                query: (workout) => {
                    console.log(workout)
                    return {
                        url: `/workouts/${workout._id}`,
                        method: "DELETE",
                    }
                }
            })
        }
    }
})


export const { useFetchWorkoutsQuery, useAddWorkoutsMutation, useDeleteWorkoutsMutation } = workoutsApi
export { workoutsApi }