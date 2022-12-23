import {Gm,Gn} from "./mesage.action"
let initialState={
    message:"hello"
}
let messageReducer=(state=initialState,action)=>{
 switch(action.type){
    case Gm :
        return{message:"Goodmorning"}
     case Gn :
         return{message:"Goodnight"}
     default :
     return state
 }
}
export {messageReducer}
// reducer - is a pure function it take 2 argument 1 -state   2-- action