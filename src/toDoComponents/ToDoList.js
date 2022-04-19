import React from "react";


export default function ToDoList({ toDoList, handleToggle, handleFilter }) {

  return (
    <div className="container">
        <div className="card mt-5 col-6 offset-3 bg-warning" >
            <div className="card-header fs-3 bg-primary">To-Do List</div>
            <h5 className="card-title fs-4 my-4 ">Let's get some work done!</h5>
            <ul className="list-group list-group-flush bg-warning">
                {toDoList.map((todo) => {
                    return (
                        <li key={todo.id} className="list-group-item p-3 border border-dark rounded-3 m-3 d-flex justify-content-between">
                            <div className={`overflow-hidden text-start font-monospace my-auto ${todo.complete ? "text-decoration-line-through" : ""}`}>{todo.task}</div>
                            <div className="d-flex align-items-center">
                                 <button className={`btn btn-${todo.complete ? 'success' : 'secondary'} mx-2`} onClick={()=>handleToggle(todo.id)}>{todo.complete ? "Completed" : "UnFinished"}</button>
                                <button className="btn btn-danger" onClick={()=>handleFilter(todo.id)}>Delete</button>
                            </div> 
                        </li>
                        );
                    })}
            </ul>
        </div>
    </div>
  );
}
