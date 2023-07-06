const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const UserController = {};
// Create a new user in the database, using info from the request body
UserController.createUser = (req, res, next) => {
  // console.log('------entering create user controller----');
  // console.log('body: ', req.body);
  const { first_name, last_name, password, username, zipcode } = req.body;
  // console.log(typeof firstName, typeof lastName);

  const newUser = {
    first_name,
    last_name,
    password,
    username,
    zipcode: Number(zipcode),
  };
  // console.log('newUser', newUser);

  User.create(newUser)
    .then((savedDoc) => {
      res.locals.newUser = savedDoc;
      return next();
    })
    .catch((err) => {
      return next({
        log: `userController.createUser ERROR: ${err}`,
        status: 500,
        message: {
          err: 'Error in userController.createUser. See log.',
        },
      });
    });
};

// get method for fetching user based off of username
UserController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  // confirm that both the username and password field are submitted
  if (!username || !password) {
    return next({
      log: 'userController.verifyUser ERROR: missing input fields',
      status: 401,
      message: {
        error: 'Missing fields, try again. Error in userController.verifyUser.',
      },
    });
  }

  User.findOne({ username })
    .then((user) => {
      // console.log('user', user);
      if (!user) {
        // if user is not found successfully
        return next({
          log: 'userController.verifyUser ERROR: user not found',
          status: 401,
          message: {
            error:
              'Invalid credentials, user not found. Error in userController.verifyUser.',
          },
        });
      } else {
        // determine if inputted password matches hashed version stored in database
        bcrypt.compare(password, user.password).then((result) => {
          if (!result) {
            // if the stored password doesn't match
            return next({
              log: 'userController.verifyUser ERROR: user not found',
              status: 401,
              message: {
                error:
                  'Invalid credentials, user not found. Error in userController.verifyUser.',
              },
            });
          } else {
            // if the stored password matches, save user in res.locals
            res.locals.user = user;
            return next();
          }
        });
      }
    })
    .catch((err) => {
      // return res.status(400).json({ error: 'failed to fetch user' });
      return next({
        log: `userController.getUser ERROR: ${err}`,
        status: 500, // internal server error
        message: {
          error: 'Database error in userController.getUser. See log.',
        },
      });
    });
};

module.exports = UserController;
