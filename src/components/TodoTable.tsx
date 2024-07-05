import React from "react";
import TodoRowItem from "./TodoRowItem";

export const TodoTable: React.FC<{todos: TodoModel[], deleteTodo: Function}> =(props)=>{
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {/* // Given that we're not passing anything within todo then, props allows */}
        {/* to be called instead. */}
        {/* <TodoRowItem
          rowNumber={props.todos[0].rowNumber}
          rowDescription={props.todos[0].rowDescription}
          rowAssigned={props.todos[0].rowAssigned}
        />
        <TodoRowItem
          rowNumber={props.todos[1].rowNumber}
          rowDescription={props.todos[1].rowDescription}
          rowAssigned={props.todos[1].rowAssigned}
        />
        <TodoRowItem
          rowNumber={props.todos[2].rowNumber}
          rowDescription={props.todos[2].rowDescription}
          rowAssigned={props.todos[2].rowAssigned}
        /> */}
        {props.todos.map(
          (todo: {
            // key: number;
            rowNumber: number;
            rowDescription: string;
            rowAssigned: string;
          }) => (
            <TodoRowItem
              key={todo.rowNumber}
              rowNumber={todo.rowNumber}
              rowDescription={todo.rowDescription}
              rowAssigned={todo.rowAssigned}
              deleteTodo={props.deleteTodo}
            />
          )
        )}
      </tbody>
    </table>
  );
}

// export default TodoTable;


// import React from "react"
// import TodoRowItem  from "./TodoRowItem"

// export const TodoTable: React.FC<{
//     todos: TodoModel[], deleteTodo: Function
// }> = (props) => {
//     return (
//         <table className="table table-hover">
//             <thead>
//                 <tr>
//                     <th scope='col'>#</th>
//                     <th scope='col'>Description</th>
//                     <th scope='col'>Assigned</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {props.todos.map(todo => (
//                     <TodoRowItem
//                         key={todo.rowNumber} 
//                         rowNumber={todo.rowNumber}
//                         rowDescription={todo.rowDescription}
//                         rowAssigned={todo.rowAssigned}
//                         deleteTodo={props.deleteTodo}
//                     />
//                 ))}
//             </tbody>
//         </table>
//     )
// }