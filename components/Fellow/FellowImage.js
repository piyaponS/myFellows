import classes from "./FellowImage.module.css";

function FellowImage(props) {
  return (
    <div className={classes.image}>
      {props.image ? <img src={props.image} /> : props.error}
    </div>
  );
}

export default FellowImage;
