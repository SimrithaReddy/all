import { useEffect, useState } from "react"
import CardFetch from "./card"


const FetchMock = () => {
  
  let [arr, setArr] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3004/user").then((res)=>{
      return res.json()
    }).then((userdata) => {
      setArr(userdata)
    })
  }, [])

  return (
    <div>
      <h2>Trying to do it using Fetch</h2>
      Hy, I am there.
      {
        arr.map((data, i) => {
          return (
            <div key={i}>
              <CardFetch data={data}></CardFetch>
            </div>
          )
        })
      }
    </div>
  )
}
export default FetchMock;

