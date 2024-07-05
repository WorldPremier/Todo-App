import React from "react";

export const TodoRowItem = (props: {
  // deleteTodo: (arg0: any) => void;
  deleteTodo: Function;
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
}) =>{
  return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  );
}
export default TodoRowItem;
