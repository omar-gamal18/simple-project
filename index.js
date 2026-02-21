const express = require("express");

const app = express();

app.use(express.json());

const coursesRouter = require("./routes/courses.routes");

app.use("/courses", coursesRouter);

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});
