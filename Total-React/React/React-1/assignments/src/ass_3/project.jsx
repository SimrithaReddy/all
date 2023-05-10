import React from "react";
import Card from "./card";

const Para = () =>{
    const data = [{pname:"Kdrama suggestions",
    pdescription:"This app suggests a new drama according to tour Choice and your mood"}]
    return (
        <div>
            <Card cardInfo = {data[0]}></Card>
        </div>
    )
}
export default Para;