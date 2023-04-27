import classes from "./FellowImage.module.css";

function FellowImage(props) {
  return (
    <div className={classes.image}>
      <img src={props.image} />
    </div>
  );
}

export default FellowImage;
