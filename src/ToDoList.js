import React from "react";

const ToDoList = (props) => {

  return (
    <>
      <div className="todo-style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            return props.onSelect(props.id)
          }}
        />
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoList;