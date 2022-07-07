const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const usercartController = require("./controllers/usercart.controller");
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/usercart", usercartController);


app.listen(port, async function () {
  await connect();

  console.log("listening to port:", port);
});
