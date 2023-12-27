const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env" });
const port = process.env.port;
const router = require("./routes/router");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.set("view engine", "ejs");

app.listen(port);
