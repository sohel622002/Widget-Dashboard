import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  openWidgetTab: 0,
};

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    updateOpenWidgetTab: (state, action) => {
      state.openWidgetTab = action.payload;
    },
  },
});

export const { openSidebar, closeSidebar, updateOpenWidgetTab } = appConfigSlice.actions;

export default appConfigSlice.reducer;
