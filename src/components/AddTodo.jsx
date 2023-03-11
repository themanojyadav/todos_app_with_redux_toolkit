import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { BiEdit, BiSave } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../store/reducers/todoSlice";

function AddTodo() {
  // Fetch todos details from store
  const todos = useSelector((state) => state.todos.todosList);
  const editTodo = useSelector((state) => state.todos.editTodo);
  const editTodoDetails = useSelector((state) => state.todos.editTodoDetails);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [processing, setProcessing] = useState(true);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    setProcessing(true);
    if (title == "") {
      setTitleError("Title field is required");
    }
    if (description == "") {
      setDescriptionError("Description field is required");
    }

    if (title && description) {
      let addTodoFlag = true;
      if (editTodo === true) {
        // Check for the todo
        let todo = todos.find((todo) => todo.id === editTodoDetails.id);
        if (!todo) {
          addTodoFlag = true;
        } else {
          dispatch(
            updateTodo({
              todo: {
                title: title,
                description: description,
              },
              id: editTodoDetails.id,
            })
          );
        }
      }

      if (addTodoFlag === true) {
        dispatch(
          addTodo({
            id: todos.length + 1,
            title: title,
            description: description,
            createdAt: format(new Date(), "dd-MM-yyyy hh:ii:ss"),
          })
        );
      }

      setTitle("");
      setDescription("");
    }
  };

  useEffect(() => {
    if (title !== "") {
      setTitleError("");
    }
    if (description !== "") {
      setDescriptionError("");
    }
    if (title === "" || description === "") {
      setProcessing(true);
    }
    if (title && description) {
      setProcessing(false);
    }
  }, [title, description]);

  // If edit todo details is true, then set the form state
  useEffect(() => {
    if (editTodo === true) {
      setTitle(editTodoDetails.title);
      setDescription(editTodoDetails.description);
    }
  }, [editTodo]);

  return (
    <div className="my-3 container card card-body border-0 shadow-sm">
      <form action="" onSubmit={handleTodoSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            className="form-control"
            onChange={handleTitle}
          />
          {titleError && <span className="text-danger">{titleError}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label fw-bold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={description}
            className="form-control"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          {descriptionError && (
            <span className="text-danger">{descriptionError}</span>
          )}
        </div>
        <div className="mb-3 text-center">
          <button
            className="btn btn-primary"
            disabled={processing === true ? true : false}
          >
            {editTodo == true ? (
              <span>
                <BiEdit /> Update
              </span>
            ) : (
              <span>
                <BiSave /> Save
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
