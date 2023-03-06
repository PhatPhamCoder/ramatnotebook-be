const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", true);
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Succesfully!");
    mongoose.set("strictQuery", false);
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;
