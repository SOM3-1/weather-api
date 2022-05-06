import classes from "./Card.module.css";

const DisplayWeatherData = (props) => {
  const suggestions = props.results;

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
                  onClick={(e) => props.onRemove(e, el.location.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default DisplayWeatherData;
