import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import './card.css'

const ViewCard=()=> {
  const Token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2M2YzI5ZmFmYTVkMTAwMWRlNDkwZjYiLCJpYXQiOjE2Nzk0Mjg5MzAsImV4cCI6MzQ3OTQyODkzMCwidHlwZSI6ImFjY2VzcyJ9.3GZU2CjalRjcOHRhqm-WCvCdWaHoD5Js32VvqO2j2uY"
  const [carddata,setCarddata]=useState([]) 
  useEffect(()=>{
    axios.get('https://interview-api.onrender.com/v1/cards',
    {
      headers:{
      "Authorization":`Bearer ${Token}`
    }
  }
    ).then((res)=>{
      setCarddata(res.data.results)
     }).catch((err)=>{
      console.log(err.message)
     })
  },[])

    return (
      <div id="PaymentForm" className='PaymentForm'>
        {
          carddata.map((card,i)=>{
            return(
             <div key={i} className='cards'>
               <Cards
              cvc="344"
              expiry={card.cardExpiration}
              name={card.cardHolder}
              number={card.cardNumber}
              />
             </div>
            )
          })
        } 
      </div>
    );
  }

  export default ViewCard;