import Header from "./Components/Header/Header";
import WidgetWrapper from "./Components/WidgetWrapper/WidgetWrapper";

function App() {
  return (
    <section>
      <Header />
      <main className="bg-slate-100 min-h-screen p-2">
        <h2>CNAPP Dashboard</h2>
        <WidgetWrapper />
      </main>
    </section>
  );
}

export default App;
