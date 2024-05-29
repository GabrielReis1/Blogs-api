const express = require("express");

const loginRoutes = require("./routes/loginRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.get("/", (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(loginRoutes);
app.use(userRoutes);
app.use(categoryRoutes);
app.use(postRoutes);

module.exports = app;
