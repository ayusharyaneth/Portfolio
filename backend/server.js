const express = require("express");
const cors = require("cors");
const auth = require("./auth");
const proxyHandler = require("./proxyHandler");
const captchaSolver = require("./captchaSolver");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", auth.validateKey);
app.get("/proxy-status", proxyHandler.checkProxyHealth);
app.post("/solve-captcha", captchaSolver.solveCaptcha);

app.listen(3000, () => console.log("Server running on port 3000"));
