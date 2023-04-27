import { Fragment } from "react";
import FellowList from "../components/Fellow/FellowList";
const mongoose = require("mongoose");
import fellowModel from "../Models/fellowModel";

function home(props) {
  return (
    <Fragment>
      <FellowList fellows={props.fellows} />
    </Fragment>
  );
}

export async function getServerSideProps() {
  mongoose.connect(
    "mongodb+srv://myFellows:IbdS8yvCKLCV0vHa@database.khjlk4g.mongodb.net/fellow?retryWrites=true&w=majority"
  );
  const fellows = await fellowModel.find();

  return {
    props: {
      fellows: fellows.map((fellow) => ({
        id: fellow._id.toString(),
        title: fellow.title,
        image: fellow.image,
        content: fellow.content,
      })),
    },
  };
}
export default home;
