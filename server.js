require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models")
const routes = require("./routes/routes");

const app = express();
const PORT = 4000

app.use(cors());
app.use(express.json());
app.use("/api/signatures", routes);


app.get("/", (req, res) => {
    res.send("API is running...");
}); 

// Default route
app.get("*", (req, res) => {
  res.send("Route not implemented...");
}); 

// Sync up the database and start the server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});