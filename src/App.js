
import { Provider } from "react-redux";
import { sliceStore } from "./slice-store/configureStore";
import Components from "./AppBundle/components";

function App() {
  return (
    <>
      <Provider store={sliceStore}>
        <Components/>
      </Provider>
    </>
  );
}

export default App;
