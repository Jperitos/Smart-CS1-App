require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(cors());
app.use(express.json());
// node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
app.get("/api/ping", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.use("/api", authRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

const PORT = 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
