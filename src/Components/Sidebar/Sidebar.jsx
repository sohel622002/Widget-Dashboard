import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../Store/features/appConfigSlice";
import { addWidget } from "../../Store/features/widgetSlice";
import { generateRandomId } from "../../Utils/generateRandomId";
import SidebarTabList from "./SidebarTabList";

export default function Sidebar() {
  const [newWidget, setNewWidget] = useState({
    title: "",
    desc: "",
    isVisible: true,
  });

  const appContext = useSelector((state) => state.appConfig);
  const widgetData = useSelector((state) => state.widget);
  const widgetIndex = useSelector((state) => state.appConfig.openWidgetTab);

  const [activeTab, setActiveTab] = useState(widgetIndex);

  const dispatch = useDispatch();
  const closeSidebarHandler = () => dispatch(closeSidebar());

  const addNewWidgetHandler = () => {
    const widget = { ...newWidget, id: generateRandomId() };
    if (widget.title && widget.desc) {
      dispatch(
        addWidget({
          widgetCateg: Object.keys(widgetData)[activeTab],
          newWidget: widget,
        })
      );
      setNewWidget((prevState) => ({ ...prevState, title: "", desc: "" }));
    }
    closeSidebarHandler();
  };

  useEffect(() => {
    setActiveTab(widgetIndex);
  }, [widgetIndex]);

  return (
    <>
      {/* Backdrop */}
      {appContext.isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeSidebarHandler}
        />
      )}

      {/* Sidebar */}
      <section
        className={`fixed h-full top-0 right-0 z-10 bg-white max-w-[600px] w-4/5 flex flex-col transform transition-all duration-300 ${
          appContext.isSidebarOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="bg-blue-600 text-slate-50 p-2 px-3 flex items-center justify-between">
          <span>Add Widget</span>
          <button
            className="hover:bg-blue-500 p-1 rounded-sm"
            onClick={closeSidebarHandler}
          >
            <IoClose className="text-xl" />
          </button>
        </div>

        <div className="p-2 flex-1">
          <p className="text-sm sm:text-base">
            Personalise your dashboard by adding the following widget.
          </p>

          <SidebarTabList activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="mt-2 space-y-2">
            <p>New Widget</p>
            <input
              type="text"
              placeholder="Widget Title"
              className="border p-2 rounded-md w-full"
              value={newWidget.title}
              onChange={(e) =>
                setNewWidget((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            />
            <textarea
              rows={3}
              placeholder="Widget Description"
              className="border p-2 rounded-md w-full"
              value={newWidget.desc}
              onChange={(e) =>
                setNewWidget((prevState) => ({
                  ...prevState,
                  desc: e.target.value,
                }))
              }
            ></textarea>
          </div>
        </div>

        <div className="p-2 flex justify-end gap-3">
          <button
            onClick={closeSidebarHandler}
            className="p-2 px-3 text-sm font-semibold border-2 rounded-md text-blue-600 border-blue-600"
          >
            Cancle
          </button>
          <button
            onClick={addNewWidgetHandler}
            className="p-2 px-3 text-sm font-semibold border-2 rounded-md bg-blue-600 text-slate-50 hover:bg-blue-500"
          >
            Confirm
          </button>
        </div>
      </section>
    </>
  );
}
