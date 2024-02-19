import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "../features/beranda/mapSlice";

const store = configureStore({
  reducer: {
    maps: mapSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
