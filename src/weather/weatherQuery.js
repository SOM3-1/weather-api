
import { DisplayError } from "./displayError";
import DisplayWeatherData from "./displayWeatherData";
import InputForm from "./inputForm";
import {useSelector } from "react-redux";

const WeatherData = () => {
  const apiProcessed = useSelector((state)=> state.isApiRetrievedProperly);

  return (
    <>
      <InputForm/>
      {!apiProcessed && <DisplayError />}
      <DisplayWeatherData/>
    </>
  );
};

export default WeatherData;
