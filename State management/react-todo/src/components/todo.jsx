import { useState } from "react";
import { Todoinput } from "./inputtodo";
import { Todoitem } from "./todoitems";
import { nanoid } from "nanoid";
import { Done } from "./donetodo";

export function Todo()
{
    const [todolist,setlist]=useState([])

    function updatelist(data)
    {
        const payload={
            title:data,
            status:false,
            id:nanoid(1)
        }
        setlist([...todolist,payload])
    }

    function handlestatus(id)
    {
        setlist([...todolist.map(e=>
            
            (e.id===id?{...e,status:!e.status}:e)),
        ]);
    }

    return(
        <div>
        <Todoinput updatelist={updatelist} />
        {
            todolist.map(e=>{
                return (<Todoitem item={e} handlestatus={handlestatus} />)
            })
        }
       <Done data={todolist} /> 
        </div>
    )
}