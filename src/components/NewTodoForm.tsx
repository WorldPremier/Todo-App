import React, { useState } from "react";

export const NewTodoForm: React.FC<{addTodo:Function}>=(props)=>{
// function NewTodoForm(props: { addTodo: Function }) {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned);
      setAssigned("");
      setDescription("");
    }
  };
  // const descriptionChange = (event) => {
  //   console.log("description", event.target.value);
  //   setDescription(event.target.value);
  // };

  const assignedChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    console.log("assigned", event.target.value);
    setAssigned(event.target.value);
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <div>
            <input
              type="text"
              className="form-control"
              required
              //setting state in concruent to user's input
              onChange={assignedChange}
              // OnChange={(e) => setAssigned(e.target.value)}
              //printing back to the value
              value={assigned}
            ></input>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

