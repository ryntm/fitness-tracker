const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    totalDuration:{
        type: Number,
        default: 0
    },
    exercises: [{

        type:{
            type: String
        },
        name:{
            type: String,
            trim: true,
        },
        duration:{
            type: Number,
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps:{
            type: Number
        },
        sets:{
            type: Number
        }
    }]
})


const Workout = mongoose.model('workout', workoutSchema)

module.exports = Workout