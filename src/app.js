import express from "express";
import dotenv from "dotenv";
import connnetDB from "./config/database.js";
import { User } from "./models/user.js";

dotenv.config();
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "sdfsdfs",
    lastName: "sdfsdf",
    emailId: "sdfsdf@gmail.com",
    password: "sdfsdf#2314",
    gender: "sddddddddd",
    age: 32,
  });
  try {
    await user.save();
    res.send("User Added Succesffu");
  } catch (error) {
    res.status(400).send("Error saving the user:", error);
  }
});

connnetDB()
  .then(() => {
    console.log("DataBase Connection Established");
    app.listen(3000, () => {
      console.log("Server is Start and Listening in Port 3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be conneted !!", err);
  });
