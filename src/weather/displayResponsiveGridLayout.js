import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./Card.module.css";

import { sliceReducers } from "../slice-store/stateSlice";

import { useSelector, useDispatch } from "react-redux/es/exports";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const ReactGridLayout = () => {
  let xAxis = 0;
  const suggestions = useSelector((state) => state.values);
  const dispatch = useDispatch();

  const removeLocation = (event, payload) => {
    event.preventDefault();
    dispatch(sliceReducers.remove(payload));
    xAxis = xAxis - 2;
  };

  return (
    <div>
      <ResponsiveReactGridLayout
        verticalCompact={true}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        preventCollision={false}
        cols={{ lg: 8, md: 8, sm: 4, xs: 2, xxs: 2 }}
        autoSize={true}
        margin={{
          lg: [20, 20],
          md: [20, 20],
          sm: [20, 20],
          xs: [20, 20],
          xxs: [20, 20],
        }}
      >
        {suggestions?.map((el, i) => {
          if (xAxis >= 8) {
            xAxis = 0;
          }
          console.log(xAxis);
          return (
            <div
              className={classes.reactGridItem}
              key={i}
              data-grid={{
                x: xAxis,
                y: xAxis,
                w: 2,
                h: 2,
                i: i,
                minW: 2,
                maxW: Infinity,
                minH: 2,
                maxH: Infinity,
                isDraggable: true,
                isResizable: true,
              }}
              {...(xAxis = xAxis + 2)}
            >
              <div className = {classes.textDiaply}>
              <div >Location : {el.location.name}</div>
              <div>Humidity : {el.current.humidity}</div>
              <div>Temparature : {el.current.temp_c} °C</div>
              <div>Wind speed : {el.current.wind_kph} kmh</div>
              <div>Wind direction : {el.current.wind_dir}</div>
              <div>
                <img
                  src={el.current.condition.icon}
                  alt={el.current.condition.text}
                />
              </div>
              </div>
              <button
                className={classes.deleteButton}
                onClick={(e) => removeLocation(e, el.location.name)}
              >
                x
              </button>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default ReactGridLayout;
