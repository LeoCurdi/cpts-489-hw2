require("dotenv").config();
const express = require("express");
const cors = require("cors");
//const db = require("./models")

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is running...");
}); 

// Default route
app.get("*", (req, res) => {
  res.send("Route not implemented...");
}); 

// Sync up the database and start the server
const PORT = process.env.PORT || 5000;
//db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
//});