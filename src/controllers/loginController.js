const authService = require('../services/authService');

const login = async (req, res) => {
  const { email, password } = req.body;

  // Verificar se todos os campos estão preenchidos
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  try {
    const token = await authService.login(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
};

module.exports = {
  login,
};
