import UserLogin from "../Login/userLogin";
import WeatherData from "../weather/weatherQuery";
import { useSelector } from "react-redux";
import DisplayHome from "../Home/displayHome";
import { useDispatch } from "react-redux";
import { sliceReducers } from "../slice-store/stateSlice";
import { useEffect } from "react";

const Components = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.loginStatus);
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    useEffect(()=> {
      if(rememberMe){
        dispatch(sliceReducers.loginHandler(true));
      }
    })
 
    const status = !(rememberMe || loginStatus);
    useEffect(() =>{}, [status]);
  
  return (
    <>
      {status ? (
        <UserLogin />
      ) : (
        <>
          <DisplayHome />
          <WeatherData />
        </>
      )}
    </>
  );
};

export default Components;
