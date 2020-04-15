const route = require('express');
const Workout = require('../models/index')
// const db = require('../models');


route.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(data)
    res.jsons(data)
    .catch(err => {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    })
});

route.post('/api/workouts', ({body}, res) => {
    Workout.create(body)
    .then(response => {
        console.log('Workout created')
    })
    .catch(err => {
        console.log(err);
    })
});

route.put('/api/workouts/:id', (req, res) => {
    let setDur = { totalDuration: req.body.duration }
    Workout.update({ _id: req.params.id }, { $push: { exercises: req.body }, $inc: setDur})
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});



module.exports = route;