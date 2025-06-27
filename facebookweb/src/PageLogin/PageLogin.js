import React from "react"
import { Routes, Route, useNavigate } from "react-router-dom";
import "./PageLogin.css";




function PageLogin(){
    const navigate = useNavigate(); 
    const handleLogin = () => {
    // Optionally validate login credentials here
    navigate('/Areahead'); 
  };
    return(
    <div className="Login">
        <div className="facebook">
            <div className="Logo">
                facebook
            </div>
            <div className="Title">
                Facebooks helps you connect and share 
                <br></br>with people in your life.
            </div>
        </div>
        <div className="Logininfo">
            <div className="Logindata">
                <input type="email" placeholder="Email address or phone number"></input>
                <br></br>
                <input type="Password" placeholder="Password"></input>
                <button className="button1" onClick={handleLogin }>Login</button>
            </div>
            <div className="forgetpass">
                <a href="login">Forgotten Password?</a>
                <br></br>
                <div className="line"></div>
                <br></br>
                <button className="button2">Create New Account</button>
            </div>
            <p></p>
            <br></br>
            <div className="Createpg">
                <a href="createpg"><b>Create a Page</b></a> for a celebrity, brand or business.
            </div>
        </div>
    </div>
    )

}
export default PageLogin