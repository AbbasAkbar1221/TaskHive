import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import Actions from "./Actions";

function Todos() {
  const todos = useSelector((state) => state.todosKey.todos);
  const [filterByStatus, setFilterByStatus] = useState("All");
  const [filterByColor, setFilterByColor] = useState([]);

  const filterTodos = todos.filter((todo) => {
    // if (filterByStatus === "All") return true;
    // if (filterByStatus === "Active") return !todo.completed;
    // if (filterByStatus === "Completed") return todo.completed;
    // return true;
    const matchStatus = filterByStatus==="All" || (filterByStatus==="Active" && !todo.completed) || (filterByStatus==="Completed" && todo.completed)
    const matchColor = filterByColor.length===0 ||  filterByColor.includes(todo.color)
    return matchStatus && matchColor
  });

  useEffect(() => {
    console.log("Filter by Color:", filterByColor);
  }, [filterByColor]);
  

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <div className="bg-gray-900 md:p-10 rounded-lg shadow-lg w-full mx-auto mt-10 p-6 flex-grow">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Your Todos
          </h2>
          {/* {todos.length > 0 ? ( */}
          {filterTodos.length > 0 ? (
            <ul className="space-y-6">
              {filterTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">No todos available</p>
          )}
        </div>

        <div className="bg-gray-800 mt-8 py-4 px-6 rounded-lg shadow-md w-full">
          <hr className="border-gray-600 mb-4" />
          <Actions todos={filterTodos} setFilterByStatus={setFilterByStatus} setFilterByColor={setFilterByColor} filterByColor={filterByColor}/>
        </div>
      </div>
    </>
  );
}

export default Todos;
