const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    
    password: {
      type: String,
      required: true,
      minlength: 8,
    }
    
  },
  {
    timestamps: true,
  }
);

module.exports = Mongoose.model ("User", userSchema);


