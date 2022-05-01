import { Add_Todo } from "./ActionCreater"

export const reducer=(store,action)=>{
    switch(action.type)
    {
        case 'ADD_TODO':
            return{
                ...store,
                todolist:[...store.todolist,action.payload]
            }
    }
}