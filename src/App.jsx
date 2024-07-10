import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <nav>
        <Navigation aria-label="Main navigation" />
      </nav>
      <main>
        <AppRoutes role="region" aria-label="Main content" />
      </main>
    </>
  );
}

export default App;
