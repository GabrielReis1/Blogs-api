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

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users' });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user' });
    }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
