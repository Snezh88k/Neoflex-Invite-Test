import "./App.css";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const Context = createContext();

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
