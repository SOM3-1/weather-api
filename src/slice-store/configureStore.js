import { configureStore } from "@reduxjs/toolkit/";
import { slice } from "./stateSlice";

export const sliceStore = configureStore({
    reducer: slice.reducer
});