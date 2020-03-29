const Tournament = require("../../models/Tournament");
const Game = require("../../models/Game");

const mongoose = require("mongoose");
let config = require("../../../config/config");

module.exports = app => {
  app.post("/api/tournaments", function(req, res, next) {
    console.log(req.body);
    Game.findOne({ _id: req.body.game })
      .then(game => {
        if (!game) {
          res.send("ERROR");
        } else {
          let start = new Date(req.body.startsAt[0]);
          let startHours = req.body.startsAt[1][0] + req.body.startsAt[1][1];
          let startMinutes = req.body.startsAt[1][3] + req.body.startsAt[1][4];

          start.setDate(start.getDate() + 1);
          start.setHours(startHours);
          start.setMinutes(startMinutes);
          console.log(start);

          let end = new Date(req.body.endsAt[0]);
          let endHours = req.body.endsAt[1][0] + req.body.endsAt[1][1];
          let endMinutes = req.body.endsAt[1][3] + req.body.endsAt[1][4];

          end.setDate(end.getDate() + 1);
          end.setHours(endHours);
          end.setMinutes(endMinutes);
          console.log(end);

          if (req.body.teamBased == "0") {
            req.body.teamBased = false;
          } else {
            req.body.teamBased = true;
          }

          const tournament = new Tournament({
            name: req.body.name,
            description: req.body.description,
            startsAt: start.getTime() / 1000,
            endsAt: end.getTime() / 1000,
            rulebook: { content: req.body.rulebook },
            participants: {},
            teamBased: req.body.teamBased,
            game: game,
            address: req.body.address
          });
          tournament
            .save()
            .then(result => {
              return res.redirect("/app/torneos");
            })
            .catch(err => next(err));
        }
      })
      .catch(err => next(err));
  });

  app.get("/api/tournaments", function(req, res, next) {
    Tournament.find(function(err, content) {
      return res.json({
        title: "Tournaments retrieved succesfuly",
        contents: content
      });
    });
  });

  app.get("/api/tournaments/:id", function(req, res, next) {
    Tournament.findOne({ _id: req.params.id })
      .then(tournament => {
        if (!tournament) {
          return res.send({
            success: false,
            message: "There isnt any tournament with that id"
          });
        }
        return res.send({
          success: true,
          message: tournament
        });
      })
      .catch(err => next(err));
  });

  app.patch("/api/tournaments/register/:id", function(req, res, next) {
    var updateObject = req.body; // {last_name : "smith", age: 44}
    var id = req.params.id;
    Tournament.findOne({ _id: req.params.id })
      .then(tournament => {
        let i = 0;
        let num = 0;
        let hasUser = false
        for(let p of tournament.participants){
          if(p.id == updateObject.id){
            hasUser = true
            num = i
            // return res.send({
            //   success: true,
            //   message: "User unregistration complete!"
            // });
          }
          i++ 
        }

        if(!hasUser){
          tournament.participants.push(updateObject)
        }else{
          tournament.participants.splice(num,1)
        }
        
        Tournament.updateOne(
          { _id: tournament.id },  // <-- find stage
          { $set: {                // <-- set stage
              participants : tournament.participants
            } 
          }  
        ).then(tournament => {
          return res.json({
              success: true,
              message: "Update Successful"
            });
        }).catch(err => next(err)); 
      })
    .catch(err => next(err));
  });
};
