const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) return res.status(404).json({ error: "User not found" });

    next();
  } catch (err) {
    console.error("Auth error:", err); // 👈 ADD THIS LOG
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticate;
