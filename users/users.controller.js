const express = require("express");
const multiparty = require("multiparty");
const router = express.Router();
const userService = require("./user.service");

// routes
router.post("/authenticate", authenticate);

module.exports = router;

function authenticate(req, res, next) {
    const form = new multiparty.Form();
    form.parse(req, function (err, fields, files) {
        const username = fields.username[0];
        const password = fields.password[0];
        userService
            .authenticate({ username, password })
            .then((user) =>
                user
                    ? res.json(user)
                    : res.status(400).json({
                          message: "Username or password is incorrect",
                      })
            )
            .catch((err) => next(err));
    });
}
