const express = require("express");

const path = require("path");

const app = express();

const authRoutes = require("./routes/auth.routes");

const baseRoutes = require("./routes/base.routes");

app.set("view engine", "ejs");

app.set("views", path.join("views"));

app.use(baseRoutes);

app.use(authRoutes);

app.listen(3000);
