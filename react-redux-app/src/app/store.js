import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { authMiddleware } from "../features/auth/authMiddleware";
import itemReducer from "../components/itemSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    item: itemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware)
});