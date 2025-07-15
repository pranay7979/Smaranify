var jwt = require('jsonwebtoken');
const JWT_SECRET = 'pranayrocks';  // Use the same as in your routes

const fetchuser = (req, res, next) => {
  // Get the user from the JWT token and add id to req object
  const token = req.header('auth-token');  // ✅ Make sure frontend uses same header

  if (!token) {
    return res.status(401).send({ error: "Access denied. No token provided." });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);  // ✅ This was missing!
    req.user = data.user;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.status(401).send({ error: "Invalid token. Please authenticate using a valid token." });
  }
};

module.exports = fetchuser;
