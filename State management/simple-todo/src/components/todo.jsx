import { useState } from "react";
import { Todoinput } from "./todoinput";
import { Todolist } from "./todolist";

export function Todo() {
    const [todo,settodo]=useState(["learn java","learn backend","learn react"])
    function callback(data)
    {
        settodo([...todo,data])
    }
    return (
        <div>
            <Todoinput fun={callback} />
            {todo.map((e) => {
                return <Todolist skill={e} />
            })}
        </div>
    );
}
