import React from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox"/>
      <p>{props.item.text}</p>
      <p>{props.item.description}</p>
    </div>
  )
}

export default ToDoItem;