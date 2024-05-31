import TodoTable from "./components/TodoTable";
import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  // destructuring an array
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed birds", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Read book", rowAssigned: "User Two" },
    {
      rowNumber: 3,
      rowDescription: "Go for a run",
      rowAssigned: "User One",
    },
    {
      rowNumber: 4,
      rowDescription: "Charge  phone",
      rowAssigned: "Useer Three",
    },
  ]);

  // Adding todos as a variable
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
      // console.log("Our addTodo btn has been clicked!");
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      // rowNumber: todos.length + 1,
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    // todos.push(newTodo);
    // console.log(todos);
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    // filters will be a new set of arrays
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          {/* // when adding addTodo() with paranthesis as a function, it gets */}
          {/* auto rendered which is not what we want. Instead we want // it to be
            a pointer of reference for addTodo instead based on event triggers. */}
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
          >
            {/* //conditional rendering */}
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
