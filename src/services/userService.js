const { User } = require('../models');

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({
    displayName,
    email,
    password,
    image,
  });

  return newUser;
};

const getUsers = async () => {
    const users = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
  };

module.exports = {
  getUserByEmail,
  createUser,
  getUsers,
};
