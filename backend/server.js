const express = require("express"); //
const dotenv = require("dotenv").config();
//const cors = require("cors");
const mongoose = require("mongoose");
//const morgan = require("morgan");
//all these mawgoodin f package.json

const app = express(); // to create an app

/*mongoose
  .connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    userUnifiedTopology: true,
  })
  .then(() => console.log("db is connected"))
  .catch((err) => console.log("kill yourself")); */

app.use("/api/goals", require(".routes/router"));

//app.use(morgan("dev"));
//app.use(cors({ origin: true, credential: true }));

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log("The server is running on teezy " + port)
);

/*mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
  })
  .then(() => console.log("db is connected"))
  .catch((err) => console.log("kill yourself")); */
