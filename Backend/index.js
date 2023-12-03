import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { postsRouter } from "./routes/posts.js";
import {categoriesRouter  } from "./routes/categories.js";
import {tagsRouter  } from "./routes/tags.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/post", postsRouter);
app.use("/category",categoriesRouter );
app.use("/tag",tagsRouter );

// MongoDB connection configuration

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(3001, () => console.log("Server started"));
