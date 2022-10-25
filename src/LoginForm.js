import React, { useState } from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./CSS/loginformStyle.css";

function LoginForm(){
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("")

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleUsername = () => {}

  const handlePasscode = () => {}

  const handleSubmit = () => {}

  return (
    <div className = "form-container">
      <div className="form-title">Login Here</div>
      <form
       className = "registor-form"
       onSubmit = {()=>handleSubmit()}>
         {submitted&&valid? <div className="success-message">Success! Thsnk you for your registration</div> : null}
         <div>
          <input
            className = "form-field"
            onChange = {()=>setUsername()}
            value = {username}
            placeholder = "User Name"
            name = "username"
          />
          {submitted && !username? <span>Please enter a first name!</span> : null}
         </div>
         <div>
          <input
            className = "form-field"
            type = "password"
            onChange = {()=>setPasscode()}
            value = {passcode}
            placeholder = "Pass Code"
            name = "passcode"
          />
          {submitted && !passcode? <span>Please enter a last name!</span> : null}
         </div>
        <button
         className = "form-field"
         type = "submit"
         onClick = {()=>handleSubmit()}>Login</button>
       </form>
    </div>
  );
}

export default LoginForm;