import WeatherData from "./weather/weatherQuery";
import { Provider } from "react-redux";
import { sliceStore } from "./slice-store/configureStore";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Weather Query</h1>
      <Provider store={sliceStore}>
        <WeatherData/>
      </Provider>
    </>
  );
}

export default App;
