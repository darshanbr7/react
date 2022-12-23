import { combineReducers } from "redux";
import {messageReducer} from "./redux1/message.reducer"

let rootReducer= combineReducers({message:messageReducer})
export {rootReducer}