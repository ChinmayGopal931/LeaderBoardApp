// App
import { Outlet } from "react-router-dom";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RouterConfig from "./layout/RouterConfig";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <RouterConfig />
        <Outlet />
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </>
  );
}

export default App;
