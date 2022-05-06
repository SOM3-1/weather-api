import { useState, useRef, useEffect } from "react";
import classes from "./Card.module.css";

const InputForm = (props) =>{
    
  const [name, setName] = useState("");  

  

  useEffect(() => {
    inputRef.current.focus();
  });

  const inputRef = useRef(null);
    return (<> 
     <form onSubmit={(event)=> {props.onSearch(event,name)}}>
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
      </>);
};

export default InputForm;