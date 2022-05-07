import WeatherData from "./weather/weatherQuery";
import { Provider } from "react-redux";
import { sliceStore } from "./slice-store/configureStore";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Weather query</h1>
      <Provider store={sliceStore}>
        <WeatherData />
      </Provider>
    </>
  );
}

export default App;
