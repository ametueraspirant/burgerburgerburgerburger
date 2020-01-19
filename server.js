const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const exhand = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exhand({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/controllers.js");

app.use(routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});