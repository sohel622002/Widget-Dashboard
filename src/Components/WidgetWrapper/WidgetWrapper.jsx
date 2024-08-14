import React from "react";
import Widgets from "./Widgets";
import { useSelector } from "react-redux";

export default function WidgetWrapper({ searchTerm }) {
  const widgetData = useSelector((state) => state.widget);

  const widgetDataToDisplay = searchTerm
    ? Object.keys(widgetData).reduce((acc, key) => {
        const filtered = widgetData[key].filter((widget) =>
          widget.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filtered.length) acc[key] = filtered;
        return acc;
      }, {})
    : widgetData;

  return (
    <section>
      {widgetDataToDisplay &&
        Object.keys(widgetDataToDisplay).map((wid) => (
          <Widgets wid={wid} widgetData={widgetDataToDisplay} key={wid} />
        ))}
      {searchTerm && Object.keys(widgetDataToDisplay).length == 0 && (
        <p>No Widgets to show...</p>
      )}
    </section>
  );
}
