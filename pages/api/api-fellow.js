import fellowModel from "../../Models/fellowModel";
const mongoose = require("mongoose");

async function handler(req, res) {
  if (req.method === "POST") {
    const { title, image, content } = req.body;
    mongoose
      .connect(
        "mongodb+srv://myFellows:IbdS8yvCKLCV0vHa@database.khjlk4g.mongodb.net/fellow?retryWrites=true&w=majority"
      )
      .then((con) => {
        if (con.connection.readyState === 1) {
          console.log("Connected successfully");
        }
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });

    const fellow = await fellowModel.create({
      title,
      image,
      content,
    });

    if (fellow) {
      res.status(201).json({
        fellow,
      });
      console.log("Sent data");
    }
  } else if (req.method === "GET") {
    mongoose.connect(
      "mongodb+srv://myFellows:IbdS8yvCKLCV0vHa@database.khjlk4g.mongodb.net/fellow?retryWrites=true&w=majority"
    );
    const fellow = await fellowModel.find();
    if (fellow) {
      res.status(201).json({
        fellow,
      });
      console.log("Received data");
    }
  }
}

export default handler;
