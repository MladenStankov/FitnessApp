import express from 'express';
import {
  getWorkouts,
  getWorkoutsOfUserByID,
  createWorkout,
  deleteWorkoutByID,
} from "../controllers/workoutsController.js";

const router = express.Router();

// GET routes
router.get('/', async (req, res) => {
  try {
    const workouts = await getWorkouts();
    res.json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/user/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const userWorkouts = await getWorkoutsOfUserByID(userId);
    res.json(userWorkouts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST route
router.post('/', async (req, res) => {
  const { user_id, date, duration_in_minutes, calories_burned } = req.body;
  try {
    const result = await createWorkout(user_id, date, duration_in_minutes, calories_burned);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE route
router.delete('/:id', async (req, res) => {
  const workoutId = req.params.id;
  try {
    const result = await deleteWorkoutByID(workoutId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
