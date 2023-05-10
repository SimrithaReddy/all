import { useReducer } from "react";
import { DECCREMENT, INCREMENT, RESET } from "./action-file";

const CounterReducer = ()=>{

    const firststate = {count:0}
    const reducer= (state,action)=>{
        switch(action.type){
            case INCREMENT:
                return {...state, count: state.count+1}
            case DECCREMENT:
                return {...state, count: state.count-1}
            case RESET:
                return firststate;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, firststate)

    return(
        <>
        <button onClick={()=>{dispatch({type: INCREMENT})}}>+</button>
        <button onClick={()=>{dispatch({type: DECCREMENT})}}>-</button>        
        <button onClick={()=>{dispatch({type: RESET})}}>RESET</button>        
        <div>{state.count}</div>
        </>
    )

};
export default CounterReducer;