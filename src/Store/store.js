import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./features/widgetSlice";
import appConfigReducer from "./features/appSlice";

export const store = configureStore({
  reducer: {
    widget: widgetReducer,
    appConfig: appConfigReducer,
  },
});
