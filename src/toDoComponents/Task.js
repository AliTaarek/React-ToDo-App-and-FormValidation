import React, { useState } from "react";

import ToDoList from "./ToDoList";

export default function Task() {
  const [toDoList, setToDoList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isEmpty,setIsEmpty] = useState(false)

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    if(userInput.length > 0){
        if(copy.length === 0)
          copy.push({ id: toDoList.length + 1, task: userInput, complete: false });
        else
          copy.push({ id: toDoList[toDoList.length-1].id + 1, task: userInput, complete: false });

        setToDoList(copy);
        setIsEmpty(false);
    }
    else{
        setIsEmpty(true);
    }
  };

  const handleFilter = (id) => {
    let filtered = toDoList.filter((task) => {
      return task.id !== id;
    });
    setToDoList(filtered);
  };

  return (
    <div className="App row">
      <div className="col-6 offset-3 mt-5 card text-end bg-info p-5 w-50">
        <div className="card-body">
          <h5 className="card-title fs-1 text-white mb-4">To-Do App!</h5>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="task" className="form-label fs-5 text-white mb-4">
                  Add Task to do
                </label>
                <input
                  type="text"
                  className={`form-control border-2 ${isEmpty ? "border-danger" : ""}`}
                  id="task"
                  placeholder="Enter your task here ...."
                  value={userInput}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button className="btn btn-primary px-4" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToDoList
        toDoList={toDoList}
        handleFilter={handleFilter}
        handleToggle={handleToggle}
      />
    </div>
  );
}
