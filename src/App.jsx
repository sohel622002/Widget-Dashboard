import { useDispatch } from "react-redux";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import WidgetWrapper from "./Components/WidgetWrapper/WidgetWrapper";
import { IoAddOutline } from "react-icons/io5";
import { openSidebar, updateOpenWidgetTab } from "./Store/features/appSlice";
import { useState } from "react";

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
          <div>
            <button
              className="flex items-center gap-2 p-2 px-3 bg-white text-xs sm:text-sm rounded-sm font-semibold text-slate-700 hover:bg-slate-50"
              onClick={openWidgetSidebar}
            >
              Add Widget <IoAddOutline className="text-lg" />
            </button>
          </div>
        </div>
        <WidgetWrapper searchTerm={searchTerm} />
      </main>
    </section>
  );
}

export default App;
