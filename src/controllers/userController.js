const userService = require('../services/userService');
const jwtUtils = require('../utils/jwtUtil');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  try {
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const newUser = await userService.createUser(displayName, email, password, image);
    const token = jwtUtils.createToken({ id: newUser.id, displayName, email, image });

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createUser,
};
