import React from "react";
import { Link } from "react-router-dom";

const RouteContent = ()=>{

    let Sample = [{key:"Example1",path:"/welcome"}, {key:"Example2",path:"/content"}]

    return(
        <>
        {
            Sample.map((ele,id)=>{
                return(
                    <li id={`${ele}-${id}`}>
                        <Link to= {ele.path}>{ele.key}</Link>
                    </li>
                )
            })
        }
        </>
    )
}

export default RouteContent;