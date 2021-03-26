import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log("Server running on port:", port);
});
