import classes from "./FellowDetail.module.css";

function FellowDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <h2>{props.content}</h2>
    </section>
  );
}

export default FellowDetail;
