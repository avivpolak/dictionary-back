const express = require("express");
const serverless = require("serverless-http");
const app = express();
const wordRoute = require("./routes/word");
const posRoute = require("./routes/pos");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
const unknownEndpoint = require("./middlewares/unknownEndpoint");
app.use(express.json());
app.use("/word", wordRoute);
app.use("/part-of-speech", posRoute);

// unknownEndpoint handling middleware
app.use(unknownEndpoint);

// error handling middleware
app.use(errorHandlingMiddleware);

module.exports.handler = serverless(app);
