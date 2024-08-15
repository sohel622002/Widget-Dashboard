import React from "react";
import { useDispatch } from "react-redux";
import {
  openSidebar,
  updateOpenWidgetTab,
} from "../Store/features/appConfigSlice";
import {
  IoAddOutline,
  IoEllipsisVertical,
  IoTime,
  IoChevronDown,
} from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";

export default function DashboardHeader() {
  const dispatch = useDispatch();

  const openWidgetSidebar = () => {
    dispatch(updateOpenWidgetTab(0));
    dispatch(openSidebar());
  };

  return (
    <div className="flex sm:items-center justify-between gap-2 flex-col sm:flex-row">
      <h2 className="text-lg sm:text-xl font-semibold">CNAPP Dashboard</h2>
      <div className="flex gap-1 sm:gap-2 justify-evenly sm:justify-normal">
        <button
          className="flex items-center gap-2 p-2 px-3 bg-white text-xs sm:text-sm rounded-sm font-semibold text-slate-700 hover:bg-slate-50 border-slate-300 border"
          onClick={openWidgetSidebar}
        >
          Add Widget <IoAddOutline className="text-lg" />
        </button>
        <button className="bg-white p-1 rounded-sm border-slate-300 border">
          <BiRefresh className="text-xl rotate-90" />
        </button>
        <button className="bg-white p-1 rounded-sm border-slate-300 border">
          <IoEllipsisVertical className="text-lg" />
        </button>
        <button className="flex items-center bg-white px-2 border-slate-300 border rounded-sm">
          <span className="text-lg pr-2 border-e border-slate-800">
            <IoTime />
          </span>
          <span className="flex items-center gap-1 ps-2 sm:text-base text-xs">
            Last 2 Days <IoChevronDown />
          </span>
        </button>
      </div>
    </div>
  );
}
