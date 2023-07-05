const User = require('../models/userModel');

const UserController = {};
// Create a new user in the database, using info from the request body
UserController.createUser = (req, res, next) => {
  // console.log('------entering create user controller----');
  // console.log('body: ', req.body);
  const { first_name, last_name, password, username, zipcode } = req.body;
  // console.log(typeof firstName, typeof lastName);

  const newUser = new User({
    first_name,
    last_name,
    password,
    username,
    zipcode: Number(zipcode),
  });
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
UserController.getUser = (req, res, next) => {
  const { username, password } = req.body;
  // console.log(req.body);
  User.findOne({ username: username })
    .then((user) => {
      //console.log('user', user);
      if (user) {
        // if user is found successfully
        res.locals.user = user;
        return next();
      } else {
        return next({
          log: 'userController.getUser ERROR: user not found',
          status: 401,
          message: {
            error:
              'Invalid credentials, user not found. Error in userController.getUser.',
          },
        });
      }
    })
    .catch((err) => {
      // return res.status(400).json({ error: 'failed to fetch user' });
      return next({
        log: `userController.getUser ERROR: ${err}`,
        status: 500, //internal server error
        message: { error: 'Error in userController.getUser. See log.' },
      });
    });
};

module.exports = UserController;
