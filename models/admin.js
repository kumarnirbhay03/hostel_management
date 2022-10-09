const mongoose=require('mongoose');

// Admin Schema

const adminSchema = mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
    numberOfRoom: {
      type: Number,
      required: true
    },
});
const User=mongoose.model('User', adminSchema);
module.exports.User = User;