import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWidget,
  updateWidgetVisibility,
} from "../../Store/features/widgetSlice";
import { dashboardWidgetCategory } from "../../../data";

export default memo(function SidebarTabList({ activeTab, setActiveTab }) {
  const dispatch = useDispatch();
  const widgetData = useSelector((state) => state.widget);

  const deleteWidgetHandler = (widgetCateg, widgetId) => {
    dispatch(
      deleteWidget({
        widgetCateg,
        widgetId,
      })
    );
  };

  const changeWidgetVisibilityHandler = (widgetCateg, widgetId, isVisible) => {
    dispatch(
      updateWidgetVisibility({
        widgetCateg,
        widgetId,
        isVisible,
      })
    );
  };

  return (
    <div>
      <div className="scrollbar_hidden overflow-x-scroll overflow-y-visible">
        <div className="flex border-b-2 border-slate-400">
          {Object.keys(dashboardWidgetCategory).map((widget, index) => (
            <button
              className={`p-2 px-3 cursor-pointer relative font-medium text-base after:absolute after:w-full after:h-[3px] after:bg-blue-600 after:left-0 after:bottom-0 after:transform after:translate-y-full ${
                activeTab == index ? "after:block" : "after:hidden"
              }`}
              onClick={() => setActiveTab(index)}
              key={widget}
            >
              {widget}
            </button>
          ))}
        </div>
      </div>
      <div className="py-3">
        {Object.keys(widgetData).map((widgetCateg, index) => (
          <div
            className={`space-y-3 ${activeTab == index ? "block" : "hidden"}`}
            key={widgetCateg}
          >
            {widgetData[widgetCateg].map((singleWidget) => (
              <label
                className="flex items-center gap-2 justify-between p-2 border rounded-md cursor-pointer"
                key={singleWidget.id}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked={singleWidget.isVisible}
                    onChange={() =>
                      changeWidgetVisibilityHandler(
                        widgetCateg,
                        singleWidget.id,
                        singleWidget.isVisible
                      )
                    }
                  />
                  <p>{singleWidget.title}</p>
                </div>
                <button
                  className="hover:bg-slate-100 p-[2px]"
                  onClick={() =>
                    deleteWidgetHandler(widgetCateg, singleWidget.id)
                  }
                  aria-label={`Delete ${singleWidget.title}`}
                >
                  <IoClose className="text-lg" />
                </button>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});
