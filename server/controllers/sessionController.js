const Session  = require('../models/sessionModel');

const SessionController = {};

SessionController.startSession = (req, res, next) => {
    return next();
}

SessionController.isLoggedIn = (req, res, next) => {
    return next();
}

module.exports = SessionController;