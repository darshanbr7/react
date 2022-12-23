 import {GM,GN} from "./main.action"
let initialState={
    message:"hello"
}
let Reducer=( state=initialState,action)=>{
    switch(action.type){
        case GM :
            return {message:"hello goodmorning"}
        case GN:
            return {message :"helllo good night"}
        default :
          return state
    }
 
    

}
export {Reducer}