const express = require('express');

const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(loginRoutes);
app.use(userRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
