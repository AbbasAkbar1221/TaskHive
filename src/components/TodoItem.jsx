import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editTodo,
  removeTodo,
  setCompleteTodo,
  handleColorChange,
} from "../features/todo/todoSlice";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
    }
    setEditId(null);
    setEditText("");
  };
  return (
    <>
      <li
        key={todo.id}
        className="flex flex-wrap justify-between items-center bg-gray-800 text-gray-100 px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        {editId === todo.id ? (
          <div className="flex items-center w-full space-x-2">
            <input
              type="text"
              className="flex-grow bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button
              onClick={() => handleSave(todo.id)}
              className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
            >
              Save
            </button>
            <button
              onClick={() => setEditId(null)}
              className="text-white bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap justify-between items-center w-full">
            <input
              type="checkbox"
              name={todo.id}
              checked={todo.completed}
              onChange={() =>
                dispatch(
                  setCompleteTodo({
                    id: todo.id,
                  })
                )
              }
              className="mr-2 accent-green-600 form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
            />
            <span
              className={`flex-grow mr-12 truncate break-words max-w-full min-w-0  md:whitespace-normal ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <div className="flex items-center mt-2 md:mt-0">
              <select
                name={`color-${todo.id}`}
                id={`color-${todo.id}`}
                value={todo.color}
                onChange={(e) =>
                  dispatch(
                    handleColorChange({ id: todo.id, color: e.target.value })
                  )
                }
                className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option  value="Red" className="text-red-500">
                  Red
                </option>
                <option value="Green" className="text-green-500">
                  Green
                </option>
                <option value="Blue" className="text-blue-500">
                  Blue
                </option>
                <option value="Orange" className="text-orange-500">
                  Orange
                </option>
                <option value="Purple" className="text-purple-500">
                  Purple
                </option>
              </select>
            </div>
            <div className="ml-3 flex space-x-2 mt-2 md:mt-0">
              <button
                onClick={() => handleEdit(todo)}
                className="text-white bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 px-3 py-2 rounded-md hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default TodoItem;

