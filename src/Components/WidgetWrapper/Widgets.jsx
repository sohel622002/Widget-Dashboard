import React from "react";
import Widget from "./Widget";
import AddWidget from "../AddWidget";

export default function Widgets({ widgetData, wid }) {
  return (
    <div className="p-2 sm:p-3 mt-2">
      <h2 className="font-semibold text-lg">{wid}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
        {widgetData[wid].map((singleWidget) => {
          if (!singleWidget.isVisible) return;
          return <Widget widgetdetail={singleWidget} key={singleWidget.id} />;
        })}
        <AddWidget wid={wid} />
      </div>
    </div>
  );
}
