import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./features/widgetSlice";
import appConfigReducer from "./features/appConfigSlice";

export const store = configureStore({
  reducer: {
    widget: widgetReducer,
    appConfig: appConfigReducer,
  },
});
