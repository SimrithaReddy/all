import React, { Children } from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';
import { createContext } from "react";

export const UserContext = createContext();

const App = ({Children}) => {

  return (
    <div id='name'>  
     <UserContext.Provider value={{name:"10XAcademy", age:3}}>
      {Children}
      <UserProfile></UserProfile>
     </UserContext.Provider>
    </div>
  )
}

export default App;
















// const App = () => {

//   return (
//     <div id="main">

//         <UserProfile />

//     </div>
//   )
// }


// export default App;
// export { UserContext }
