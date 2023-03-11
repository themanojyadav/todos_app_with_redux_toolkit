import React from "react";
import { BiAbacus } from "react-icons/bi";
import { useSelector } from "react-redux";

function Navbar() {
  const todos = useSelector((state) => state.todos.todosList);
  return (
    <nav className="navbar py-3 bg-primary shadow">
      <div className="container">
        <a href="/" className="navbar-brand text-white fw-bold">
          <BiAbacus /> TODOS APP
        </a>
        <div>
          <span className="text-white">Todo Count: </span>{" "}
          <span className="badge bg-dark">{todos.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
