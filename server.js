const express = require("express");
const app = express();
const initRoutes = require("./src/router/web");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});