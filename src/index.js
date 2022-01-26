const express = require("express");
const app = express();
const path = require("path");

app.set("port", 8080);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//middelewares //funciones que se ejecutan antes que las rutas procesen algo

//rutas del servidor
app.use(require("./routes/"));

//static files
app.use(express.static(path.join(__dirname, "public")));
//escuchando el servidor
app.listen(app.get("port"), () => {
  console.log("Servidor is Run port: " + app.get("port"));
});
