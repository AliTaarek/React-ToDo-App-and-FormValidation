import React , { useState , useEffect } from "react";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [userDataErr, setUserDataErr] = useState({
    emailErr: null,
    passwordErr: null,
  });

  const [isVisible , setIsVisible] = useState(false)

  const handleUserDataChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.id,e.target.value)
  };

    const validateData = async() => {
      console.log(userData.email,userData.password)
      setUserDataErr({ 
        emailErr:
          userData.email.length === 0
            ? "Email is required"
            : !/^[A-Za-z0-9._*%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(userData.email)
            ? "Invalid Email"
            : null,
        passwordErr:
            userData.password.length === 0
            ? "Password is required"
            : userData.password.length < 8
            ? "Password can not be less than 8 characters "
            : /^([A-Za-z0-9\w]+)$/.test(userData.password)
            ? "Password must contain at least one capital character , number and special character."
            : null,
      });
      console.log(userDataErr.emailErr,userDataErr.passwordErr)
    };

  const submitData = async (e) => {
    e.preventDefault();
    await validateData()
    
  };

  useEffect(()=>{
    if (
      !userDataErr.emailErr && 
      !userDataErr.passwordErr
      ){
        console.log("true")
        // alert("Logged in successfully");
        // setUserData({
        //   email:"",
        //   password:""
        // })
      }else{
        console.log("false")
      // alert("wrong data")
    }
  })

  const changeVisibility = () =>{
    setIsVisible(!isVisible)
  }

  return (
    <>      
     <div className="container bg-light border rounded-3 border-dark p-5 flex-column text-start w-50 mt-5">
     <h2 className="text-center">Login</h2>
      <form onSubmit={(e) => submitData(e)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fs-4">
            Email
          </label>
          <input
            type="text"
            className={`form-control ${
              userDataErr.emailErr ? "border-danger" : ""
            }`}
            id="email"
            aria-describedby="userEmail"
            value={userData.email}
            onChange={(e) => handleUserDataChange(e)}
          />
          {userDataErr.emailErr && (
            <div id="userEmail" className="form-text text-danger">
              {userDataErr.emailErr}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fs-4">
            Password
          </label>
          <div className="d-flex align-items-center">
            <input
              type={`${isVisible ? 'text' : 'password' }`}
              className={`w-75 form-control ${
                userDataErr.passwordErr ? "border-danger" : ""
              }`}
              id="password"
              aria-describedby="userPassword"
              value={userData.password}
              onChange={(e) => handleUserDataChange(e)}
            />
            <a className="mx-3" onClick={()=>changeVisibility()}>
              {isVisible ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i> }
            </a>
          </div>          
          {userDataErr.passwordErr && (
            <div id="userPassword" className="form-text text-danger">
              {userDataErr.passwordErr}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-25 mt-3">
          Login
        </button>
      </form>
    </div>
    </>
  );
}
