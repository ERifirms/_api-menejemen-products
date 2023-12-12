const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const path = require("path");
const cors = require("cors");
dotEnv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.DB)
  .then((result) => {
    console.log("Database connected ..");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("it work");
});

// routes
app.use("/api", require("./routes/users.routes")); // users
app.use("/api/auth", require("./routes/auth.routes")); // auth
app.use("/api", require("./routes/product.routes")); // prouducts
app.use("/api/stores", require("./routes/store.routes")); // stores

app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
