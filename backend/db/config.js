const mongoose = require("mongoose");
const uri =
  "mongodb+srv://harshkr5247:sgDapfEl3fYHMPMV@cluster0.1zulvry.mongodb.net/e-commerce?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
