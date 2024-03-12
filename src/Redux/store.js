import { configureStore } from "@reduxjs/toolkit";
import coverPageDataReducer from "./CoverPageData/coverPageDataSlice";
import drawerReducer from "./DrawerSlice/drawerSlice";

const store = configureStore({
  reducer: {
    coverPageData: coverPageDataReducer,
    helperDrawer: drawerReducer,
  },
});

export default store;
