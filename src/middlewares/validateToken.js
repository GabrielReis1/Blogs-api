const jwtUtils = require('../utils/jwtUtil');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decodedToken = jwtUtils.decodeToken(token);

    req.user = decodedToken; 
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
