import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Navbar />
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
