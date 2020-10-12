import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM  naming convention
    <div className="app">
      <h1>Discord clone</h1>
      <Sidebar />
    </div>
  );
}

export default App;
