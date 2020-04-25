const Workout = require("../models/workout.js");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    
    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    
    app.put("/api/workouts/:id", (req, res) => {
        Workout.updateOne(
            {   _id: req.params.id  },
            { 
                $push: { exercises: req.body },
                $inc: { totalDuration: req.body.duration }
            }
        )
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        }); 
    });
    
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });    
}