import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { removeExistingLocation, existingLocation } from "../util";

let initialState = {
  values: [],
  loactionName: "",
  isApiRetrievedProperly: true,
  loginStatus: false,
  loading: false
};

export const query =  createAsyncThunk(
    'weather/query',
    async (locationName) => {
        const BASE_URL =
        "https://api.weatherapi.com/v1/current.json?key=3ddafd9eb53941e6b7d110835221804 &q=";
      const parsedQuery = locationName.replaceAll(" ", "+");
      const url = `${BASE_URL}${parsedQuery}&aqi=no`;
      const fetchUrl = await fetch(url);
      const some = await fetchUrl.json();
      return some;
    }
  )

export const slice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    // query(state, action) {
    //   const newArray = current(state.values);
    //   const tempObject = action.payload;

    //   if (tempObject.location) {
    //     state.isApiRetrievedProperly = true;

    //     const result = existingLocation(newArray, tempObject);
    //     if (result.length === 0) {
    //       state.values.unshift(...[tempObject]);
    //     }
    //   } else {
    //     state.isApiRetrievedProperly = false;
    //   }
    // },
    remove(state, action) {
      state.isApiRetrievedProperly = true;
      const newArray = current(state.values);
      const removedArray = removeExistingLocation(newArray, action.payload);
      state.values = removedArray;
    },
    errorHandler(state, action) {
      state.isApiRetrievedProperly = action.payload;
    },
    loginHandler(state, action) {
      state.loginStatus = action.payload;
    },
  },
  extraReducers : {
    [query.pending]: (state) => {
        state.loading = true
      },
      [query.fulfilled]: (state, { payload }) => {
        state.loading = false
        const newArray = current(state.values);
        const tempObject = payload;
  
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
      [query.rejected]: (state) => {
        state.loading = false
      },

  }
});

export const sliceReducers = slice.actions;
