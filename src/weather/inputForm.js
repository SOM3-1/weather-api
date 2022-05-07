import { useState, useRef, useEffect } from "react";
import classes from "./Card.module.css";
import { useDispatch } from "react-redux";
import { sliceReducers } from "../slice-store/stateSlice";
import { manageApi } from "../util";

const InputForm = (props) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {

    e.preventDefault();
    const payload = await manageApi(name);
    dispatch(sliceReducers.query(payload));
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const inputRef = useRef(null);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <span className={classes.input}>
          <input
            placeholder="Enter city name..."
            className={classes.inputText}
            onChange={(e) => setName(e.target.value)}
            value={name}
            ref={inputRef}
          ></input>
          <button type="submit" className={classes.button}>
            Search
          </button>
        </span>
      </form>
    </>
  );
};

export default InputForm;
