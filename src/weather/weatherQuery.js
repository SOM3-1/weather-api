import React, { useState } from "react";
import { DisplayError } from "./displayError";
import DisplayWeatherData from "./displayWeatherData";
import { manageApi, existingLocation, removeExistingLocation } from "./util";
import InputForm from "./inputForm";

const WeatherData = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [apiProcessed, setapiProcessed] = useState(true);

  const handleSubmit = async (e, name) => {
    e.preventDefault();
    const some = await manageApi(name);
    if (some.location) {
      setapiProcessed(true);
      const result = existingLocation(suggestions, some);
      if (result.length === 0) {
        setSuggestions([some, ...suggestions]);
      }
    } else {
      setapiProcessed(false);
    }
  };

  const removeLocation = (event, payload) => {
    event.preventDefault();
    const result = removeExistingLocation(suggestions, payload);
    setSuggestions([...result]);
    setapiProcessed(true);
  };

  return (
    <>
      <InputForm onSearch={handleSubmit} />
      {!apiProcessed && <DisplayError />}
      <DisplayWeatherData results={suggestions} onRemove={removeLocation} />
    </>
  );
};

export default WeatherData;
