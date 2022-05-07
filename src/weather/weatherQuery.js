
import DisplayWeatherData from "./displayWeatherData";
import InputForm from "./inputForm";
import {useSelector } from "react-redux";
import ErrorModal from "../Modal/errorModal";

const WeatherData = () => {
  const apiProcessed = useSelector((state)=> state.isApiRetrievedProperly);

  return (
    <>
      <InputForm/>
      {!apiProcessed && <ErrorModal/>}
      <DisplayWeatherData/>
    </>
  );
};

export default WeatherData;
