
import classes from "./Card.module.css";
export const DisplayError = () => {
    return (<>
        <p className={classes["isa-error"]}>Search didn't yield any result</p>
    </>);
}