import React, { useState } from "react";
import "../Styles/Login.css";
import Background from "../UI/Background";
import Loading from "./Loading";

function Login(props) {
  const [signup, setSignup] = useState(props.signUp ? "1" : "0");
  const roleStyle = {
    color: "#944cc4",
    fontWeight: "bold",
  };
  const handleSignupChange = (e) => {
    setSignup(e.target.value);
  };
  return (
    <div key={props.loginDetails.role}>
      {props.loginDetails.openLogin && (
        <div>
          <Background clicked={props.closeLoginHandler} />
          <div className="LoginBox">
            {props.loading && <Loading />}
            <span className="loginCats">
              <div>
                <button
                  style={props.loginDetails.role === "0" ? roleStyle : {}}
                  className="loginCat"
                  name="role"
                  value="0"
                  onClick={props.changeDetail}
                >
                  For Learner
                </button>
                <button
                  type="button"
                  style={props.loginDetails.role === "1" ? roleStyle : {}}
                  className="loginCat"
                  name="role"
                  value="1"
                  onClick={props.changeDetail}
                >
                  For IITan
                </button>
              </div>
              <div>
                <button
                  className="btn"
                  value="0"
                  onClick={handleSignupChange}
                  style={
                    signup === "0"
                      ? {
                          backgroundColor: "#944cc4",
                          color: "white",
                        }
                      : {}
                  }
                >
                  LOG IN
                </button>
                <button
                  className="btn"
                  value="1"
                  onClick={handleSignupChange}
                  style={
                    signup === "1"
                      ? {
                          backgroundColor: "#944cc4",
                          color: "white",
                          marginLeft: "1rem",
                        }
                      : { marginLeft: "1rem" }
                  }
                >
                  SIGN UP
                </button>
              </div>
            </span>
            {signup === "0" ? (
              <form className="loginForm" onSubmit={props.submit}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={props.loginDetails.email}
                  onChange={props.changeDetail}
                  autoFocus
                  autoComplete="off"
                  required
                />
                <br />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={props.loginDetails.password}
                  onChange={props.changeDetail}
                  autoComplete="off"
                  required
                />
                <br />
                <button
                  className="btn loginButton bgColor"
                  type="submit"
                  onClick={props.submitLogin}
                >
                  Login
                </button>
              </form>
            ) : (
              <form className="loginForm" onSubmit={props.submit}>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={props.loginDetails.name}
                  onChange={props.changeDetail}
                  autoFocus
                  autoComplete="off"
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={props.loginDetails.email}
                  onChange={props.changeDetail}
                  autoComplete="off"
                  required
                />
                <br />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={props.loginDetails.password}
                  onChange={props.changeDetail}
                  autoComplete="off"
                  required
                />
                <br />
                <button
                  className="btn loginButton bgColor"
                  type="submit"
                  onClick={props.submitSignup}
                >
                  Signup
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
