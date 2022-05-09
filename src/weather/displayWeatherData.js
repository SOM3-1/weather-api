import classes from "./Card.module.css";
import { sliceReducers } from "../slice-store/stateSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import ReactGridLayout from "./displayResponsiveGridLayout";

//Displaying weather using flexbox gone wrong 

const DisplayWeatherData = () => {
  const suggestions = useSelector((state) => state.values);
  const dispatch = useDispatch();

  const removeLocation = (event, payload) => {
    event.preventDefault();
    dispatch(sliceReducers.remove(payload));
  };
  return (
    <>
      {suggestions.length > 0 ? (
        <div>
          {suggestions.map((el, i) => (
            <div key={i} className={classes.card}>
              <div className={classes.display}>
                {" "}
                Location : {el.location.name}{" "}
              </div>
              <div className={classes.display}>
                {" "}
                Humidity : {el.current.humidity}{" "}
              </div>
              <div className={classes.display}>
                {" "}
                Temparature : {el.current.temp_c} °C{" "}
              </div>
              <div className={classes.display}>
                {" "}
                Wind speed : {el.current.wind_kph} kmh{" "}
              </div>
              <div className={classes.display}>
                {" "}
                Wind direction : {el.current.wind_dir}{" "}
              </div>
              <div className={classes.icon}>
                <img
                  src={el.current.condition.icon}
                  alt={el.current.condition.text}
                />
              </div>
              <div>
                <button
                  className={classes.delete}
                  onClick={(e) => removeLocation(e, el.location.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      
      <ReactGridLayout/>
    </>
  );
};

export default DisplayWeatherData;
