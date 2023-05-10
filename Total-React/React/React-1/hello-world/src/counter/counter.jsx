import { useState } from "react"

const Counter = () =>{

    const [count,setCount] = useState(0)
    const [countValue, setCountValue] = useState(0)
    const handleIncrement = (defaultValue)=>{
        if(defaultValue){
            setCount(count+defaultValue)
        }else{
            setCount(count+1)
        }
    }

    const handleDecrement = (defaultValue)=>{
        if(count>0){
            if(defaultValue){
                setCount(count-defaultValue)
            }else{
                setCount(count-1)
            }
        }
    }

    const handleChange = (e)=>{
        setCountValue(parseInt(e.target.value))
    }

    return(
        <div>
            <button onClick={()=>handleIncrement()}>+</button>
            <div id="count">{count}</div>
            <button onClick={handleDecrement}>-</button>
            <section>
            <input onChange={handleChange} type="number" value={countValue}/>
            <button onClick={()=>{handleIncrement(countValue)}}>Increment By</button>
            <button onClick={()=>{handleDecrement(countValue)}}>Decrement By</button>
            </section>
        </div>
    )
}
// onClick={()=>{handleDecrement(countValue)}}
export default Counter;