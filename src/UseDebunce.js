import React, { useCallback, useState, useEffect } from "react";
import classes from "./Card.module.css"

const DebounceSrcatch = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [name, setName] = useState("");

  
  
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const throttle = (func) => {
      let someFlag = true;
      return function (...args) {
          const thisContext= this;
          if(someFlag){
              func.apply(thisContext, args)
              someFlag = false;
          }
          setTimeout (() => {
            someFlag=true;
          }, 5000)
      }
  }

  const apiCall = async() => {
    const BASE_URL = 'http://api.weatherapi.com/v1/current.json?key=3ddafd9eb53941e6b7d110835221804 &q=';
    const parsedQuery = name.replaceAll(' ', '+');
    const url = `${BASE_URL}${parsedQuery}&aqi=no`;
    const fetchUrl = await fetch(url);
    const some  = await fetchUrl.json();
   if(some.location){
      const result = suggestions.filter(value =>value.location.name.toLowerCase() === some.location.name.toLowerCase());
      if(result.length === 0){
        setSuggestions([...suggestions, some]) ;
      }
   }
    setName("")

  //   const fetchUrl = fetch(url)
  //   .then((resolve=> resolve.json()))
  //   .then((response => setSuggestions([...suggestions, response])))
  //   .then((response => setName("")))
  //   .catch((err) => 
  //       console.error(err), setName(""));
  };

  const handleSubmit = (e) => {    
    e.preventDefault();
    apiCall();
};

const removeLocation = (event, payload) => {
  event.preventDefault();
  const result  = suggestions.filter(value =>value.location.name.toLowerCase() !== payload.toLowerCase());
  setSuggestions([...result]) ;


};

  const throttleDefiner = useCallback(throttle(handleSubmit), []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Weather query</h1>

      <form onSubmit = {handleSubmit} >
        <span>
            <input  placeholder="Enter city name..."  className = {classes.input} onChange = {(e) => setName(e.target.value)} value = {name} ></input>
            <div>
            <button type = 'submit' className  = {classes.button}>Submit</button>
              </div>
            </span>
        </form>
        <div >
          {suggestions.length > 0? <div>
          {suggestions.map((el, i) => (
            <div key={i} className = {classes.card}>
                  <div className = {classes.display}> Location : {el.location.name} </div>
                  <div className = {classes.display}> Humidity : {el.current.humidity} </div>
                  <div className = {classes.display}> Temparature : {el.current.temp_c} °C </div>
                  <div className = {classes.display}> Wind speed : {el.current.wind_kph} kmh </div>
                  <div className = {classes.display}> Wind direction : {el.current.wind_dir} </div>
                  <div className = {classes.icon}>
                    <img src = {el.current.condition.icon}  alt= {el.current.condition.text}/> 
                  </div>
                  <div> 
                    <button className = {classes.delete} onClick = {(e) => removeLocation(e, el.location.name) }> Delete</button>
                  </div>
            </div>
          ))}
        </div> : null}

      </div>
    </>
  );
};

export default DebounceSrcatch;