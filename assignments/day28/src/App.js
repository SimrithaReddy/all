import React from "react";
import data from "./q";
import "./App.css"

const Day88=()=>{
	const handleClick=(e,ele)=>{
		e.preventDefault();
		alert(`${ele.name} is ${ele.age}`)
	}
	return (
		<>
		{
			data.map((ele,i)=>{
				return(
					<div key={i} className="container">
					<div className="ion"><img src={ele.image} alt="pbxfgc" height="200px" width="250px"></img></div>
					<div className="sub-container">
					<h2>Name: {ele.name}</h2>
					<h3>Email: {ele.email}</h3>
					<button onClick={(e,i)=>handleClick(e,ele)}>Check Age</button>
					</div>
				</div>
				)
			})
		}
		</>
	);
}

export default Day88;
