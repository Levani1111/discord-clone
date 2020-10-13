import React from "react";
import { Counter } from "./features/Counter";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM  naming convention
    <div className="app">
      <Sidebar />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
