const express = require("express");
const router = express.Router();

const { getMe, updateUserProfile, changePassword } = require("../controllers/userController");
const authenticate = require("../middleware/auth");
const User = require("../model/User");

router.get("/me", authenticate, getMe);
router.put("/update-profile", authenticate, updateUserProfile);
router.get("/check-username/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.json({ exists: !!user });
  } catch (err) {
    console.error("Username check error:", err);
    res.status(500).json({ error: "Server error" });
  }
});
router.put("/change-password", authenticate, changePassword);
module.exports = router;
