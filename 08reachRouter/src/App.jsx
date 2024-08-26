// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
