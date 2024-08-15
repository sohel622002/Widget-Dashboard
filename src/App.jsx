import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import WidgetWrapper from "./Components/WidgetWrapper/WidgetWrapper";
import { useState } from "react";
import DashboardHeader from "./Components/DashboardHeader";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section>
      <Header setSearchTerm={setSearchTerm} />
      <Sidebar />
      <main className="bg-slate-100 min-h-screen p-2">
        <DashboardHeader />
        <WidgetWrapper searchTerm={searchTerm} />
      </main>
    </section>
  );
}

export default App;
