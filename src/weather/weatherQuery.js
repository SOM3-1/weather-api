
import DisplayWeatherData from "./displayWeatherData";
import InputForm from "./inputForm";
import {useSelector } from "react-redux";
import ErrorModal from "../Modal/errorModal";
import ReactGridLayout from "./displayResponsiveGridLayout";

const WeatherData = () => {
  const apiProcessed = useSelector((state)=> state.isApiRetrievedProperly);

  return (
    <>
      <InputForm/>
      {!apiProcessed && <ErrorModal/>}
      {/* <DisplayWeatherData/> */}
      <ReactGridLayout/>
    </>
  );
};

export default WeatherData;
