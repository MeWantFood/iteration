const CookieController = {};

CookieController.setSSID = (req, res, next) => {
    console.log('cookiecontroller.setSSID is triggering rn!')
    return next();
}

module.exports = CookieController;