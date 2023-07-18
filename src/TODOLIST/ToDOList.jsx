import React, { useState } from "react";
import "./ToDolist.css";

const ToDOList = () => {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const AddTODO = () => {
    if (inputvalue.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: inputvalue,
      };
      setTodos([...todos, newTodo]);
    }
  };
  return (
    <>
      <div className="todoContainer">
        <h2>To-Do-List</h2>
        <input
          type="text"
          value={inputvalue}
          name=""
          id=""
          onClick={(e) => setInputValue(e.target.value)}
        />
        <input type="button" value="Add" name="" id="" onClick={AddTODO} />
      </div>
    </>
  );
};

export default ToDOList;
