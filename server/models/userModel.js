const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

// set a schema for the 'users' collectionx
const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
});

userSchema.pre('save', function (next) {
  bcrypt
    .hash(this.password, SALT_WORK_FACTOR)
    .then((hash) => {
      this.password = hash;
      return next();
    })
    .catch((err) => {
      return next({
        log: `userSchema.presave ERROR in bcrypt.hash: ${err}`,
        status: 500,
        message: { error: 'ERROR in password hashing. See log.' },
      });
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
