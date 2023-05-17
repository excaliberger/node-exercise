import express from "express";
import config from "./config";
import morgan from "morgan";
import apiRouter from "./routes";

const app = express();

//parses incoming request body to JSON
//attatches JSON to body parameter of the req object
app.use(express.json());

app.use(morgan("common"));

// TODO: use the imported router to handle all requests
app.use("/api", apiRouter);


// default error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});

module.exports = app;

