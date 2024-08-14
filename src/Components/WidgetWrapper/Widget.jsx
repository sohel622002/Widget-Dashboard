import React from "react";

export default function Widget({ widgetdetail }) {
  return (
    <div className="bg-white rounded-md aspect-video p-2 sm:p-3 shadow space-y-2">
      <h2 className="font-semibold ">{widgetdetail.title}</h2>
      <p className="text-slate-700 line-clamp-4 text-sm sm:text-base">{widgetdetail.desc}</p>
    </div>
  );
}
