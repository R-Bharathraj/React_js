import React from "react";

function Todo_list(props){
  
    return(
        <>
        <div id="list">
        <div className="list_box">
            <p>{props.text}</p>
            {/* <button>Mark as done</button> */}
            <button onClick={()=>props.delItem(props.id)} className="del_but">Delete</button>
        </div>
        </div>
        </>
    )
}

export default Todo_list;