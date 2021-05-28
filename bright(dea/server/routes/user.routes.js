const userController = require('../controllers/user.controller.js');
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    // app.get("/api/user/", userController.list);
    app.post("/api/user/register", userController.register);
    app.post("/api/user/login", userController.login);
    app.post("/api/user/logout", userController.logout);
    app.get("/api/user/loggedIn", authenticate, userController.getLoggedInUser);
};

