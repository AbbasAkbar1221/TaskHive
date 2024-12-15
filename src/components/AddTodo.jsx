import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));

    setInput("");
  };


  return (
    <>
    <form
      onSubmit={addTodoHandler}
      className="flex items-center justify-center mb-4 space-x-3"
    >
      <input
        type="text"
        className="w-2/3 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 py-2 px-4 outline-none transition duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={
          "bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition duration-200"
        }
      >
        Add Todo
      </button>
    </form>

    </>
  );
}
export default AddTodo;
