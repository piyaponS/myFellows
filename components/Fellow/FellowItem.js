import Card from "../ui/Card";
import classes from "./FellowItem.module.css";

function FellowItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <h3>{props.title}</h3>
          <h4>{props.content}</h4>
        </div>
      </Card>
    </li>
  );
}

export default FellowItem;
