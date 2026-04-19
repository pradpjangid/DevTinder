import express from "express";
import dotenv from "dotenv";
import connnetDB from "./config/database.js";
import { User } from "./models/user.js";

dotenv.config();
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added Succesffu");
  } catch (error) {
    res.status(400).send("Error saving the user:", error);
  }
});

app.get("/user", async (req, res) => {
  const emaildId = req.body.emailId;

  const resthis = await User.findOne({ emailId: emaildId });
  res.send(resthis);
});
app.get("/feed", async (req, res) => {
  try {
    const allFeed = await User.find({});
    res.send(allFeed);
  } catch (error) {
    res.status(400).send("Something Went Wrong:", error);
  }
});

app.post("/update", async (req, res) => {
  const userId = req.body.userId;
  try {
    await User.findByIdAndUpdate(userId, req.body);
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
