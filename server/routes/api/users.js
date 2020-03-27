const User = require("../../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

let jwt = require("jsonwebtoken");
let config = require("../../../config/config");

module.exports = app => {
  app.post("/api/users", function(req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      const user = new User({
        password: hash,
        email: req.body.email,
        username: req.body.username
      });

      user
        .save()
        .then(result => {
          let token = jwt.sign(
            { email: result.email, id: result._id, username: result.username },
            config.secret
          );
          return res.json({ success: true, message: "Auth succesful", token });
        })
        .catch(err => next(err));
    });
  });

  app.post("/api/users/login", function(req, res, next) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.send({
            success: false,
            message: "Authentication details wrong."
          });
        }

        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (!result) {
            return res.send({
              success: false,
              message: "Authentication details wrong."
            });
          }

          let token = jwt.sign(
            { email: user.email, id: user._id, username: user.username },
            config.secret
          );
          return res.json({ success: true, message: "Auth succesful", token });
        });
      })
      .catch(err => next(err));
  });
};
