import { createSlice, current } from "@reduxjs/toolkit";
import {
  manageApi,
  removeExistingLocation,
  existingLocation,
} from "../weather/util";

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
      let tempArray = [];

      manageApi(action.payload).then((data) => {
        if (data.location) {
          tempArray.push(data);
        }
      });

      if (tempArray.length) {
        state.isApiRetrievedProperly = true;

        const result = existingLocation(newArray, tempArray);
        if (result.length === 0) {
          state.values.unshift(...tempArray);
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
