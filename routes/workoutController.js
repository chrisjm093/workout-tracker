const router = require("express").Router();
const { Workout } = require("../models");

router.post("/api/workouts", (req, res) =>{
  Workout.create(req.body)
    .then( dbWorkout =>{
      res.json( dbWorkout );
    })
    .catch( err =>{
      res.status("401").json(err);
    });
})

router.get("/api/workouts", (req, res) =>{
  Workout.find()
    .then( dbWorkouts =>{
      res.json(dbWorkouts);
    } )
    .catch( err =>{
      res.status("401").json(err);
    })
});

router.put("/api/workouts/:id", (req, res) =>{
  console.log(req.body)
  console.log(req.params.id);
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body} },
    {new: true, runValidators: true }

)
.then( dbWorkouts =>{
  res.json(dbWorkouts);
} )
.catch( err =>{
  res.status("401").json(err);
})

});

router.get("/api/workouts/range", (req, res)=>{
  Workout.find()
  .then(  dbWorkouts =>{
    res.json( dbWorkouts );
  })
  .catch( err =>{
    res.status("401").json(err);
  })
});


module.exports = router;