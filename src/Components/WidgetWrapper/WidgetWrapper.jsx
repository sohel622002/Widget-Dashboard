import React from "react";
import Widget from "./Widget";
import AddWidget from "../AddWidget";

export default function WidgetWrapper() {
  return (
    <div className="p-3 bg-slate-200 mt-2 rounded">
      <h2>CSPM Executive Dashboard</h2>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <Widget />
        <Widget />
        <Widget />
        <AddWidget />
      </div>
    </div>
  );
}
