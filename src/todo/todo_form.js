
import React ,{useState} from "react";
// import Todo_list from "./todo_list";

function Todo_form(props) {
const [input,setInput]=useState("")
const change=(event)=>{
setInput(event.target.value)
}

const add_item=()=>{
    setInput(props.addVal(input))
    setInput("")
}

  return (
    <div>
      <div id="todo">
        <div className="todo_box">
          <h1>ToDo List</h1>
          <div className="input_box">
            <input
              type="text"
              placeholder="Enter your list"
              id="input" onChange={change} value={input}
            />
            <button onClick={add_item}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo_form;