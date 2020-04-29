const mongoose = require('mongoose');
// const moments = require('moments');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter a workout type."
        },
        name: {
            type: String,
            trim: true,
            required: "Name of workout?"
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;