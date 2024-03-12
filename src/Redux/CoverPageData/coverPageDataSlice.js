import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coverPage: JSON.parse(localStorage.getItem(`coverPageData`)) || undefined,
};

const coverPageDataSlice = createSlice({
  name: "coverPageData",
  initialState,
  reducers: {
    getUpdatedCoverPageData: (state) => {
      state.coverPage =
        JSON.parse(localStorage.getItem(`coverPageData`)) || undefined;
    },
  },
});

export const { getUpdatedCoverPageData } = coverPageDataSlice.actions;

export default coverPageDataSlice.reducer;
