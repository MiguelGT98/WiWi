const Game = require("../../models/Game");
const mongoose = require("mongoose");
let config = require("../../../config/config");

module.exports = app => {
    app.post("/api/games", function(req, res, next) {
        console.log(req.body)
        const game = new Game({
            name: req.body.name,
            image: req.body.image,
            wagerEnabled: req.body.wagerEnabled
        })
        game
            .save()
            .then(result => {
                return res.json({ success: true, message: "Game created succesfuly"});
                })
                .catch(err => next(err));
    });


    app.get("/api/games", function(req, res, next) {
        Game.find(function(err, content) {
            return res.json({ title: 'Games retrieved succesfuly', contents: content });
        });
    });



    app.get("/api/games/:id", function (req, res, next) {
        Game.findOne({ _id: req.params.id })
        .then(game => {
            if (!game) {
                return res.send({
                    success: false,
                    message: "There isnt any game with that id"
                });
            }
            return res.send({
                success: true,
                message: game
            });
        })
        .catch(err => next(err));
    });
  };