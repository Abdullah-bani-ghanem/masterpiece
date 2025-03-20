// const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
require("dotenv").config(); 




mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
});