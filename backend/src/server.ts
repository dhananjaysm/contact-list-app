import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname + "/public"));


  
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
