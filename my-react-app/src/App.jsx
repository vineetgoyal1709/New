// import React from "react";
// import Home from './home.jsx'

// const App=(a)=> {
//   console.log(a,"aaaaaa");
//   // let user='rahul'
//   return (
// <div>
//   ngdngkgjns
// <Home/    b={a.name}>
// </div>
//   )
// }
// export default App
// import React from "react";
// import Home from './home.jsx';

// const App = (a) => {
//   console.log(a, "aaaaaa");
//   // let user='rahul'
//   return (
//     <div>
//       ngdngkgjns
//       <Home b={a.data} />
//     </div>
//   );
// };

// export default App;

// import React, {useState} from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   function fun1(){
//     SetCount(++count)
//   }
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={fun1}>add</button>
//     </div>
//   )
// }

// export default App

// import React, {useState} from 'react'
// import './App.css'

// const App = () => {
//   let [count,SetCount]=useState("bhopal")
//   function fun1(){
//     SetCount("indore")
//   }
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={fun1}>City</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  let [time,SetTime]=useState()
  setInterval(()=>{
    let date=new Date().toLocaleDateString()
    
    })
  return (
    <div>
      <p>{time}</p>
    </div>
  )
}

export default App



