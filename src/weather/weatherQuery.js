import React, { useState } from "react";
import { DisplayError } from "./displayError";
import DisplayWeatherData from "./displayWeatherData";
import InputForm from "./inputForm";
import { useDispatch, useSelector } from "react-redux";
import { sliceReducers } from "../slice-store/stateSlice";

const WeatherData = () => {
  const apiProcessed = useSelector((state)=> state.isApiRetrievedProperly)
  const dispatch = useDispatch();

  const handleSubmit = (e, name) => {
    e.preventDefault();
    dispatch(sliceReducers.query(name));
  };


  return (
    <>
      <InputForm/>
      {!apiProcessed && <DisplayError />}
      <DisplayWeatherData/>
    </>
  );
};

export default WeatherData;
