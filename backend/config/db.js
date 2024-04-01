const cors = require("cors"); // Import cors

const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(`mongodb+srv://GM-11:nice1234@cluster0.wohyphv.mongodb.net/`, {
      // .connect(`${process.env.MONGODB_URL}/${process.env.DB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("🔥 Connected to MongoDB"))
    .catch((err) => console.error("💩 Failed to connect to MongoDB", err));
};
module.exports = connectDB;
