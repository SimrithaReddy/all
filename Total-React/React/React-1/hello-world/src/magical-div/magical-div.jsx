import { useState } from "react"
const Magicaldiv = ()=> {
    const [magicalColor, setMagicalColor] = useState(true)
    return (
        <div>
            <div style={{color: `${magicalColor ? 'red' : 'green'}`}}>I am magical div</div>
            <button onClick={()=>{setMagicalColor(!magicalColor)}}>Change Color</button>
        </div>
    )

}
export default Magicaldiv;