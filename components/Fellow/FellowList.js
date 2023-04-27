import FellowItem from "./FellowItem";
import classes from "./FellowList.module.css";

function FellowList(props) {
  return (
    <ul className={classes.list}>
      {props.fellows.map((fellow) => (
        <FellowItem
          key={fellow.id}
          id={fellow.id}
          image={fellow.image}
          title={fellow.title}
          content={fellow.content}
        />
      ))}
    </ul>
  );
}

export default FellowList;
