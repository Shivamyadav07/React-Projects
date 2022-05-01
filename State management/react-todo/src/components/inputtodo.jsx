import { useState } from "react"

export function Todoinput({updatelist}) {
    const [task, addtask] = useState("")
    return (
        <>
            <input placeholder="enter task" onChange={(e) => { addtask(e.target.value) }}></input>
            <button onClick={() => { updatelist(task) }}>add task</button>
        </>
    );
}