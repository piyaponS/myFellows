import FellowDetail from "../components/Fellow/FellowDetail";
import { Fragment } from "react";
import fellowModel from "../Models/fellowModel";
const mongoose = require("mongoose");

const FellowDetails = (props) => {
  return (
    <Fragment>
      <FellowDetail
        title={props.fellowData.title}
        content={props.fellowData.content}
        image={props.fellowData.image}
      />
    </Fragment>
  );
};

export default FellowDetails;

export async function getStaticPaths() {
  mongoose.connect(
    "mongodb+srv://myFellows:IbdS8yvCKLCV0vHa@database.khjlk4g.mongodb.net/fellow?retryWrites=true&w=majority"
  );
  const fellows = await fellowModel.find({}, { _id: 1 });
  return {
    fallback: "blocking",
    paths: fellows.map((fellow) => ({
      params: { fellowId: fellow._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const eachFellowId = context.params.fellowId;
  mongoose.connect(
    "mongodb+srv://myFellows:IbdS8yvCKLCV0vHa@database.khjlk4g.mongodb.net/fellow?retryWrites=true&w=majority"
  );
  const selectedFellow = await fellowModel.findOne({ _id: eachFellowId });

  return {
    props: {
      fellowData: {
        title: selectedFellow.title,
        content: selectedFellow.content,
        image: selectedFellow.image,
      },
    },
  };
}
