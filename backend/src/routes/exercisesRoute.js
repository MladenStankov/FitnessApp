import express from 'express';
import {
  getExercises,
  getExercisesOfWorkoutByID,
  createExercise,
} from "../controllers/exercisesController.js";

const router = express.Router();

// GET routes
router.get('/', async (req, res) => {
  try {
    const exercises = await getExercises();
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/workout/:workout_id', async (req, res) => {
  const workoutId = req.params.workout_id;
  try {
    const exercisesOfWorkout = await getExercisesOfWorkoutByID(workoutId);
    res.json(exercisesOfWorkout);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST route
router.post('/', async (req, res) => {
  const { workout_id, exercise_name, sets, reps, weight_in_kgs } = req.body;
  try {
    const result = await createExercise(workout_id, exercise_name, sets, reps, weight_in_kgs);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;