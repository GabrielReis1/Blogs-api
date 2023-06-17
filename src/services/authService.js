const jwtUtils = require('../utils/jwtUtil');
const { User } = require('../models');

const login = async (email, password) => {
  // Verificar se o usuário existe e a senha está correta
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    throw new Error('Invalid fields');
  }

  // Gerar o token JWT
  const payload = {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  };
  const token = jwtUtils.createToken(payload);

  return token;
};

module.exports = {
  login,
};
