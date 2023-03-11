import React, { useId } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todos() {
  let todos = useSelector((state) => state.todos.todosList);

  return (
    <div className="todos_wrapper py-3">
      <div className="container">
        <div>
          {todos.length < 1 && (
            <div className="shadow-sm border-0 alert alert-info">
              No todo is available
            </div>
          )}
          {todos.length > 0 &&
            todos.map((todo, index) => {
              return <Todo serialNo={index + 1} key={index} todo={todo} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Todos;
