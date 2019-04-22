import React from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.description} />
      <p style={{color: props.item.description ? "black" : "red"}}>{props.item.text}</p>
      <p>{props.item.description}</p>
    </div>
  )
}

export default ToDoItem;