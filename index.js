const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
require('dotenv').config();
const { notFound, errorHandler } = require("./middlewares/errorHandler")
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);

app.get("/api", (req, res) => {
  res.json({ "users": ["userone", "usertwo"] })
});
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running PORT ${PORT}`)
});