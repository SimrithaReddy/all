import { useRef, useEffect } from "react";

const Reference = ()=>{

    const testRef = useRef(null);
    console.log(testRef);
    
    useEffect(()=>{
        console.log(testRef);
    },[])

    return(
        <>
        <div ref={testRef}>I am Reference Div</div>
        </>
    )
}
export default Reference;