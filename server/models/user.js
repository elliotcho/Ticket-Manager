const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    firstName: String,
    lastName: String,
    password: String,
    username: String,
    isAdmin: Boolean,
    enabled: Boolean,
    email: String,
});

// data access object
const User = mongoose.model('user', UserSchema);
module.exports = User;
