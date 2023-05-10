var card = document.querySelectorAll('.card');



[...card].forEach((card)=>{
      console.log(card)
      let a=card.querySelector('.btn')
      console.log(a)
      a.addEventListener('click',function(){
       card.style.display="none"
      
    //    console.log(card2)
    //   let card2btn= card2.querySelector('.button')
    //   console.log(card2btn)
    var card2=document.querySelectorAll('.remove');
    [...card2].forEach((card)=>{
          card.style.display="block"
          
        let card2btn= card.querySelector('.button');
        console.log(card2btn)
        card2btn.addEventListener('click',function(){
            card.style.display="none";
            var card3=document.querySelectorAll('.success');
            [...card3].forEach((card)=>{
                card.style.display="block"
               setTimeout(() => {
                  card.style.display="none"
                  let card4=document.querySelectorAll('.invoice');
            [...card4].forEach((card)=>{
                card.style.display="block"
            })
               },2000);
            })
            

                
            
        })
       
    
     })

     

      
      })
    
      
    

  });
//   var card2=document.querySelectorAll('.remove');
//  [...card2].forEach((card)=>{
//     let card2btn= card2.querySelector('.button');
//     console.log(card2btn)
//  })

