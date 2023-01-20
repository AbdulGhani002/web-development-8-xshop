const express = require("express");

const path = require("path");

const csrf = require("csurf");

const expressSession = require("express-session");

const app = express();

const db = require("./data/database");

const authRoutes = require("./routes/auth.routes");

const baseRoutes = require("./routes/base.routes");

const addCsrfTokenMiddleware = require("./middlewares/csrf-token");

const errorHandlerMiddleware = require("./middlewares/error-handler");

const createSessionConfig = require("./config/session");

app.set("view engine", "ejs");

app.set("views", path.join("views"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));

app.use(csrf());

app.use(addCsrfTokenMiddleware);

app.use(baseRoutes);

app.use(authRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("An Error Occured While connecting to the database.");
    console.log(error);
  });
