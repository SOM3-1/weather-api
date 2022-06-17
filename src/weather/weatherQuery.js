
import DisplayWeatherData from "./displayWeatherData";
import InputForm from "./inputForm";
import {useSelector } from "react-redux";
import ErrorModal from "../Modal/errorModal";
import ReactGridLayout from "./displayResponsiveGridLayout";
import spinner from "./spinner.svg";
import classes from "./Card.module.css"

const WeatherData = () => {
  const apiProcessed= useSelector((state)=> state.isApiRetrievedProperly);
  const loading= useSelector((state)=> state.loading);

  return (
    <>
      <InputForm/>
      {!apiProcessed && <ErrorModal/>}
      {/* <DisplayWeatherData/> */}
      {loading && <div className = {classes["svg-display"]}>
      <img src={spinner} alt="React Logo" />
    </div> }
      <ReactGridLayout/>
    </>
  );
};

export default WeatherData;
