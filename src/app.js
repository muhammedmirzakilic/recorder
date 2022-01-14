require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const mongoose = require("mongoose");
const config = require("./config");
const PORT = config.port || 3000;
mongoose
  .connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/record", routes.recordRoutes);
app.get("/", (req, res) => {
  res.send({ status: "working!" });
});

app.use((error, req, res, next) => {
  let code = 0000;
  let msg = [];
  for (let index = 0; index < error.length; index++) {
    const element = error[index];
    code |= element.msg.code;
    msg.push(element.msg.description);
  }
  msg = msg.join(", ");
  if (!msg.length) {
    msg = error.message || "An unexpected error occurred!";
    code = 1;
  }
  return res.json({ code, msg, records: [] });
});

app.listen(PORT, function () {
  console.log("Server started");
});
