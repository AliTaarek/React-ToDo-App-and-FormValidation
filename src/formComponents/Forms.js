import React , { useState } from "react";

import Login from './Login'
import Register from './Register'



function Form() {
  const [toggle , setToggle] = useState(true)
  return (
    <div className="App">
       {toggle ? <Login /> : <Register />}
       
       <button className="btn btn-danger m-5 px-5" onClick={()=> setToggle(!toggle)}>Switch</button>
    </div>
  );
}

export default Form;