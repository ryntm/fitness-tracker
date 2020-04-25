const Workout = require("../models/workout.js");

module.exports = function(app) {
    //get all workout information
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    
    // create new workout
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
    
    // add exercises to workout
    app.put("/api/workouts/:id", (req, res) => {
        Workout.updateOne(
            { _id: req.params.id  },
            { $push: { exercises: req.body }, $inc: { totalDuration: req.body.duration } }
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        }); 
    });
    
    //getting all workouts in a range
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });    
}