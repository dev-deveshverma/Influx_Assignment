const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://devesh:devesh@cluster0.khdvo.mongodb.net/?retryWrites=true&w=majority"
    
  );
};
