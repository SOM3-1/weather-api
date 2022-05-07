import classes from "./ErrorModal.module.css";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { sliceReducers } from "../slice-store/stateSlice";

const portalElement = document.getElementById("errorModal");

const BackDrop = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={classes.backdrop}
      onClick={(e) => {
        e.preventDefault();
        dispatch(sliceReducers.errorHandler(true));
      }}
    ></div>
  );
};

const Overlay = () => {
  const dispatch = useDispatch();
  return (
    <div className={classes.modal}>
      <div className={classes.content}></div>
      <h1 className={classes.sub}> Error</h1>
      <div>
        <div className  = {classes.errorMessage}>Hello stranger!!</div>
        <div className  = {classes.errorMessage}>Your search didn't match any results.</div>
        <div className  = {classes.errorMessage}>
          Click on <b>X</b> or on backdrop to return
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(sliceReducers.errorHandler(true));
        }}
        className={classes["modal-close"]}
      >
        X
      </button>
    </div>
  );
};

const ErrorModal = () => {
  return (
    <>
      {createPortal(<BackDrop />, portalElement)}
      {createPortal(<Overlay />, portalElement)}
    </>
  );
};

export default ErrorModal;
