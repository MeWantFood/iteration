const { v4: uuidv4 } = require('uuid');
const CookieController = {};

CookieController.setSSID = (req, res, next) => {
  console.log('----cookiecontroller.setSSID is starting now----');
  res.locals.ssid = uuidv4();
  res.cookie('ssid', res.locals.ssid, {
    httpOnly: true,
    secure: true,
    maxAge: 900000, // 15 minutes
  });
  return next();
};

module.exports = CookieController;
