import React from "react";
import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getWidgetIndex } from "../Utils/getWidgetIndex";
import { openSidebar, updateOpenWidgetTab } from "../Store/features/appConfigSlice";

export default function AddWidget({ wid }) {
  const widgetTabTitle = wid.split(" ")[0];

  const widgetData = useSelector((state) => state.widget);
  const dispatch = useDispatch();

  const openWidgetSidebar = () => {
    const widgetIndex = getWidgetIndex(widgetData, widgetTabTitle);
    dispatch(updateOpenWidgetTab(widgetIndex));
    dispatch(openSidebar());
  };

  return (
    <div className="bg-white rounded-md aspect-video p-2 flex items-center justify-center shadow">
      <button
        className="flex border p-2 rounded items-center gap-1 border-slate-300 text-sm font-semibold"
        onClick={openWidgetSidebar}
      >
        <IoAdd /> Add Widget
      </button>
    </div>
  );
}
