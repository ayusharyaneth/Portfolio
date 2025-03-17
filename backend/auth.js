const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./database");

const SECRET_KEY = "your_secret_key";

exports.validateKey = async (req, res) => {
  const { key, pcId } = req.body;
  const user = await db.getUserByKey(key);

  if (user && bcrypt.compareSync(key, user.hashedKey)) {
    const token = jwt.sign({ userId: user.id, pcId }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ success: true, token });
  }
  
  res.status(403).json({ success: false, message: "Invalid key or PC" });
};
