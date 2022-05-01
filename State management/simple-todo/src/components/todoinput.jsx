import { useState } from "react";

export function Todoinput({ fun }) {
    var [todolist, setlist] = useState("")
    return (
        <>
        <input
            type="text"
            placeholder="enter your tasks"
            onChange={(e) => {
                setlist(e.target.value);
            }}>
        </input>
        <button onClick={()=>{fun(todolist)}}>add task</button>
        </>
    )
}