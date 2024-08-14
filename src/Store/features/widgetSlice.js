import { createSlice } from "@reduxjs/toolkit";
import { dashboardWidgets } from "../../../data";

export const widgetSlice = createSlice({
  name: "widget",
  initialState: dashboardWidgets,
  reducers: {
    updateWidgetVisibility: (state, action) => {
      const { widgetCateg, widgetId, isVisible } = action.payload;
      const widgetIndex = state[widgetCateg].findIndex(
        (w) => w.id === widgetId
      );
      if (widgetIndex !== -1) {
        state[widgetCateg][widgetIndex].isVisible = !isVisible;
      }
    },
    addWidget: (state, action) => {
      const { widgetCateg, newWidget } = action.payload;
      if ((newWidget.title, newWidget.desc, newWidget.id)) {
        state[widgetCateg].push(newWidget);
      }
    },
    deleteWidget: (state, action) => {
      const { widgetCateg, widgetId } = action.payload;
      const widgetIndex = state[widgetCateg].findIndex(
        (w) => w.id === widgetId
      );
      state[widgetCateg].splice(widgetIndex, 1);
    },
  },
});

export const { updateWidgetVisibility, addWidget, deleteWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
