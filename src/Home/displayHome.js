import classes from "./displayHome.module.css";
import { useDispatch } from "react-redux";
import { sliceReducers } from "../slice-store/stateSlice";

const DisplayHome = () => {
  const dispatch = useDispatch();


  return (
    <>
      <span className ={classes.someDiv}>
        <h1 className={classes.aligment}>
          Weather Query
          <button
            className={classes.buttonBackground}
            onClick={(e) => {
              e.preventDefault();
              localStorage.setItem('rememberMe',false);
              dispatch(sliceReducers.loginHandler(false));
            }}
          >
            Logout
          </button>
        </h1>
      </span>
    </>
  );
};

export default DisplayHome;
