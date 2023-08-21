import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { workoutsApi, useFetchWorkoutsQuery } from "./apis/workoutApi";

export const store = configureStore({
    reducer: {
        [workoutsApi.reducerPath]: workoutsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                    .concat(workoutsApi.middleware)
    }
})

setupListeners(store.dispatch)


// store is the central point of importing related to redux
export * from "./apis/workoutApi"
