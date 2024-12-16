import React from "react";
import { useDispatch } from "react-redux";
import { setAllCompleted, setAllClear } from "../features/todo/todoSlice";

const Actions = ({
  todos,
  setFilterByStatus,
  setFilterByColor,
  filterByColor,
}) => {
  const dispatch = useDispatch();

  const handleAllCompleted = () => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: true,
    }));

    dispatch(setAllCompleted(updatedTodos));
  };

  const handleAllClear = () => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: false,
    }));

    dispatch(setAllClear(updatedTodos));
  };

  const handleFilterChange = (status) => {
    setFilterByStatus(status);
  };
  const handleFilterColor = (color) => {
    setFilterByColor((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  return (
    <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-4 gap-4 items-start">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-center">Actions</h2>
          <button
            onClick={handleAllCompleted}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
          >
            Mark All Completed
          </button>
          <button
            onClick={handleAllClear}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
          >
            Clear Completed
          </button>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-bold mb-1">Remaining Todos</h2>
          <p className="text-gray-300">{todos.filter((todo)=> !todo.completed).length} item left</p>
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-bold mb-1">Filter by Status</h2>
          <ul className="space-y-1">
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  defaultChecked
                  onChange={() => handleFilterChange("All")}
                  className="form-radio text-blue-500"
                />
                <span>All</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  onChange={() => handleFilterChange("Active")}
                  className="form-radio text-blue-500"
                />
                <span>Active</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  onChange={() => handleFilterChange("Completed")}
                  className="form-radio text-blue-500"
                />
                <span>Completed</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold mb-1">Filter by Color</h2>
          <ul className="space-y-1">
            {["Green", "Blue", "Orange", "Purple", "Red"].map((color)=>(
                <li key={color}>
                    <label className="flex items-center space-x-2">
                    <input
                  type="checkbox"
                  onChange={() => handleFilterColor(color)}
                  checked={filterByColor.includes(color)}
                  className={`form-checkbox text-${color.toLowerCase}-500`}
                />
                <span>{color}</span>
                    </label>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Actions;
