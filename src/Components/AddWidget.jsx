import React from "react";
import { IoAdd } from "react-icons/io5";

export default function AddWidget() {
  return (
    <div className="bg-white rounded aspect-video p-2 flex items-center justify-center">
      <button className="flex border p-1 rounded items-center gap-1 border-slate-300 text-sm">
        <IoAdd /> Add Widget
      </button>
    </div>
  );
}
