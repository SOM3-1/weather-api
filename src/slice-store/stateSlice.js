import { createSlice, current } from "@reduxjs/toolkit";
import {
  removeExistingLocation,
  existingLocation,
} from "../util";

let initialState = {
  values: [],
  loactionName: "",
  isApiRetrievedProperly: true,
};

export const slice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    query(state, action) {
      const newArray = current(state.values);
      const tempObject = action.payload;

      if (tempObject.location) {
        state.isApiRetrievedProperly = true;

        const result = existingLocation(newArray, tempObject);
        if (result.length === 0) {
          state.values.unshift(...[tempObject]);
        }
      } else {
        state.isApiRetrievedProperly = false;
      }
    },
    remove(state, action) {
      state.isApiRetrievedProperly = true;
      const newArray = current(state.values);
      const removedArray = removeExistingLocation(newArray, action.payload);
      state.values = removedArray;
    },
  },
});

export const sliceReducers = slice.actions;
