const express = require("express");

const sendEmailRouter = require("./routes/sendEmailRoutes");

const app = express();

//! MIDDLEWARE
app.use(express.json());

//! ROUTES
app.use("/sendEmail", sendEmailRouter);

app.listen(5000, () => {
  console.log("app running on port 5000");
});
