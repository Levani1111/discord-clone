import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
  const signIn = () => {};

  return (
    <div className="login">
      <h2>I am the login</h2>

      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sing In</Button>
    </div>
  );
}

export default Login;
