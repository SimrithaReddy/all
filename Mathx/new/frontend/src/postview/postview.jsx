import React from 'react';
import CardInstaClone from "./card"
import { useState } from 'react';
import "./style.css";
import { useEffect } from 'react';
import Header from './header';

const  InstaClone =()=> {


  const [userData, updateUserData] = useState([])
  useEffect( () => {
        fetch('https://hola-bz1b.onrender.com/')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
              myJson.reverse()
              updateUserData(myJson)
              console.log(userData)
            });
            
    },[])

  return (
    <div className='page'>
        <Header></Header>
      <hr></hr>
      
      <div className='page-child'>
        {
          userData.map((rec, i) => {
            return (
              <CardInstaClone key={i} rec={rec}  m={parseInt(rec.date.split("/")[0])}></CardInstaClone>
            )
          })
        }
      </div>



    </div>
  );
}

export default InstaClone;