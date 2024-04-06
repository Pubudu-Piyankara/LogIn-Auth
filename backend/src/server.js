const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const SECRET_KEY = "secretIndex";

//connet too express app
const app = express();

//connect to MongoDB
const dbURL =
  "mongodb+srv://pubu:test123@cluster99.xcnka7n.mongodb.net/UserDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server is connected to port 3001 and MongoDB");
    });
  })
  .catch((error) => {
    console.log("Unable to connect to server; ", error);
  });

//middleware
app.use(bodyParser.json());
app.use(cors());

//schema

//routes
//user registration
//post register
app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch {
    res.status(500).json({ error: "Unable to create user" });
  }
});

//Get registered user
app.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(401).json({ error: "unvailable user" });
  }
});

//login users
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid login details" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ massage: "Ivalid login details" });
    }

    const taken = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ massage: "Login Successful" });
  } catch (error) {
    res.status(401).json({ error: "Incorrect login details" });
  }
});
