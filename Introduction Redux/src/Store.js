import {legacy_createStore as createStore} from "redux"
import { initialState } from "./InitialState"
import { reducer } from "./Reducer"

const store=createStore(initialState,reducer)
console.log(store)