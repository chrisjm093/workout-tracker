const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day:{
    type: Date,
    default: new Date().setDate( new Date().getDate())
  },

  exercises: [
    {
      type: {
          type: String,
          trim: true,
          required: "Select a workout type."
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter a workout name."
      },
      
      duration:{
          type: Number,
          required: "Please enter workout duration"
        },
      
      weight: {
        type: Number,
        required: "Please enter a weight"
      },
      
      reps: {
        type: Number,
        required: "Please enter number of reps"
      },
      sets: {
        type: Number,
        required: "Please enter number of sets"
      },
      distance: {
        type: Number,
        required: "Please enter distance"
      }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;