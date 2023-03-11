import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../store/reducers/todoSlice";

function Todo({ todo, serialNo }) {
  const todos = useSelector((state) => state.todos.todosList);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    let todo = todos.find((todo) => {
      return todo.id === id;
    });

    dispatch(editTodo({ todo: todo }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className="todo card card-body shadow-sm border-0 d-flex flex-row">
      <div className="todo_left_col">
        <span>{serialNo}</span>
      </div>
      <div className="todo_right_col">
        <h3 className="todo_title mb-0">{todo.title}</h3>
        <p className="todo_description mb-0">{todo.description}</p>
        <small className="text-muted">{todo.createdAt}</small>
        <div className="mt-2">
          <button
            className="btn btn-outline-primary btn-sm me-2"
            type="button"
            onClick={() => handleEdit(todo.id)}
          >
            <BiEdit /> Edit
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            type="button"
            onClick={() => handleDelete(todo.id)}
          >
            <BiTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
