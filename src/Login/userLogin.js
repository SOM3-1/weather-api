import React, { useState } from "react";
import { database, errors } from "./userDatabase";
import classes from "./logindata.module.css";
import { useDispatch } from "react-redux";
import { sliceReducers } from "../slice-store/stateSlice";
import { useRef, useEffect } from "react";

const UserLogin = () => {
  const dispatch = useDispatch();

  // React States
  const [errorMessages, setErrorMessages] = useState({});

  const [uName, setuName] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRemebrMe] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [uName]);

  const handleSubmit = (event) => {
    event.preventDefault();

    //var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uName);

    // Compare user info
    if (userData) {
      if (userData.password !== pass) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {        
        localStorage.setItem('rememberMe', rememberMe);
        dispatch(sliceReducers.loginHandler(true));
        setuName("");
        setPass("");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={classes.error}>{errorMessages.message}</div>
    );

  const renderForm = (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <div className={classes["input-container"]}>
          <label>Username </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => setuName(e.target.value)}
            value={uName}
            ref={inputRef}
          />
          {renderErrorMessage("uname")}
        </div>

        <div className={classes["input-container"]}>
          <label>Password </label>
          <label> (You'll never guess)</label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          {renderErrorMessage("pass")}
          <label>
            <input
              name="rememberMe"
              checked={rememberMe}
              onChange={() => setRemebrMe((prev) => !prev)}
              type="checkbox"
            />{" "}
            Remember me
          </label>
        </div>
        <div className={classes["button-container"]}>
          <button type="submit"> Sign In </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className={classes.app}>
      <div className={classes["login-form"]}>
        <div className={classes.title}>Sign In</div>
        {renderForm}
      </div>
    </div>
  );
};

export default UserLogin;
