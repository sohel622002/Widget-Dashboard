import { useEffect, useState } from "react";

export function useWidgetData() {
  const [widgetData, setWidgetData] = useState();

  const getWidgetData = async () => {
    try {
      const data = await fetch("http://localhost:3000/CNAPADash");
      const response = await data.json();
      console.log(response);
      setWidgetData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWidgetData();
  }, []);

  return widgetData;
}
