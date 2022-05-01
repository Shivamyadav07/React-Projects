import { ADD_TODO } from "./ActionType";

export const Add_Todo=(title)=>{
    return{
        type:ADD_TODO,
        payload:{
            title:title,
            status:false
        }
    }
}