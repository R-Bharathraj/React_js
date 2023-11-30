import React, { useState } from "react";
import "./todo.css";
import Todo_form from "./todo_form";
import Todo_list from "./todo_list";

function Todo() {
  const [val, setVal] = useState([]);

  const addVal = (input) => {
    setVal((preVal) => {
      return [...preVal, input];
    });
  };

  const delItem=(id)=>{
    setVal((preVal) => {
      return preVal.filter((item,index)=>{
         return index !==id;
      });
    });
}
console.log(val);
  return (
    <>
      <Todo_form addVal={addVal} />
      <div>
        <ul id="ul">
          {val.map((item, index) => {
            return (<Todo_list key={index} text={item} delItem={delItem} id={index}/>) 
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
