import { useEffect, useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./NewFellowForm.module.css";
import FellowImage from "./FellowImage";

function NewFellowForm(props) {
  const titleInput = useRef();
  const contentInput = useRef();
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.unsplash.com/search/photos?query=cats&client_id=4PnKEP6pK9DtkwqbsfA17cNT2NaKJeAgQ0oXOjnWxfE&orientation=landscape"
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * 10) + 1;
      const image = data.results[randomIndex].urls.regular;
      setImageUrl(image);
    }
    fetchData();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInput.current.value;
    const enteredContent = contentInput.current.value;
    const enteredImage = imageUrl;

    const fellowData = {
      title: enteredTitle,
      content: enteredContent,
      image: enteredImage,
    };

    props.addFellow(fellowData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Fellow Title</label>
          <input type="text" required id="title" ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label>Fellow Content</label>
          <input type="text" required id="content" ref={contentInput} />
        </div>
        <div className={classes.control}>
          <label>Fellow Image</label>
          <FellowImage image={imageUrl} />
        </div>
        <div className={classes.actions}>
          <button>Add New Fellow</button>
        </div>
      </form>
    </Card>
  );
}

export default NewFellowForm;
