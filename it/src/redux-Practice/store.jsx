import {createStore} from "redux"
import {Reducer} from "./main.reducer"
import {composeWithDevTools} from "redux-devtools-extension"
let Store=createStore(Reducer, composeWithDevTools)
export {Store}