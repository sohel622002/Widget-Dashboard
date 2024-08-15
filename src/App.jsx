import { useDispatch } from "react-redux";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import WidgetWrapper from "./Components/WidgetWrapper/WidgetWrapper";
import {
  IoAddOutline,
  IoEllipsisVertical,
  IoTime,
  IoChevronDown,
} from "react-icons/io5";
import { openSidebar, updateOpenWidgetTab } from "./Store/features/appSlice";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const openWidgetSidebar = () => {
    dispatch(updateOpenWidgetTab(0));
    dispatch(openSidebar());
  };

  return (
    <section>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Sidebar />
      <main className="bg-slate-100 min-h-screen p-2">
        <div className="flex items-center justify-between">
          <h2 className="text:lg sm:text-xl font-semibold">CNAPP Dashboard</h2>
          <div className="flex gap-2">
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
              <span className="text-sm flex items-center gap-1 ps-2">
                Last 2 Days <IoChevronDown />
              </span>
            </button>
          </div>
        </div>
        <WidgetWrapper searchTerm={searchTerm} />
      </main>
    </section>
  );
}

export default App;
