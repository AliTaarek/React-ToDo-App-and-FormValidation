import React , { useState } from "react";

export default function Register() {
  const [userData, setUserData] = useState({
    name:"",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [userDataErr, setUserDataErr] = useState({
    nameErr:null,
    emailErr: null,
    userNameErr:null,
    passwordErr: null,
    confirmPasswordErr: null,
  });

  const handleUserDataChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.id,e.target.value)
    // if(e.target.id === "email"){
    //   setUserDataErr({
    //     ...userDataErr,
    //     emailErr:
    //       userData.email.length === 0
    //         ? "Email is required"
    //         : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)
    //         ? "Invalid Email"
    //         : null
    //   })
    // }else if(e.target.id === "password"){
    //   setUserDataErr({
    //     ...userDataErr,
    //     passwordErr:
    //       userData.password.length === 0
    //       ? "Password is required"
    //       : userData.password.length < 8
    //       ? "Password can not be less than 8 characters "
    //       : /^([A-Za-z0-9\w]+)$/.test(userData.password)
    //       ? "Password must contain at least one capital character , number and special character. "
    //       : null,
    //   })
    // }
  };

    const validateData = () => {
      console.log(userData.email,userData.password)
      setUserDataErr({
        nameErr:
            userData.name.length === 0
            ? "Email is required"
            : null,
        emailErr:
          userData.email.length === 0
            ? "Email is required"
            : !/^[A-Za-z0-9._*%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(userData.email)
            ? "Invalid Email"
            : null,
        userNameErr:
            userData.userName.length === 0
            ? "User Name is required"
            : !/^([A-Za-z0-9]+)\S*$/.test(userData.password)
            ? "User Name can not contain spaces or special characters"
            : null,
        passwordErr:
            userData.password.length === 0
            ? "Password is required"
            : userData.password.length < 8
            ? "Password can not be less than 8 characters "
            : /^([A-Za-z0-9\w]+)$/.test(userData.password)
            ? "Password must contain at least one capital character , number and special character."
            : null,
        confirmPasswordErr:
            userData.confirmPassword.length === 0
            ? "confirm password is required"
            : userData.confirmPassword !== userData.password
            ? "confirm password must match the previous password."
            : null,
      });
      console.log(userData.email, userData.password)
      console.log(userDataErr.emailErr , userDataErr.passwordErr)
    };

  const submitData = (e) => {
    e.preventDefault();
    validateData();
    if (
      !userDataErr.nameErr &&
      !userDataErr.emailErr && 
      !userDataErr.userNameErr && 
      !userDataErr.passwordErr && 
      !userDataErr.confirmPasswordErr
      ){
        alert("Logged iin successfully");
        setUserData({
            name:"",
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
        })
      }else{
      alert("wrong data")
    }
  };

  return (
    <>
      
     <div className="container bg-light border rounded-3 border-dark p-5 flex-column text-start w-50 mt-5">
     <h2 className="text-center">Register</h2>
      <form onSubmit={(e) => submitData(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-4">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${
              userDataErr.nameErr ? "border-danger" : ""
            }`}
            id="name"
            aria-describedby="nameErr"
            value={userData.name}
            onChange={(e) => handleUserDataChange(e)}
          />
          {userDataErr.nameErr && (
            <div id="nameErr" className="form-text text-danger">
              {userDataErr.nameErr}
            </div>
          )}
        </div>
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
          <label htmlFor="userName" className="form-label fs-4">
            User Name
          </label>
          <input
            type="text"
            className={`form-control ${
              userDataErr.userNameErr ? "border-danger" : ""
            }`}
            id="userName"
            aria-describedby="userNameErr"
            value={userData.userName}
            onChange={(e) => handleUserDataChange(e)}
          />
          {userDataErr.userNameErr && (
            <div id="userNameErr" className="form-text text-danger">
              {userDataErr.userNameErr}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fs-4">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              userDataErr.passwordErr ? "border-danger" : ""
            }`}
            id="password"
            aria-describedby="userPassword"
            value={userData.password}
            onChange={(e) => handleUserDataChange(e)}
          />
          
          {userDataErr.passwordErr && (
            <div id="userPassword" className="form-text text-danger">
              {userDataErr.passwordErr}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label fs-4">
           Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${
              userDataErr.confirmPasswordErr ? "border-danger" : ""
            }`}
            id="confirmPassword"
            aria-describedby="userConfirmPassword"
            value={userData.confirmPassword}
            onChange={(e) => handleUserDataChange(e)}
          />
          
          {userDataErr.confirmPasswordErr && (
            <div id="userConfirmPassword" className="form-text text-danger">
              {userDataErr.confirmPasswordErr}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-success w-25 mt-3">
          Register
        </button>
      </form>
    </div>
    </>
  );
}
